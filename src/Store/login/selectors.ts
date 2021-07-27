import { createSelector } from 'reselect';
import { ApplicationState } from '../types';

export const loginStore = (state: ApplicationState) => state.login;
export const logValues = createSelector(
    loginStore,
    ({ login, password }) => ({ login, password }),
);
