import { action } from 'typesafe-actions';
import { actionTypes as AT } from './actionTypes';
import { TRegistrationData } from './types';

export const setRegistrationValue = (payload: TRegistrationData) => action(AT.SET_VALUE, payload);
export const sendRegistrationRequest = () => action(AT.SEND_REGISTRATION_REQUEST);
export const clearRegistrationInputs = () => action(AT.CLEAR_INPUTS_VALUES);
export const reciveSuccessRequest = () => action(AT.REGISTRATION_REQUEST_SUCCESS);
export const reciveErrorRequest = () => action(AT.REGISTRATION_REQUEST_ERROR);
