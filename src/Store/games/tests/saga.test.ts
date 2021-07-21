import { expectSaga, testSaga } from 'redux-saga-test-plan';
import i18next from 'i18next';
import { NotificationManager } from 'react-notifications';
import { userInfo } from '/src/Store/game/selectors';
import * as sagas from '../saga';
import { gameStore, getUserLogin } from '../selectors';
import { actionTypes } from '../actionTypes';
import * as actions from '../actions';
import { getRequest } from '/src/helpers/requests';
import { routes } from '/src/constants/routes';
import { support } from '/src/helpers/support';

describe('game Saga', () => {
    describe('', () => {
        let action;
        const realGD = global.Date;
        beforeEach(() => {
            global.Date = jest.fn().mockReturnValue({ getTime: jest.fn().mockReturnValue(1) });
        });
        afterEach(() => {
            global.Date = realGD;
        });
        it('should call initSaga', () => {
            action = { type: actionTypes.INITIALIZE_WEB_SOCKETS_CHANNEL };
            testSaga(sagas.initSaga, action)
                .next()
                .put(actions.initialWebSocket())
                .next()
                .put(actions.setUserLogin())
                .next()
                .put(actions.joinRoom())
                .next()
                .put(actions.playWithBot())
                .next()
                .isDone();
        });
        it('should error in connectionSaga ', () => {
            action = { type: actionTypes.CONNECT };
            const error = 'error';
            testSaga(sagas.connectionSaga, action)
                .next()
                .throw(error)
                .call([NotificationManager, NotificationManager.error],
                    i18next.t('server_error_text'), i18next.t('server_error'), 2000)
                .next()
                .isDone();
        });
        it('should call getAllRoomsSaga', () => {
            const mockRooms = [{ room_id: 1, room_name: 'global' }];
            const mockRoomsFolder = { global: [] };
            action = { type: actionTypes.GET_ALL_ROOMS };
            testSaga(sagas.getAllRoomsSaga, action)
                .next()
                .select(userInfo)
                .next({ id: 1 })
                .put(actions.sendRoomsRequest())
                .next()
                .call(getRequest, `${routes.chat.rooms}?id=${1}`)
                .next(mockRooms)
                .put(actions.reciveSuccessRoomsRequest())
                .next()
                .put(actions.setAllRooms(mockRooms))
                .next()
                .call([support, support.getMessagesFolders], mockRooms)
                .next(mockRoomsFolder)
                .put(actions.putMessagesFolders(mockRoomsFolder))
                .next()
                .call([sagas.globalSocket, sagas.globalSocket.emit], 'join', mockRooms)
                .next()
                .isDone();
        });
        it('should error in getAllRoomsSaga ', () => {
            action = { type: actionTypes.GET_ALL_ROOMS };
            const error = 'error';
            testSaga(sagas.getAllRoomsSaga, action)
                .next()
                .throw(error)
                .put(actions.reciveErrorRoomsRequest())
                .next()
                .call([NotificationManager, NotificationManager.error],
                    i18next.t('server_error_text'), i18next.t('server_error'), 2000)
                .next()
                .isDone();
        });
        describe('fork', () => {
            it('should fork watchers', () => {
                expectSaga(sagas.watcherGames)
                    .put({ type: 'FORKED' })
                    .run();
            });
        });
    });
});
