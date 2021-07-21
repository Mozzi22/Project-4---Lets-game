import { action } from 'typesafe-actions';
import { actionTypes as AT } from './actionTypes';
import { TInitialUserData } from './types';

export const initialWebSocket = () => action(AT.CONNECT_WEB_SOCKET);
export const setRooms = (payload) => action(AT.SET_ROOMS, payload);
export const setUserLogin = (payload: TInitialUserData) => action(AT.SET_USER_LOGIN, payload);
export const joinRoom = () => action(AT.JOIN_ROOM);
export const playWithBot = (payload: string) => action(AT.PLAY_WITH_BOT, payload);
