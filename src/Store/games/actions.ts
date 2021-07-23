import { action } from 'typesafe-actions';
import { actionTypes as AT } from './actionTypes';
import { TRoom, TCheckers, TCurrentChecker } from './types';

export const initialWebSocket = () => action(AT.CONNECT_WEB_SOCKET);
export const setRooms = (payload: TRoom) => action(AT.SET_ROOMS, payload);
export const createRoom = (payload: string) => action(AT.CREATE_ROOM, payload);
export const joinRoom = () => action(AT.JOIN_ROOM);
export const playWithBot = (payload: string) => action(AT.PLAY_WITH_BOT, payload);

export const setCheckerDesk = (payload: TCheckers) => action(AT.SET_CHECKER_DESK, payload)
export const setCurrentChecker = (payload: TCurrentChecker) =>  action(AT.SET_CURRENT_CHECKER, payload)
