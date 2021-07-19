import { createSelector } from 'reselect';
import { AplicationState } from '../types';

export const gameStore = (state: AplicationState) => state.login;
export const getUserLogin = createSelector(
    gameStore,
    ({ userLogin }) => ({ userLogin }),
);
