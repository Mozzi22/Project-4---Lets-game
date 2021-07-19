import { eventChannel } from 'redux-saga';
import { routes } from 'src/constants/routes';
import { takeEvery, call, put, take, select } from 'redux-saga/effects';
import { actionTypes } from './actionTypes';

function* createEventChannel(socket) {
  return eventChannel(emit => {
    socket.onmessage((message) => emit(message.data));
    return () => {
      socket.close();
    };
  });
}

function* initializeWebSocketsChannel() {
  const socket = new WebSocket(routes.baseWebSocketUrl);
  const channel = yield call(createEventChannel, socket);
  while (true) {
    const {message} = yield take(channel);
    yield put({type: actionTypes.WEBSOCKET_MESSAGE_RECEIVED, message});
  }
}

export function* watcherGames() {
  yield [
    takeEvery(actionTypes.INITIALIZE_WEB_SOCKETS_CHANNEL, initializeWebSocketsChannel)
  ];
}
