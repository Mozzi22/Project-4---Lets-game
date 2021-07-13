import { action } from 'typesafe-actions';
import { actionTypes as AT } from './actionTypes';
import { TRegistrationData } from './types';

export const setRegistrationValue = (payload: TRegistrationData) => action(AT.SET_VALUE, payload);
// export const sendRegistrationRequest = () => ({ type: actionTypes.SEND_REGISTRATION_REQUEST });
// export const clearRegistrationInputs = () => ({ type: actionTypes.CLEAR_INPUTS_VALUES });
// export const reciveSuccessRequest = () => ({ type: actionTypes.REGISTRATION_REQUEST_SUCCESS });
// export const reciveErrorRequest = () => ({ type: actionTypes.REGISTRATION_REQUEST_ERROR });
