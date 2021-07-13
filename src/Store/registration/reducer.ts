import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { actionTypes as AT } from './actionTypes';
import { TInitialRegistrationData } from './types';

const actionTypes1 = actions;
type TActions = typeof actionTypes1 ;
export type TActionsRegistration = ActionType<TActions>;

export const initialState: TInitialRegistrationData = {
    email: '',
    password: '',
    confirm: '',
    success: null,
    isLoading: false,
    error: null,
};

export const reducer: Reducer<TInitialRegistrationData, TActionsRegistration> = (
    state = initialState, action,
) => {
    switch (action.type) {
        case AT.SET_VALUE:
            return { ...state, [action.payload.name]: action.payload.value };
        case AT.SEND_REGISTRATION_REQUEST:
            return { ...state, isLoading: true };
        case AT.REGISTRATION_REQUEST_SUCCESS:
            return { ...state, isLoading: false, success: false };
        case AT.REGISTRATION_REQUEST_ERROR:
            return { ...state, isLoading: false, error: action.payload };
        case AT.CLEAR_INPUTS_VALUES:
            return {
                ...state,
                email: '',
                password: '',
                confirm: '',
            };
        default: return { ...state };
    }
};
