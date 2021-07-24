import { createSelector } from 'reselect';
import { AplicationState } from '../types';

export const gameStore = (state: AplicationState) => state.game;

export const getRooms = createSelector(
    gameStore,
    ({ rooms }) => rooms,
);
export const getChecker = createSelector(
    gameStore,
    (game) => game.checker,
)
export const getCheckerDesk = createSelector(
    getChecker,
    (checker) => checker.desk,
)
export const getCurrentChecker = createSelector(
    gameStore,
    (currentChecker) => currentChecker,
)
export const getTicTacToe = createSelector(
    gameStore,
    (game) => game.ticTacToe,
)
export const getTicTacToeDesk = createSelector(
    getTicTacToe,
    (ticTacToe) => ticTacToe.desk,
)
