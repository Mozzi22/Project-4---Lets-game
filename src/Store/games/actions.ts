// import { action } from 'typesafe-actions';
// import { actionTypes as AT } from './actionTypes';
// import { TRoom, TCurrentRoom, TCheckers, TCurrentChecker, TJoinRoom, TSteps } from './types';

// export const initialWebSocket = () => action(AT.INITIAL_WEB_SOCKET);
// export const setAllRooms = (payload: Array<TRoom>) => action(AT.SET_ALL_ROOMS, payload);
// export const createRoom = (payload: string) => action(AT.CREATE_ROOM, payload);
// export const joinRoom = (payload: TJoinRoom) => action(AT.JOIN_ROOM, payload);
// export const playWithBot = (payload: string) => action(AT.PLAY_WITH_BOT, payload);
// export const setCheckerDesk = (payload: TCheckers) => action(AT.SET_CHECKER_DESK, payload)
// export const setCurrentChecker = (payload: TCurrentChecker) => action(AT.SET_CURRENT_CHECKER, payload)
// export const doStepTicTacToe = (payload: number) => action(AT.DO_STEP, payload)

// export const setCurrentRoom = (payload: TCurrentRoom) => action(AT.SET_CURRENT_ROOM, payload)

import { action } from 'typesafe-actions';
import { actionTypes as AT } from './actionTypes';
import { TRoom, TStepOrder, THistory } from './types';

export const getSockJSConnection = () => action(AT.GET_SOCKJS_CONNECTION);
export const putRooms = (payload: TRoom[]) => action(AT.PUT_ROOMS, payload);
export const setUserLogin = (payload: string) => action(AT.SET_USER_LOGIN, payload);
export const joinRoom = (payload: string) => action(AT.JOIN_ROOM, payload);
export const playWithBot = (payload: string) => action(AT.PLAY_WITH_BOT, payload);
export const createRoom = (payload: string) => action(AT.CREATE_ROOM, payload);
export const setActualRoom = (payload) => action(AT.SET_ACTUAL_ROOM, payload);
export const subscribeRoom = (payload: string) => action(AT.SUBSCRIBE_ROOM, payload);
export const deleteRoom = () => action(AT.DELETE_ROOM);
export const getStepOrder = (payload: TStepOrder) => action(AT.GET_STEP_ORDER, payload);
export const setStepOrder = (payload: string) => action(AT.SET_STEP_ORDER, payload);
export const doTicStep = (payload: string) => action(AT.DO_TIC_STEP, payload);
export const setStepHistory = (payload: THistory) => action(AT.SET_STEP_HISTORY, payload);
export const setWinner = (payload: string) => action(AT.SET_WINNER, payload);
export const cleanOldGame = () => action(AT.CLEAN_OLD_GAME);
export const askBotStep = () => action(AT.ASK_BOT_STEP);
export const doBotStepTic = (payload: string) => action(AT.DO_BOT_STEP_TIC, payload);
export const gameEvent = (payload: string) => action(AT.GAME_EVENT, payload);
export const disconnect = () => action(AT.DISCONNECT);
export const getPosibleStep = (payload: string) => action(AT.GET_POSIBLE_STEP, payload);
export const putPossibleSteps = (payload: any) => action(AT.PUT_POSSIBLE_STEPS, payload);
export const doCheckerStep = (payload: string) => action(AT.DO_CHECKER_STEP, payload);
export const logOut = () => action(AT.LOGOUT);

export const startStatisticsRequest = (payload) => ({
  type: AT.START_STATISTICS_REQUEST,
  payload,
});

export const getStatistics = () => ({ type: AT.GET_STATISTICS });
export const getStatisticsSuccess = (payload) => ({
  type: AT.GET_STATISTICS_SUCCESS,
  payload,
});
export const getStatisticsError = (payload) => ({
  type: AT.GET_STATISTICS_ERROR,
  payload,
});