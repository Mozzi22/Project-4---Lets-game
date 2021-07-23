import { createSelector } from 'reselect';
import { AplicationState } from '../types';

export const gameStore = (state: AplicationState) => state.game;

export const getRooms = createSelector(
    gameStore,
    ({ rooms }) => rooms,
);

export const getLoginCreator = createSelector(
    getRooms,
    (rooms) => rooms.map(el => el.creatorLogin),
);
