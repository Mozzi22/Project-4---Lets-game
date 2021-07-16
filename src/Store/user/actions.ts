import { action } from 'typesafe-actions';
import { actionTypes as AT } from './actionTypes';
import { TUserData, TChangeUserData, TAuthValues } from './types';

export const setValue = (payload: TUserData) => action(AT.SET_VALUE, payload);
export const setAuthValues = (payload: TAuthValues) => action(AT.SET_AUTH_VALUES, payload);
export const changeUserData = (payload: TChangeUserData) => action(AT.CHANGE_USER_DATA, payload);
export const setNewUserData = () => action(AT.SET_NEW_USER_DATA);
