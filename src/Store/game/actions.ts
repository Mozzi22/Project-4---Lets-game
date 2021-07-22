import { action } from 'typesafe-actions';
import { actionTypes as AT } from './actionTypes';
import { TRoom } from './types';

export const initialWebSocket = () => action(AT.CONNECT_WEB_SOCKET);
export const setAllRooms = (payload: TRoom[]) => action(AT.SET_ALL_ROOMS, payload);
export const createRoom = (payload: string) => action(AT.CREATE_ROOM, payload);
export const joinRoom = (payload: string) => action(AT.JOIN_ROOM);
export const playWithBot = (payload: string) => action(AT.PLAY_WITH_BOT, payload);
