import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { actionTypes as AT } from './actionTypes';
import { TInitialUserGame } from './types';

const actionTypesAll = actions;
type TActions = typeof actionTypesAll ;
export type TActionsLogin = ActionType<TActions>;

export const initialState: TInitialUserGame = {
    rooms: [],
};

export const reducer: Reducer<TInitialUserGame, TActionsLogin> = (
    state = initialState, action) => {
    switch (action.type) {
        case AT.SET_ALL_ROOMS:
            return { ...state, rooms: action.payload };
        default: return { ...state };
    }
};
