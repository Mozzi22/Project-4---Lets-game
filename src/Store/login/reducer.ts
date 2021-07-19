import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { actionTypes as AT } from './actionTypes';
import { TInitialLoginData } from './types';

const actionTypesAll = actions;
type TActions = typeof actionTypesAll ;
export type TActionsLogin = ActionType<TActions>;

export const initialState: TInitialLoginData = {
    login: '',
    password: '',
    success: null,
    isLoading: false,
    userLogin: '',
};

export const reducer: Reducer<TInitialLoginData, TActionsLogin> = (
    state = initialState, action) => {
        switch (action.type) {
            case AT.SET_VALUE:
                return { ...state, [action.payload.name]: action.payload.value };
            case AT.SEND_LOGIN_REQUEST:
                return { ...state, isLoading: true };
            case AT.LOGIN_REQUEST_SUCCESS:
                return { ...state, isLoading: false, userLogin: action.payload.userLogin };
            case AT.LOGIN_REQUEST_ERROR:
                return { ...state, isLoading: false };
            case AT.CLEAR_INPUTS_VALUES:
                return {
                    ...state,
                    login: '',
                    password: '',
                };
            default: return { ...state };
        }
};
