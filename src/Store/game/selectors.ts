import { createSelector } from 'reselect';
import { AplicationState } from '../types';

export const gameStore = (state: AplicationState) => state.game;

export const getRooms = createSelector(
    gameStore,
    ({ rooms }) => rooms,
);
