import { action } from 'typesafe-actions';
import { actionTypes as AT } from './actionTypes';
import { TRoom } from './types';

export const initialWebSocket = () => action(AT.CONNECT_WEB_SOCKET);
export const setRooms = (payload: TRoom) => action(AT.SET_ROOMS, payload);
export const createRoom = (payload: string) => action(AT.CREATE_ROOM, payload);
export const joinRoom = () => action(AT.JOIN_ROOM);
export const playWithBot = (payload: string) => action(AT.PLAY_WITH_BOT, payload);

// rooms
export const setValue = payload => ({ type: actionTypes.SET_VALUE, payload });
export const getAllRooms = () => action(AT.GET_ALL_ROOMS);
export const sendRoomsRequest = () => action(AT.SEND_ROOMS_REQUEST);
export const reciveSuccessRoomsRequest = () => action(AT.ROOMS_REQUEST_SUCCESS);
export const reciveErrorRoomsRequest = () => action(AT.ROOMS_REQUEST_ERROR);
export const setAllRooms = payload => action(AT.SET_ALL_ROOMS, payload);