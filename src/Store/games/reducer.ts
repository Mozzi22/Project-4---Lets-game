import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { actionTypes as AT } from './actionTypes';
import { TInitialUserData } from './types';

const actionTypesAll = actions;
type TActions = typeof actionTypesAll ;
export type TActionsLogin = ActionType<TActions>;

export const initialState: TInitialUserData = {
    rooms: [],
    currentRoom: { room_id: null, room_name: '' },
    error: false,
};

export const reducer: Reducer<TInitialUserData, TActionsLogin> = (
    state = initialState, action) => {
    switch (action.type) {
        case AT.SET_VALUE:
            return { ...state, [action.payload.name]: action.payload.value };
        case AT.SET_ROOMS:
            return { ...state, rooms: action.payload };
        case AT.SEND_ROOMS_REQUEST:
            return { ...state, isLoading: true };
        case AT.ROOMS_REQUEST_SUCCESS:
            return { ...state, isLoading: false, error: false };
        case AT.ROOMS_REQUEST_ERROR:
            return { ...state, isLoading: false, error: true };
        default: return { ...state };
    }
};
