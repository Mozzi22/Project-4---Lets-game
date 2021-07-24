import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { actionTypes as AT } from './actionTypes';
import { TInitialUserGame } from './types';
import { INITIAL_STATE_FOR_CHECKER } from 'src/constants/ui';

const actionTypesAll = actions;
type TActions = typeof actionTypesAll ;
export type TActionsLogin = ActionType<TActions>;

export const initialState: TInitialUserGame = {
    rooms: [],
    currentRoom: {},
    checker: {
        desk: INITIAL_STATE_FOR_CHECKER
    },
    currentChecker: {},
    join: ''
};

// { name: 'currentRoom', value: { room_id: id, room_name: login }}

export const reducer: Reducer<TInitialUserGame, TActionsLogin> = (
    state = initialState, action) => {
    switch (action.type) {
        case AT.SET_ALL_ROOMS:
            return { ...state, rooms: action.payload };
        case AT.SET_CURRENT_ROOM:
            return { ...state, [action.payload.name]: action.payload.value};
        case AT.JOIN_ROOM:
            return { ...state, join: action.payload };
        case AT.PLAY_WITH_BOT:
            return { ...state, rooms: action.payload };
        case AT.SET_CURRENT_CHECKER: return {
            ...state,
            currentChecker: action.payload.currentChecker
        }
        default: return { ...state };
    }
};
