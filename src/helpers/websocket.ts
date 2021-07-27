import { Stomp, CompatClient } from '@stomp/stompjs';
import { eventChannel } from 'redux-saga';
import { routes } from 'src/constants/routes';
import { support } from 'src/helpers/support';
import { setAllRooms } from 'src/Store/games/actions';

export let stompClient: CompatClient;

export const connection = (token: string) => {
    const socket = new WebSocket(`${routes.baseWebSocketUrl}${routes.game_menu}`);
    stompClient = Stomp.over(socket);
    return new Promise(resolve => stompClient
        .connect({ Authorization: `Bearer ${token}` }, () => resolve(stompClient)));
};

export const createStompChannel = (stompClient: CompatClient) => eventChannel((emit) => {
    const roomsSub = stompClient.subscribe(routes.ws.rooms, ({ body }) => emit(setAllRooms(JSON.parse(body))));
    const errorSub = stompClient.subscribe(routes.ws.errors, support.errorCatcher);
    const stepsSub = stompClient.subscribe(routes.ws.user_game, support.possibleStep);
    return () => {
        roomsSub.unsubscribe();
        errorSub.unsubscribe();
        stepsSub.unsubscribe();
    };
});

export const init = (stompClient: CompatClient) => {
    stompClient.send(routes.ws.update_room);
};
