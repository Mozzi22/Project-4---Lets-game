import { takeEvery, call, put, take, select } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { io } from 'socket.io-client';
import { NotificationManager } from 'react-notifications';
import i18next from 'i18next';
import { actionTypes } from './actionTypes';
import {
    putOnlineUsers,
    setAllRooms,
    putNewMessages,
    sendRoomsRequest,
    reciveSuccessRoomsRequest,
    reciveErrorRoomsRequest,
    connection,
    getAllMessages,
    putMessagesFolders,
    putNewRoom,
    putMessageAudio,
} from './actions';
import { userInfo } from '../user/selectors';
import { getRequest } from 'src/helpers/requests';
import { routes } from 'src/constants/routes';
import { support } from '/src/helpers/support';

export let globalSocket = { emit: () => { }, on: () => { } };

export const createSocketChannel = socket => eventChannel((emit) => {
    socket.on('users_online', data => emit(putOnlineUsers(data)));
    socket.on('messages', (data) => {
        emit(putNewMessages(data));
        emit(putMessageAudio(data));
    });
    socket.on('join_new_room', data => emit(putNewRoom(data)));
    socket.on('error', ({ error }) => {
        NotificationManager.error(i18next.t(error), i18next.t('input_error'), 2000);
    });
    return () => {
        socket.off('users_online', data => emit(putOnlineUsers(data)));
    };
});
export const connect = (user) => {
    globalSocket = io('http://54.157.157.209:2282');
    return new Promise((resolve) => {
        globalSocket.on('connect', () => {
            globalSocket.emit('clientInfo', user);
            resolve(globalSocket);
        });
    });
};
export function* initSaga() {
    yield put(connection());
    yield call(getAllRoomsSaga);
    yield put(getAllMessages());
}
export function* connectionSaga() {
    try {
        const user = yield select(userInfo);
        const socket = yield call(connect, user);
        const socketChannel = yield call(createSocketChannel, socket);
        while (socketChannel) {
            const payload = yield take(socketChannel);
            yield put(payload);
        }
    } catch (e) {
        yield call([NotificationManager, NotificationManager.error], i18next.t('server_error_text'), i18next.t('server_error'), 2000);
    }
}
export function* getAllRoomsSaga() {
    try {
        const { id } = yield select(userInfo);
        yield put(sendRoomsRequest());
        const rooms = yield call(getRequest, `${routes.chat.rooms}?id=${id}`);
        yield put(reciveSuccessRoomsRequest());
        yield put(setAllRooms(rooms));
        const messagesFolders = yield call([support, support.getMessagesFolders], rooms);
        yield put(putMessagesFolders(messagesFolders));
        yield call([globalSocket, globalSocket.emit], 'join', rooms);
        return rooms;
    } catch (e) {
        yield put(reciveErrorRoomsRequest());
        yield call([NotificationManager, NotificationManager.error],
            i18next.t('server_error_text'), i18next.t('server_error'), 2000);
    }
}
export function* createNewRoomSaga({ payload }) {
    try {
        const { id } = yield select(userInfo);
        yield call([globalSocket, globalSocket.emit], 'new_room', { id, room_name: payload });
    } catch (e) {
        yield call([NotificationManager, NotificationManager.error],
            i18next.t('server_error_text'), i18next.t('server_error'), 2000);
    }
}
export function* watcherChatOperations() {
    yield takeEvery(actionTypes.INIT_CHAT, initSaga);
    yield takeEvery(actionTypes.CONNECT, connectionSaga);
    yield takeEvery(actionTypes.CREATE_NEW_ROOM, createNewRoomSaga);
}
