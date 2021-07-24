import { action } from 'typesafe-actions';
import { actionTypes as AT } from './actionTypes';
import { TRoom, TCurrentRoom, TCheckers, TCurrentChecker, TJoinRoom } from './types';

export const initialWebSocket = () => action(AT.INITIAL_WEB_SOCKET);
export const setAllRooms = (payload: Array<TRoom>) => action(AT.SET_ALL_ROOMS, payload);
export const createRoom = (payload: string) => action(AT.CREATE_ROOM, payload);
export const joinRoom = (payload: TJoinRoom) => action(AT.JOIN_ROOM, payload);
export const playWithBot = (payload: string) => action(AT.PLAY_WITH_BOT, payload);
export const setCheckerDesk = (payload: TCheckers) => action(AT.SET_CHECKER_DESK, payload)
export const setCurrentChecker = (payload: TCurrentChecker) => action(AT.SET_CURRENT_CHECKER, payload)

export const setCurrentRoom = (payload: TCurrentRoom) => action(AT.SET_CURRENT_ROOM, payload)
