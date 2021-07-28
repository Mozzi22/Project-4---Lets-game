import { SagaIterator } from '@redux-saga/types';
import { takeEvery, call, take, put, select } from 'redux-saga/effects';
import { Stomp, CompatClient } from '@stomp/stompjs';
import { v4 as uuidv4 } from 'uuid';
import { NotificationManager } from 'react-notifications';
import { eventChannel } from 'redux-saga';
import i18next from 'i18next';
import { routes } from 'src/constants/routes';
import { getUserLogin, getActualRoom, getStepOrderSelector, getPossibleSteps } from './selectors';
import { support } from 'src/helpers/support';
import { BOT_NAME, DRAW, CHECKER_FIELD_INIT, CHECKERS } from 'src/constants/componentsСonsts';
import { actionTypes } from './actionTypes';
import {
    setAllRooms,
    setCurrentRoom,
    getStepOrder,
    setStepHistory,
    setWinner,
    setStepOrder,
    askBotStep,
    putPossibleSteps,
    setStatisticsSuccess
} from './actions';
import { postRequest } from 'src/helpers/requests';

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

export function* workerConnection() :SagaIterator {
    try {
        const token = yield call([support, support.getTokenFromCookie], 'token');
        const stompClient = yield call(connection, token);
        const stompChannel = yield call(createStompChannel, stompClient);
        yield put(setWinner(''));
        const stringifyActualRoom = yield call([localStorage, localStorage.getItem], 'actualRoom');
        if (stringifyActualRoom) {
            const actualRoom = yield call([JSON, JSON.parse], stringifyActualRoom);
            if (actualRoom.guestLogin === BOT_NAME) yield call(topicBotSteps, actualRoom.id);
            yield call(subscribeRoom, { payload: actualRoom.id });
            yield put(setCurrentRoom(actualRoom));
            yield put(getStepOrder({ gameType: actualRoom.gameType, uuid: actualRoom.id }));
        }
        yield call(init, stompClient);
        while (stompChannel) {
            const action = yield take(stompChannel);
            if (Array.isArray(action.payload)) {
                const userLogin = yield select(getUserLogin);
                const actualRoom = action.payload.find(el => el.creatorLogin === userLogin);
                if (actualRoom) yield call(subscribeRoom, { payload: actualRoom.id });
            }
            yield put(action);
        }
    } catch (e) {
        yield call([NotificationManager, NotificationManager.error],
            i18next.t('server_error_text'), i18next.t('server_error'), 2000);
    }
};

export function* subscribeRoom({ payload }): SagaIterator {
    yield call([stompClient, stompClient.subscribe], `${routes.ws.game}${payload}`, support.subGame);
};

export function* joinRoom({ payload }): SagaIterator {
    const userLogin = yield select(getUserLogin);
    const body = { guestLogin: userLogin, id: payload };
    yield call([stompClient, stompClient.send], routes.ws.join_room, {}, JSON.stringify(body));
    yield call([stompClient, stompClient.send], routes.ws.update_room);
}

export function* getStepsOrder({ payload }) {
    yield call([stompClient, stompClient.send], routes.ws.get_step_order,
        { uuid: payload.uuid }, JSON.stringify({ gameType: payload.gameType }));
};

export function* createRoomSaga({ payload }): SagaIterator {
    const creatorLogin = yield select(getUserLogin);
    const newUUID = yield call(uuidv4);
    const body = {
        creatorLogin,
        gameType: payload,
        id: newUUID,
    };
    const token: string = yield call([support, support.getTokenFromCookie], 'token');
    yield call(
        [stompClient, stompClient.send], routes.ws.create_room, { Authorization: token }, JSON.stringify(body),
        );
    yield call([stompClient, stompClient.send], routes.ws.update_room, { Authorization: token });
};

export function* ticTacSteps({ payload }) {
    const { id, gameType } = yield select(getActualRoom);
    const userLogin = yield select(getUserLogin);
    yield call([stompClient, stompClient.send], routes.ws.do_step, { uuid: id }, JSON.stringify({
        gameType, stepDto: { login: userLogin, step: payload, time: Date.now(), id },
    }));
    yield put(getStepOrder({ gameType, uuid: id }));
};

export function* playWithBot({ payload }) {
    const body = { guestLogin: BOT_NAME, id: payload };
    yield call(topicBotSteps, payload);
    yield call([stompClient, stompClient.send], routes.ws.join_room, {}, JSON.stringify(body));
    yield call([stompClient, stompClient.send], routes.ws.update_room);
};

export function* getBotSteps() {
    const { id, gameType } = yield select(getActualRoom);
    const body = { id, gameType };
    yield call([stompClient, stompClient.send], routes.ws.get_bot_step, { uuid: id }, JSON.stringify(body));
};

export function* topicBotSteps(payload: string) {
    yield call([stompClient, stompClient.subscribe], `${routes.ws.bot_steps}${payload}`, support.subBot);
};

export function* doBotStepTicTac({ payload }) {
    const { id, gameType } = yield select(getActualRoom);
    const userLogin = BOT_NAME;
    yield call([stompClient, stompClient.send], routes.ws.do_step, { uuid: id }, JSON.stringify({
        gameType, stepDto: { login: userLogin, step: payload, time: Date.now(), id },
    }));
    yield call(getStepOrder, { payload: { gameType, uuid: id } });
};

export function* workerGameEvent({ payload }) {
    const parsedBody = yield call([JSON, JSON.parse], payload);
    if (parsedBody.winner === null) return yield put(setWinner(DRAW));
    if (parsedBody.winner) return yield put(setWinner(parsedBody.winner));
    if (parsedBody.field) {
        if (parsedBody.field?.gameField) {
            const { id, gameType } = yield select(getActualRoom);
            const stringifyField = yield call([JSON, JSON.stringify], parsedBody.field.gameField);
            yield call([localStorage, localStorage.setItem], 'stepHistory', stringifyField);
            yield put(setStepHistory(parsedBody.field.gameField));
            return yield put(getStepOrder({ uuid: id, gameType }));
        }
        const { id, gameType } = yield select(getActualRoom);
        const stringifyField = yield call([JSON, JSON.stringify], parsedBody.field);
        yield call([localStorage, localStorage.setItem], 'stepHistory', stringifyField);
        yield put(setStepHistory(parsedBody.field));
        return yield put(getStepOrder({ uuid: id, gameType }));
    }
    if (parsedBody.stepDtoList) {
        let firstStepHistory = yield call([JSON, JSON.stringify], []);
        if (parsedBody.gameType === CHECKERS) {
            firstStepHistory = yield call([JSON, JSON.stringify], CHECKER_FIELD_INIT);
            yield put(setStepHistory(CHECKER_FIELD_INIT));
        }
        yield put(setCurrentRoom(parsedBody));
        yield put(getStepOrder({ uuid: parsedBody.id, gameType: parsedBody.gameType }));
        yield put(setWinner(''));
        yield call([localStorage, localStorage.setItem], 'actualRoom', payload);
        return yield call([localStorage, localStorage.setItem], 'stepHistory', firstStepHistory);
    }
    if (parsedBody.stepOrderLogin) {
        const actualRoom = yield select(getActualRoom);
        if (actualRoom.gameType === CHECKERS
            && parsedBody.stepOrderLogin === actualRoom.guestLogin) {
            yield put(setStepOrder(actualRoom.creatorLogin))
            const turn = yield select(getStepOrderSelector);
            if(turn === BOT_NAME) yield put(askBotStep())
            return
        }
        if (actualRoom.gameType === CHECKERS
            && parsedBody.stepOrderLogin === actualRoom.creatorLogin) {
            yield put(setStepOrder(actualRoom.guestLogin))
            const turn = yield select(getStepOrderSelector);
            if(turn === BOT_NAME) yield put(askBotStep())
            return
        }
        if(parsedBody.stepOrderLogin === BOT_NAME)yield put(askBotStep())
        return yield put(setStepOrder(parsedBody.stepOrderLogin));
    }
};

export function* getPossibleStep({ payload }) {
    const { id, gameType } = yield select(getActualRoom);
    const login = yield select(getUserLogin);
    const body = yield call([JSON, JSON.stringify], {
        gameType,
        stepDto: {
            login,
            step: payload,
            time: Date.now(),
            id,
        },
    });
    yield call([stompClient, stompClient.send], routes.ws.get_possible_steps, { uuid: id }, body);
}
export function* checkersSteps({ payload }) {
    const possibleSteps = yield select(getPossibleSteps);
    const startIndex = possibleSteps[0].startIndex;
    const step = `${startIndex}_${payload}`;
    const { id, gameType } = yield select(getActualRoom);
    const userLogin = yield select(getUserLogin);
    yield call([stompClient, stompClient.send], routes.ws.do_step, { uuid: id }, JSON.stringify({
        gameType, stepDto: { login: userLogin, step, time: Date.now(), id },
    }));
    yield put(putPossibleSteps([]));
    yield put(getStepOrder({ uuid: id, gameType }));
}

export function* cleanOldGame() {
    yield call([localStorage, localStorage.removeItem], 'actualRoom');
    yield call([localStorage, localStorage.removeItem], 'stepHistory');
    yield put(setStepHistory([]));
    yield put(setCurrentRoom({
        gameType: '',
        creatorLogin: '',
        guestLogin: '',
        startTime: 0,
        id: '',
        stepDoList: [],
    }));
};

export function* workerDisconnect() {
    yield call([stompClient, stompClient.disconnect]);
};

export function* getStatistics() {
    try {
        const token: string = yield call([support, support.getTokenFromCookie], 'token');
        const username: string = yield select(getUserLogin);
        const body = { username };
        const reqData = yield call(postRequest, routes.statistics.search_user_name, body, { Authorization: token });
        const parsedAnswer = yield call([reqData, reqData.json]);
        yield put(setStatisticsSuccess(parsedAnswer));

    } catch (e) {
        yield call([NotificationManager, NotificationManager.error],
            i18next.t('server_error_text'), i18next.t('server_error'), 2000);
    }
}

export function* watcherGame() {
    yield takeEvery(actionTypes.INITIAL_WEB_SOCKET, workerConnection);
    yield takeEvery(actionTypes.GAME_EVENT, workerGameEvent);
    yield takeEvery(actionTypes.DISCONNECT, workerDisconnect);
    yield takeEvery(actionTypes.SUBSCRIBE_ROOM, subscribeRoom);
    yield takeEvery(actionTypes.CREATE_ROOM, createRoomSaga);
    yield takeEvery(actionTypes.JOIN_ROOM, joinRoom);
    yield takeEvery(actionTypes.GET_STEP_ORDER, getStepsOrder);
    yield takeEvery(actionTypes.DO_TIC_STEP, ticTacSteps);
    yield takeEvery(actionTypes.PLAY_WITH_BOT, playWithBot);
    yield takeEvery(actionTypes.ASK_BOT_STEP, getBotSteps);
    yield takeEvery(actionTypes.DO_BOT_STEP_TIC, doBotStepTicTac);
    yield takeEvery(actionTypes.GET_POSSIBLE_STEP, getPossibleStep);
    yield takeEvery(actionTypes.DO_CHECKER_STEP, checkersSteps);
    yield takeEvery(actionTypes.CLEAN_OLD_GAME, cleanOldGame);
    yield takeEvery(actionTypes.GET_STATISTICS, getStatistics);
}
