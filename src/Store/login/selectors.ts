// import { createSelector } from 'reselect';
// import { ApplicationState } from '../types';

// export const loginStore = (state: ApplicationState) => state.login;
// export const logValues = createSelector(
//     loginStore,
//     ({ login, password }) => ({ login, password }),
// );
// export const getUserLogin = createSelector(
//     loginStore,
//     (state) => (state.userLogin),
// );

// export const getToken = createSelector(
//     loginStore,
//     (state) => (state.userLogin),
// );
import { createSelector } from 'reselect';
import { ApplicationState } from '../types';

export const loginStore = (store: ApplicationState) => store.login;
export const logValues = createSelector(
    loginStore,
    ({ login, password }) => ({ login, password }),
);
