import { expectSaga, testSaga } from 'redux-saga-test-plan';
import { NotificationManager } from 'react-notifications';
import i18next from 'i18next';
import { v4 as uuidv4 } from 'uuid';
import { Stomp } from '@stomp/stompjs';
import * as sagas from '../saga';
import { support } from 'src/helpers/support';
import { routes } from 'src/constants/routes';
import { getUserLogin } from 'src/Store/login/selectors';

describe('gameSaga', () => {
    describe('fork', () => {
        it('should fork watchers', () => {
            expectSaga(sagas.watcherGames)
                .put({ type: 'FORKED' })
                .run();
        });
    });
    describe('init', () => {
        it('should be defined', () => {
            expect(sagas.init).toBeDefined();
        });
        it('should be function', () => {
            expect(typeof sagas.init).toBe('function');
         });
        it('should call send method with right argument', () => {
            const socket = new WebSocket('ws:localhost:7777');
            const stompClient = Stomp.over(socket);
            stompClient.send = jest.fn();
            sagas.init(stompClient);
            expect(stompClient.send).toHaveBeenCalledWith(routes.ws.update_room);
        });
    describe('workerConnection', () => {
        it('should call workerLogin without error', () => {
            const token = 'absd';
            const socket = new WebSocket('ws:localhost:7777');
            const stompClient = Stomp.over(socket);
            testSaga(sagas.workerConnection)
                .next()
                .call([support, support.getTokenFromCookie], 'token')
                .next(token)
                .call(sagas.connection, token)
                .next(stompClient)
                .call(sagas.createStompChannel, stompClient)
                .next()
                .call(sagas.init, stompClient)
                .next()
                .isDone();
        });
        it('should catch error, ', () => {
            const error = new Error('error');
            testSaga(sagas.workerConnection)
                .next()
                .throw(error)
                .call([NotificationManager, NotificationManager.error],
                    i18next.t('server_error_text'), i18next.t('server_error'), 2000)
                .next()
                .isDone();
        });
    });
    describe('function createRoomSaga', () => {
        it('should call createRoomSaga', () => {
            const payload = 'Checkers';
            const userLogin = 'mary';
            const token = 'sabsd';
            const uuid = '1234';
            const testBody = JSON.stringify({
                creatorLogin: userLogin,
                gameType: payload,
                id: uuid,
            });
            testSaga(sagas.createRoomSaga, { payload })
                .next()
                .select(getUserLogin)
                .next(userLogin)
                .call(uuidv4)
                .next(uuid)
                .call([support, support.getTokenFromCookie], 'token')
                .next(token)
                .call([sagas.stompClient, sagas.stompClient.send],
                    routes.ws.create_room, { Authorization: token }, testBody)
                .next()
                .call([sagas.stompClient, sagas.stompClient.send],
                    routes.ws.update_room, {}, testBody)
                .next()
                .isDone();
        });
    });
});
