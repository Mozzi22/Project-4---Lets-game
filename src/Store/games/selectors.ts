import { createSelector } from 'reselect';
import { ApplicationState } from '../types';

export const gameStore = (state: ApplicationState) => state.game;

export const getRooms = createSelector(
    gameStore,
    ({ rooms }) => rooms,
);

export const getChecker = createSelector(
    gameStore,
    (game) => game.checker,
);

export const getCheckerDesk = createSelector(
    getChecker,
    (checker) => checker.desk,
);

export const getCurrentChecker = createSelector(
    gameStore,
    (currentChecker) => currentChecker,
);

export const getTicTacToeDesk = createSelector(
    gameStore,
    (game) => game.ticTacToe,
)

export const getCurrentRoom = createSelector(
    gameStore,
    (game) => game.currentRoom,
);
