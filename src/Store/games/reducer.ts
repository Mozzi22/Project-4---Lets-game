import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';
import { actionTypes as AT } from './actionTypes';
import { TInitialUserGame } from './types';
import { INITIAL_STATE_FOR_CHECKER, ITEMS_FOR_TIC_TAC_TOE } from 'src/constants/ui';
import * as actions from './actions';

const actionTypesAll = actions;
type TActions = typeof actionTypesAll;
export type TActionsGames = ActionType<TActions>;

export const initialState: TInitialUserGame = {
    rooms: [],
    userLogin: localStorage.getItem('login') || '',
    actualRoom: localStorage.getItem('actualRoom')
        ? JSON.parse(localStorage.getItem('actualRoom'))
        : { gameType: '', creatorLogin: '', guestLogin: '', startTime: 0, id: '', stepDoList: [] },
    stepOrder: '',
    stepHistory: localStorage.getItem('stepHistory')
        ? JSON.parse(localStorage.getItem('stepHistory'))
        : [],
    winner: '',
    possibleSteps: [],
    filterByRoomName: '',
    statistics: [],
    currentChecker: {},
    ticTacToe: ITEMS_FOR_TIC_TAC_TOE,
        checker: {
        desk: INITIAL_STATE_FOR_CHECKER
    },
};

export const reducer: Reducer<TInitialUserGame, TActionsGames> = (state = initialState, action) => {
    switch (action.type) {
        case AT.SET_VALUE_SEARCH:
            return { ...state, [action.payload.name]: action.payload.value}
        case AT.SET_ALL_ROOMS:
            return { ...state, rooms: action.payload };
        case AT.SET_USER_LOGIN:
            return { ...state, userLogin: action.payload };
        case AT.SET_CURRENT_ROOM:
            return { ...state, actualRoom: action.payload };
        case AT.SET_STEP_ORDER:
            return { ...state, stepOrder: action.payload };
        case AT.SET_STEP_HISTORY:
            return { ...state, stepHistory: action.payload };
        case AT.SET_WINNER:
            return { ...state, winner: action.payload };
        case AT.PUT_POSSIBLE_STEPS:
            return { ...state, possibleSteps: action.payload };
        case AT.SET_STATISTICS_SUCCESS:
            return { ...state, statistics: action.payload };
                default: return state;
    }
};
