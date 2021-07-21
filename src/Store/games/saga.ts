import { eventChannel, SagaIterator } from 'redux-saga';
import { routes } from 'src/constants/routes';
import { takeEvery, call, put, take, select } from 'redux-saga/effects';
import { actionTypes } from './actionTypes';
import { NotificationManager } from 'react-notifications';
import i18next from 'i18next';
import { setRooms } from './actions';
import { Stomp, CompatClient } from '@stomp/stompjs';
import { v4 as uuidv4 } from 'uuid';
import { getUserLogin } from './selectors';

let stompClient: CompatClient;

export const connectSocket = (token: string) => {
    const socket = new WebSocket(routes.baseWebSocketUrl);
    const stompClient = Stomp.over(socket);
    return new Promise((resolve) => stompClient.connect({ Authorization: `Bearer ${token}` }, () => resolve(stompClient)));
};

const errorCatcher = ({ body }) => {
    const { body: parsedBody } = JSON.parse(body);
    NotificationManager.error(parsedBody, i18next.t('game_error'), 3000);
};

export const createStompChannel = (stompClient: CompatClient) => eventChannel((emit) => {
    const roomsSub = stompClient.subscribe(routes.websocket.rooms, ({ body }) => emit(setRooms(JSON.parse(body))));
    const errorSub = stompClient.subscribe(routes.websocket.errors, errorCatcher);
    return () => {
        roomsSub.unsubscribe();
        errorSub.unsubscribe();
    };
});

export const init = (stompClient: CompatClient) => {
    stompClient.send(routes.websocket.update_room);
};

const getTokenFromCookie = (name: string) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};

export function* createRoom({ payload }): SagaIterator {
    const creatorLogin = yield select(getUserLogin);
    const body = {
        creatorLogin,
        gameType: payload,
        id: uuidv4(),
    };
    const token: string = yield call([getTokenFromCookie, getTokenFromCookie], 'token');
    yield call(
        [stompClient, stompClient.send], routes.websocket.create_room, { Authorization: token }, JSON.stringify(body),
        );
    yield call([stompClient, stompClient.send], routes.websocket.update_room, { Authorization: token });
}

export function* workerConnection(): SagaIterator {
    try {
        const token: string = yield call([getTokenFromCookie, getTokenFromCookie], 'token');
        const stompClient = yield call(connectSocket, token);
        const stompChannel = yield call(createStompChannel, stompClient);
        yield call(init, stompClient);
        while (stompChannel) {
            const payload = yield take(stompChannel);
            yield put(payload);
        }
    } catch (e) {
        yield call([NotificationManager, NotificationManager.error],
            i18next.t('server_error_text'), i18next.t('server_error'), 2000);
    }
}

export function* watcherGames() {
  yield takeEvery(actionTypes.CONNECT_WEB_SOCKET, connectSocket);
  yield takeEvery(actionTypes.SET_ROOMS, createRoom);
}
