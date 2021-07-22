import { routes } from 'src/constants/routes';
import { takeEvery, call, take, put, select} from 'redux-saga/effects';
import { Stomp, CompatClient } from '@stomp/stompjs';
import { v4 as uuidv4 } from 'uuid';
import { NotificationManager } from 'react-notifications';
import { eventChannel, SagaIterator } from 'redux-saga';
import i18next from 'i18next';
import { support } from 'src/helpers/support';
import { actionTypes } from './actionTypes';
import { setAllRooms } from './actions';
import { getUserLogin } from '../login/selectors';

let stompClient: CompatClient | null = null;

export const connection = (token: string) => {
    console.log("connection");
    const socket = new WebSocket(`${routes.baseWebSocketUrl}${routes.game_menu}`);
    stompClient = Stomp.over(socket);
    return new Promise((resolve) => stompClient
        .connect({ Authorization: `Bearer ${token}` }, () => resolve(stompClient)));
};

export const createStompChannel = (stompClient: CompatClient) => eventChannel((emit) => {
    const roomsSub = stompClient.subscribe(`${routes.baseWebSocketUrl2}${routes.ws.update_room}`, ({ body }) => emit(setAllRooms(JSON.parse(body))));
    console.log("roomsSub", roomsSub);
    const errorSub = stompClient.subscribe(routes.ws.errors, support.errorCatcher);
    return () => {
        roomsSub.unsubscribe();
        errorSub.unsubscribe();
    };
});

export const init = (stompClient: CompatClient) => {
    console.log("init");
    stompClient.send(routes.ws.update_room);
};

export function* workerConnection(): SagaIterator {
    console.log("workerConnection");
    try {
        const token: string = yield call([support, support.getTokenFromCookie], 'token');
        const stompClient = yield call(connection, token);
        const stompChannel = yield call(createStompChannel, stompClient);

        console.log("createStompChannel23232323", createStompChannel);
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

export function* createRoomSaga({ payload }): SagaIterator {
    try {
        const creatorLogin = yield select(getUserLogin);
        console.log("creatorLogin", creatorLogin);
    const body = {
        creatorLogin,
        gameType: payload,
        id: uuidv4(),
        };
        const token: string = yield call([support, support.getTokenFromCookie], 'token');
        console.log("token", token);
    yield call(
        [stompClient, stompClient.send], routes.ws.create_room, { Authorization: token }, JSON.stringify(body),
        );
    yield call([stompClient, stompClient.send], routes.ws.update_room, { }, JSON.stringify(body));
    } catch (error) {
        console.log("error", error);
    }
}

export function* watcherGames() {
    yield takeEvery(actionTypes.CONNECT_WEB_SOCKET, workerConnection);
    yield takeEvery(actionTypes.CREATE_ROOM, createRoomSaga);
}
