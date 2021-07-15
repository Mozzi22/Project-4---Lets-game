import { createSelector } from 'reselect';
import { AplicationState } from '../types';

export const loginStore = (state: AplicationState) => state.login;
export const logValues = createSelector(
    loginStore,
    ({ login, password }) => ({ login, password }),
);