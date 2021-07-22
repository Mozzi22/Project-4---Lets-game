import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { actionTypes as AT } from './actionTypes';
import { TInitialUserData } from './types';
import { INITIAL_STATE_FOR_CHECKER } from 'src/constants/ui';
const actionTypesAll = actions;
type TActions = typeof actionTypesAll ;
export type TActionsLogin = ActionType<TActions>;

export const initialState: TInitialUserData = {
    rooms: [],
    checker: {
        desk: INITIAL_STATE_FOR_CHECKER
    },
    currentChecker: {}
};

export const reducer: Reducer<TInitialUserData, TActionsLogin> = (
    state = initialState, action) => {
    switch (action.type) {
        case AT.SET_ROOMS: return { ...state, rooms: action.payload };
                default: return { ...state };
        }
};
