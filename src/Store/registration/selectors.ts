import { createSelector } from 'reselect';
import { AplicationState } from '../types';

export const registrationStore = (state: AplicationState) => state.registration;
export const regValues = createSelector(
    registrationStore,
    ({ email, password, confirm }) => ({ email, password, confirm }),
);
