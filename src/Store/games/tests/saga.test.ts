// import { expectSaga, testSaga } from 'redux-saga-test-plan';
// import { NotificationManager } from 'react-notifications';
// import i18next from 'i18next';
// import { v4 as uuidv4 } from 'uuid';
// import { Stomp } from '@stomp/stompjs';
// import * as sagas from '../saga';
// import { support } from 'src/helpers/support';
// import { routes } from 'src/constants/routes';
// import { getUserLogin } from 'src/Store/login/selectors';

// describe('gameSaga', () => {
//     describe('fork', () => {
//         it('should fork watchers', () => {
//             expectSaga(sagas.watcherGames)
//                 .put({ type: 'FORKED' })
//                 .run();
//         });
//     });
//     describe('init', () => {
//         it('should be defined', () => {
//             expect(sagas.init).toBeDefined();
//         });
//         it('should be function', () => {
//             expect(typeof sagas.init).toBe('function');
//          });
//         it('should call send method with right argument', () => {
//             const socket = new WebSocket('ws:localhost:7777');
//             const stompClient = Stomp.over(socket);
//             stompClient.send = jest.fn();
//             sagas.init(stompClient);
//             expect(stompClient.send).toHaveBeenCalledWith(routes.ws.update_room);
//         });
//     describe('workerConnection', () => {
//         it('should call workerLogin without error', () => {
//             const token = 'absd';
//             const socket = new WebSocket('ws:localhost:7777');
//             const stompClient = Stomp.over(socket);
//             testSaga(sagas.workerConnection)
//                 .next()
//                 .call([support, support.getTokenFromCookie], 'token')
//                 .next(token)
//                 .call(sagas.connection, token)
//                 .next(stompClient)
//                 .call(sagas.createStompChannel, stompClient)
//                 .next()
//                 .call(sagas.init, stompClient)
//                 .next()
//                 .isDone();
//         });
//         it('should catch error, ', () => {
//             const error = new Error('error');
//             testSaga(sagas.workerConnection)
//                 .next()
//                 .throw(error)
//                 .call([NotificationManager, NotificationManager.error],
//                     i18next.t('server_error_text'), i18next.t('server_error'), 2000)
//                 .next()
//                 .isDone();
//         });
//     });
//     describe('function createRoomSaga', () => {
//         it('should call createRoomSaga', () => {
//             const payload = 'Checkers';
//             const userLogin = 'mary';
//             const token = 'sabsd';
//             const uuid = '1234';
//             const testBody = JSON.stringify({
//                 creatorLogin: userLogin,
//                 gameType: payload,
//                 id: uuid,
//             });
//             testSaga(sagas.createRoomSaga, { payload })
//                 .next()
//                 .select(getUserLogin)
//                 .next(userLogin)
//                 .call(uuidv4)
//                 .next(uuid)
//                 .call([support, support.getTokenFromCookie], 'token')
//                 .next(token)
//                 .call([sagas.stompClient, sagas.stompClient.send],
//                     routes.ws.create_room, { Authorization: token }, testBody)
//                 .next()
//                 .call([sagas.stompClient, sagas.stompClient.send],
//                     routes.ws.update_room, {}, testBody)
//                 .next()
//                 .isDone();
//         });
//     });
        
        
        import { Stomp } from '@stomp/stompjs';
import { expectSaga, testSaga } from 'redux-saga-test-plan';
import { NotificationManager } from 'react-notifications';
import i18next from 'i18next';
import { v4 as uuidv4 } from 'uuid';
import { getActualRoomId, getActualRoom, getUserLogin, getPossibleSteps } from '../selectors';
import { putPossibleSteps, getStepOrder, askBotStep, setStepOrder, setActualRoom, setWinner, setStepHistory, getStepOrder as actionGetStepOrder } from '../actions';

import { stompClient } from '../saga';

import { support } from 'src/helpers/support';
import { routes } from 'src/constants/routes';
import * as sagas from '../saga';

jest.mock('../../../index', () => ({ store: { dispatch: jest.fn() } }));
Date.now = jest.fn().mockReturnValue(1);

describe('gameSaga', () => {
  
    describe('fork', () => {
        it('should fork watchers', () => {
            expectSaga(sagas.watcherGame)
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
            const socket = new WebSocket('ws:localhost:8080');
            const stompClient = Stomp.over(socket);
            stompClient.send = jest.fn();
            sagas.init(stompClient);
            expect(stompClient.send).toHaveBeenCalledWith(routes.ws.update_room);
        });
    });
    describe('workerConnection', () => {
        it('should call workerLogin without Error', () => {
            const token = 'someVeryAwesomeTokenStringVeryVeryLong';
            const socket = new WebSocket('ws:localhost:8080');
            const stompClient = Stomp.over(socket);
            testSaga(sagas.workerConnection)
                .next()
                .call([support, support.getTokenFromCookie], 'token')
                .next(token)
                .call(sagas.connection, token)
                .next(stompClient)
                .call(sagas.createStompChannel, stompClient)
                .next()
                .put(setWinner(''))
                .next()
                .call([localStorage, localStorage.getItem], 'actualRoom')
                .next(null)
                .call(sagas.init, stompClient)
                .next()
                .isDone();
        });
        it('should go in catch block, ', () => {
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
    describe('workerSubscribeRoom', () => {
        it('should call workerSubscribeRoom', () => {
            const payload = 'someuuuuuuoid';
            testSaga(sagas.subscribeRoom, { payload })
                .next()
                .call([sagas.stompClient, sagas.stompClient.subscribe],
                    `${routes.ws.game}${payload}`, support.subGame)
                .next()
                .isDone();
        });
    });
    describe('createRoomSaga', () => {
        it('should call createRoomSaga', () => {
            const payload = 'Tic-tac-toe';
            const userLogin = 'kekShrek';
            const token = 'sometokenstring';
            const uuid = '21361287362183127836213';
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
                    routes.ws.update_room, { Authorization: token })
                .next()
                .isDone();
        });
    });
    describe('workerJoinRoom', () => {
        it('should call workerJoinRoom', () => {
            const payload = '1237123821y3hdasdsahd';
            const userLogin = 'kekShrek';
            const testBody = JSON.stringify({
                guestLogin: userLogin,
                id: payload,
            });
            testSaga(sagas.joinRoom, { payload })
                .next()
                .select(getUserLogin)
                .next(userLogin)
                .call([sagas.stompClient, sagas.stompClient.send], routes.ws.join_room, {}, testBody)
                .next()
                .call([sagas.stompClient, sagas.stompClient.send], routes.ws.update_room)
                .next()
                .isDone();
        });
    });
    describe('workerGetStepOrder', () => {
        it('should call workerJoinRoom', () => {
            const payload = { gameType: 'Tic-tac-toe', uuid: '2187378213621y312321' };
            const testBody = JSON.stringify({ gameType: payload.gameType });
            testSaga(sagas.getStepsOrder, { payload })
                .next()
                .call([sagas.stompClient, sagas.stompClient.send],
                     routes.ws.get_step_order, { uuid: payload.uuid }, testBody)
                .next()
                .isDone();
        });
    });
    describe('workerTicStep', () => {
        it('should call workerTicStep', () => {
            const payload = '4';
            const testActualRoom = { id: '213123213', gameType: 'Tic-tac-toe' };
            const testLogin = 'KekShrek';
            const testBody = JSON.stringify({
                gameType: testActualRoom.gameType,
                stepDto: {
                    login: testLogin,
                    step: payload,
                    time: Date.now(),
                    id: testActualRoom.id,
                },
            });
            testSaga(sagas.ticTacSteps, { payload })
                .next()
                .select(getActualRoom)
                .next(testActualRoom)
                .select(getUserLogin)
                .next(testLogin)
                .call([sagas.stompClient, sagas.stompClient.send],
                    routes.ws.do_step, { uuid: testActualRoom.id },
                    testBody)
                .next()
                .put(actionGetStepOrder(
                    {
                        gameType: testActualRoom.gameType,
                        uuid: testActualRoom.id,
                    }))
                .next()
                .isDone();
        });
    });
    describe('workerCleanOldGame', () => {
        it('should call workerCleanOldGame', () => {
            const standartActualRoom = {
                gameType: '',
                creatorLogin: '',
                guestLogin: '',
                tartTime: 0,
                id: '',
                stepDoList: [],
            };
            testSaga(sagas.cleanOldGame)
                .next()
                .call([localStorage, localStorage.removeItem], 'actualRoom')
                .next()
                .call([localStorage, localStorage.removeItem], 'stepHistory')
                .next()
                .put(setStepHistory([]))
                .next()
                .put(setActualRoom(standartActualRoom))
                .next()
                .isDone();
        });
    });
    describe('workerAskBotStep', () => {
        it('should call workerAddBot', () => {
            const actualRoom = { id: '121212', gameType: 'Tic-tac-toe' };
            testSaga(sagas.getBotSteps)
                .next()
                .select(getActualRoom)
                .next(actualRoom)
                .call([stompClient, stompClient.send], routes.ws.get_bot_step,
                    { uuid: actualRoom.id }, JSON.stringify(actualRoom))
                .next()
                .isDone();
        });
    });
    describe('workerBotSub', () => {
        it('should call getBotSteps', () => {
            const payload = '1232132132131231';
            testSaga(sagas.getBotSteps, payload)
                .next()
                .call([stompClient, stompClient.subscribe], `${routes.ws.get_bot_step}${payload}`, support.subBot)
                .next()
                .isDone();
        });
    });
    describe('doBotStepTicTac', () => {
        it('should call doBotStepTicTac', () => {
            const payload = '4';
            const actualRoom = { id: '121212', gameType: 'Tic-tac-toe' };
            testSaga(sagas.doBotStepTicTac, { payload })
                .next()
                .select(getActualRoom)
                .next(actualRoom)
                .call([stompClient, stompClient.send], routes.ws.do_step,
                    { uuid: actualRoom.id }, JSON.stringify({
                        gameType: actualRoom.gameType,
                        stepDto: {
                            login: 'Bot',
                            step: payload,
                            time: Date.now(),
                            id: actualRoom.id,
                        },
                    }))
                .next()
                .call(sagas.getPossibleStep, {
                    payload:
                        { gameType: actualRoom.gameType, uuid: actualRoom.id },
                })
                .next()
                .isDone();
        });
    });
    describe('workerGameEvent', () => {
        it('should call workerGameEvent, parsedBody with winner field', () => {
            const parsedBody = { winner: 'gfvfc' };
            const payload = JSON.stringify(parsedBody);
            testSaga(sagas.workerGameEvent, { payload })
                .next()
                .call([JSON, JSON.parse], payload)
                .next(parsedBody)
                .put(setWinner(parsedBody.winner))
                .next()
                .isDone();
        });
        it('should call workerGameEvent, parsedBody with field field', () => {
            const parsedBody: any = { field: ['null', 'X', 'O'] };
            const payload = JSON.stringify(parsedBody);
            const stringifyField = JSON.stringify(parsedBody.field);
            const actualRoom = { id: '213218963218392183', gameType: 'Tic-tac-toe' };
            testSaga(sagas.workerGameEvent, { payload })
                .next()
                .call([JSON, JSON.parse], payload)
                .next(parsedBody)
                .select(getActualRoom)
                .next(actualRoom)
                .call([JSON, JSON.stringify], parsedBody.field)
                .next(stringifyField)
                .call([localStorage, localStorage.setItem], 'stepHistory', stringifyField)
                .next()
                .put(setStepHistory(parsedBody.field))
                .next()
                .put(actionGetStepOrder({ uuid: actualRoom.id, gameType: actualRoom.gameType }))
                .next()
                .isDone();
        });
        it('should call workerGameEvent, parsedBody with stepDtoList field', () => {
            const parsedBody = {
                stepDtoList: [],
                id: '21312312',
                creatorLogin: 'Me',
                guestLogin: 'Bot',
                gameType: 'Tic-tac-toe',
            };
            const payload = JSON.stringify(parsedBody);
            testSaga(sagas.workerGameEvent, { payload })
                .next()
                .call([JSON, JSON.parse], payload)
                .next(parsedBody)
                .call([JSON, JSON.stringify], [])
                .next(JSON.stringify([]))
                .put(setActualRoom(parsedBody))
                .next()
                .put(actionGetStepOrder(
                    { uuid: parsedBody.id, gameType: parsedBody.gameType }))
                .next()
                .put(setWinner(''))
                .next()
                .call([localStorage, localStorage.setItem], 'actualRoom', payload)
                .next()
                .call([localStorage, localStorage.setItem], 'stepHistory', JSON.stringify([]))
                .next()
                .isDone();
        });
        it('should call workerGameEvent, parsedBody with stepOrderLogin field !== stepOrderSelector !== Bot gameType === "Tic-tac-toe"', () => {
            const parsedBody = {
                stepOrderLogin: 'grek',
            };
            const actualRoom = { id: '1212', gameType: 'Tic-tac-toe' };
            const payload = JSON.stringify(parsedBody);
            testSaga(sagas.workerGameEvent, { payload })
                .next()
                .call([JSON, JSON.parse], payload)
                .next(parsedBody)
                .select(getActualRoom)
                .next(actualRoom)
                .put(setStepOrder(parsedBody.stepOrderLogin))
                .next()
                .isDone();
        });
        it('should call workerGameEvent, parsedBody with stepOrderLogin field !== stepOrderSelector === Bot gameType === "Tic-tac-toe"', () => {
            const parsedBody = {
                stepOrderLogin: 'Bot',
            };
            const actualRoom = { id: '1212', gameType: 'Tic-tac-toe' };
            const payload = JSON.stringify(parsedBody);
            testSaga(sagas.workerGameEvent, { payload })
                .next()
                .call([JSON, JSON.parse], payload)
                .next(parsedBody)
                .select(getActualRoom)
                .next(actualRoom)
                .put(askBotStep())
                .next()
                .put(setStepOrder(parsedBody.stepOrderLogin))
                .next()
                .isDone();
        });
        it('should call workerGameEvent, parsedBody without all', () => {
            const parsedBody = {};
            const payload = JSON.stringify(parsedBody);
            testSaga(sagas.workerGameEvent, { payload })
                .next()
                .call([JSON, JSON.parse], payload)
                .next(parsedBody)
                .isDone();
        });
    });
    describe('workerDisconnect', () => {
        it('should call workerDisconnect', () => {
            testSaga(sagas.workerDisconnect)
                .next()
                .call([stompClient, stompClient.disconnect])
                .next()
                .isDone();
        });
    });
    describe('getPossibleStep', () => {
        it('should call getPossibleStep', () => {
            const payload = '13';
            const actualRoom = { id: '12321312', gameType: 'Checkers' };
            const login = 'userLogin';
            const body = {
                gameType: actualRoom.gameType,
                stepDto: {
                    login,
                    step: payload,
                    time: Date.now(),
                    id: actualRoom.id,
                },
            };
            testSaga(sagas.getPossibleStep, { payload })
                .next()
                .select(getActualRoom)
                .next(actualRoom)
                .select(getUserLogin)
                .next(login)
                .call([JSON, JSON.stringify], body)
                .next(JSON.stringify(body))
                .call([stompClient, stompClient.send],
                    routes.ws.get_possible_steps,
                    { uuid: actualRoom.id },
                    JSON.stringify(body))
                .next()
                .isDone();
        });
    });
    describe('workerCheckerStep', () => {
        it('should call workerCheckerStep', () => {
            const payload = 17;
            const possibleSteps = [{ startIndex: 13 }];
            const actualRoom = { id: '12321321312', gameType: 'Checkers' };
            const userLogin = 'SADKEK';
            testSaga(sagas.workerCheckerStep, { payload })
                .next()
                .select(getPossibleSteps)
                .next(possibleSteps)
                .select(getActualRoom)
                .next(actualRoom)
                .select(getUserLogin)
                .next(userLogin)
                .call([stompClient, stompClient.send],
                    routes.ws.do_step, { uuid: actualRoom.id }, JSON.stringify({
                    gameType: actualRoom.gameType, stepDto: { login: userLogin, step: '13_17', time: Date.now(), id: actualRoom.id },
                    }))
                .next()
                .put(putPossibleSteps([]))
                .next()
                .put(getStepOrder({ uuid: actualRoom.id, gameType: actualRoom.gameType }))
                .next()
                .isDone();
        });
    });
    describe('workerExitGame', () => {
        it('should call workerCheckerStep', () => {
            const guestLogin = 'SADKEK';
            const id = '1hasdkjsadsadsahdg';
            const body = { guestLogin, id };
            const stringifyBody = JSON.stringify(body);
            testSaga(sagas.workerExitGame)
                .next()
                .select(getUserLogin)
                .next(guestLogin)
                .select(getActualRoomId)
                .next(id)
                .call([JSON, JSON.stringify], body)
                .next(stringifyBody)
                .call([stompClient, stompClient.send], routes.ws.actions.leaveTheGame,
                    { uuid: id }, stringifyBody)
                .next()
                .call(sagas.workerCleanOldGame)
                .next()
                .isDone();
        });
    });
});

