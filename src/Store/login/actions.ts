// import { action } from 'typesafe-actions';
// import { actionTypes as AT } from './actionTypes';
// import { TLoginData, TLoginValue, TUserLoginData, TLoginRequest } from './types';

// export const setLoginValue = (payload: TLoginData) => action(AT.SET_VALUE, payload);
// export const sendLoginRequest = (payload: TLoginRequest) => action(AT.SEND_LOGIN_REQUEST, payload);
// export const clearLoginInputs = () => action(AT.CLEAR_INPUTS_VALUES);
// export const reciveSuccessRequest = (payload: TUserLoginData) => action(AT.LOGIN_REQUEST_SUCCESS, payload);
// export const reciveErrorRequest = () => action(AT.LOGIN_REQUEST_ERROR);
// export const setValue = (payload: TLoginValue) => action(AT.SET_VALUE, payload);
import { action } from 'typesafe-actions';
import { actionTypes as AT } from './actionTypes';
import { TLoginPayload, TLoginRequest, TLoginValue, TUserLoginData } from './types';

export const setLoginValue = (payload : TLoginPayload) => action(AT.SET_VALUE, payload);
export const sendLoginRequest = (payload: TLoginRequest) => action(AT.SEND_LOGIN_REQUEST);
export const clearLoginInputs = () => action(AT.CLEAR_INPUTS_VALUES);
export const reciveSuccessRequest = (payload: TUserLoginData) => action(AT.LOGIN_REQUEST_SUCCESS);
export const reciveErrorRequest = () => action(AT.LOGIN_REQUEST_ERROR);
export const setValue = (payload: TLoginValue) => action(AT.SET_VALUE, payload);
