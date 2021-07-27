// import { createSelector } from 'reselect';
// import { ApplicationState } from '../types';

// export const gameStore = (state: ApplicationState) => state.game;

// export const getRooms = createSelector(
//     gameStore,
//     ({ rooms }) => rooms,
// );

// export const getChecker = createSelector(
//     gameStore,
//     (game) => game.checker,
// );

// export const getCheckerDesk = createSelector(
//     getChecker,
//     (checker) => checker.desk,
// );

// export const getCurrentChecker = createSelector(
//     gameStore,
//     (currentChecker) => currentChecker,
// );

// export const getTicTacToeDesk = createSelector(
//     gameStore,
//     (game) => game.ticTacToe,
// )

// export const getCurrentRoom = createSelector(
//     gameStore,
//     (game) => game.currentRoom,
// );

import { createSelector } from 'reselect';
import i18next from 'i18next';
import { DRAW } from 'src/constants/simpleConstants';
import { ApplicationState } from '../types';

export const gameStore = (store: ApplicationState) => store.game;

export const getFilterByRoomName = createSelector(
    gameStore,
    ({ filterByRoomName }) => filterByRoomName,
);

export const getRooms = createSelector(
    gameStore,
    getFilterByRoomName,
    ({ rooms }, filterByRoomName ) => {
        if (rooms.length === 0) {
            return []
        }
        if (!filterByRoomName) {
            return rooms
        }
        return rooms.filter(room => room.creatorLogin.toLowerCase().includes(filterByRoomName.toLowerCase()));
    },
);

export const getUserLogin = createSelector(
    gameStore,
    ({ userLogin }) => userLogin,
);

export const getActualRoom = createSelector(
    gameStore,
    ({ actualRoom }) => actualRoom,
);

export const getActualRoomGameType = createSelector(
    getActualRoom,
    ({ gameType }) => gameType,
);

export const getStepOrderSelector = createSelector(
    gameStore,
    ({ stepOrder }) => stepOrder,
);

export const getTicStatus = createSelector(
    gameStore,
    (_store, id: number) => id,
    ({ stepHistory }, id) => stepHistory[id],
);

export const getPossibleSteps = createSelector(
    gameStore,
    ({ possibleSteps }) => possibleSteps,
);

export const getPossibleStepPosition = createSelector(
    gameStore,
    (_store, id: number) => id,
    ({ possibleSteps }, id) => {
        const position = possibleSteps.find(el => el.stepIndex === id);
        if (position) return true;
        return null;
    },
);

export const getWinner = createSelector(
    gameStore,
    ({ winner, userLogin }) => {
        switch (winner) {
            case userLogin: return i18next.t('you_winner');
            case DRAW: return i18next.t(DRAW);
            default: {
                if (winner === '') return '';
                if (winner !== userLogin) return i18next.t('you_loser');
            }
        }
    },
);