import { eventChannel, END } from 'redux-saga';
import { routes } from 'src/constants/routes';
import { takeEvery, call, put, take, select } from 'redux-saga/effects';
import { actionTypes } from './actionTypes';
import { NotificationManager } from 'react-notifications';
import i18next from 'i18next';
import {
  initialWebSocket, setRooms, setUserLogin, joinRoom, playWithBot
} from './actions';
import SockJS from 'socket.io-client';

export let globalSocket = { emit: () => { }, on: () => { } };

// export const connect = () => {
//       globalSocket = new SockJS(routes.baseWebSocketUrl, null, {
//       transports: ['xhr-streaming'],
//       headers: { 'Authorization': 'Basic ' + btoa(username + ":" + password) }
//     });
// };

function* setRoom() {
  try {
    console.log("globalSocket", globalSocket);
    // const rooms = yield call(getRequest, routes.rooms);
    // yield put(setRooms(rooms));
      yield call([globalSocket, globalSocket.send], '/createRoom ', {"creatorLogin":"mary", "gameType":"Checkers", "id":null});
  } catch (e) {
    console.log(e);
        // yield put(reciveErrorRoomsRequest());
      yield call([NotificationManager, NotificationManager.error],
            i18next.t('server_error_text'), i18next.t('server_error'), 2000);
  }
}

export const createSocketChannel = socket => eventChannel((emit) => {
    socket.onmessage('set_user_login', data => emit(setUserLogin(data)));
    socket.onmessage('join_room', data => emit(joinRoom(data)));
    socket.onmessage('play-with-bot', data => emit(playWithBot(data)));
    socket.onmessage('*', data => emit(console.log(data)));
    socket.onmessage('error', ({ error }) => {
        NotificationManager.error(i18next.t(error), i18next.t('input_error'), 2000);
    });
    return () => {
        socket.onclose = () => {
      emit(END);
      };
    };
});

// function* createEventChannel(socket) {
//   return eventChannel(emit => {
//     socket.onmessage((event) => emit(event.data));
//     socket.onclose = () => {
//       emit(END);
//     };

//     const unsubscribe = () => {
//       socket.onmessage = null;
//     };

//     return unsubscribe;
//   });
// }

function* initializeWebSocketsChannel() {
  console.log('globalSocket22', globalSocket);
  globalSocket = new SockJS(routes.baseWebSocketUrl, null, {
  transports: ['xhr-streaming'],
  headers: { 'Authorization': 'Bearer  ' + token}
});
  // const socket = new WebSocket(routes.baseWebSocketUrl);
  console.log('globalSocket3333333', globalSocket);
  globalSocket.onopen = () => {
    console.log('open');
    globalSocket.send('test');
  };
  globalSocket.onerror = (e) => {
    console.error(e);
  };
  const channel = yield call(createSocketChannel, globalSocket);
  while (channel) {
    const action = yield take(channel);
    yield put(action);
  }
}

export function* watcherGames() {
  yield takeEvery(actionTypes.INITIALIZE_WEB_SOCKETS_CHANNEL, initializeWebSocketsChannel);
  yield takeEvery(actionTypes.SET_ROOMS, setRoom);
}
