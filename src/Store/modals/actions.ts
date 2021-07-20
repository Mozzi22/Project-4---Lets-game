import { actionTypes as AT } from './actionTypes';
import { TModalData } from './types';
import { action } from 'typesafe-actions';

export const changeModalVisibility = (payload: TModalData) => action(AT.CHANGE_MODAL_VISIBILITY, payload);
