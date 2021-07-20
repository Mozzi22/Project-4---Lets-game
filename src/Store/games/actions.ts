import { action } from 'typesafe-actions';
import { actionTypes as AT } from './actionTypes';
import { TInitialUserData } from './types';

export const initialWebSocket = (payload) => action(AT.INITIALIZE_WEB_SOCKETS_CHANNEL, payload);
export const setRooms = (payload) => action(AT.SET_ROOMS, payload);
export const setUserLogin = (payload: TInitialUserData) => action(AT.SET_USER_LOGIN, payload);
export const joinRoom = (payload) => action(AT.JOIN_ROOM, payload);
export const playWithBot = (payload) => action(AT.PLAY_WITH_BOT, payload);
