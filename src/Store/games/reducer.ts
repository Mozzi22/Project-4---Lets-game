// import { Reducer } from 'redux';
// import { ActionType } from 'typesafe-actions';
// import * as actions from './actions';
// import { actionTypes as AT } from './actionTypes';
// import { TInitialUserGame } from './types';
// import { INITIAL_STATE_FOR_CHECKER, ITEMS_FOR_TIC_TAC_TOE, TIC_TAC_ITEM } from 'src/constants/ui';

// const actionTypesAll = actions;
// type TActions = typeof actionTypesAll ;
// export type TActionsLogin = ActionType<TActions>;

// export const initialState: TInitialUserGame = {
//     rooms: [],
//     currentRoom: {},
//     checker: {
//         desk: INITIAL_STATE_FOR_CHECKER
//     },
//     currentChecker: {},
//     ticTacToe: ITEMS_FOR_TIC_TAC_TOE,
//     steps: {
//         count: 0,
//         isUserStep: null,
//   },
//     joinToRoom: ''
// };

// export const reducer: Reducer<TInitialUserGame, TActionsLogin> = (
//     state = initialState, action) => {
//     switch (action.type) {
//         case AT.SET_ALL_ROOMS:
//             return { ...state, rooms: action.payload };
//         case AT.SET_CURRENT_ROOM:
//             return { ...state, [action.payload.name]: action.payload.value};
//         case AT.JOIN_ROOM:
//             return { ...state, joinToRoom: action.payload };
//         case AT.PLAY_WITH_BOT:
//             return { ...state, rooms: action.payload };
//         case AT.SET_CURRENT_CHECKER: return {
//             ...state,
//             currentChecker: action.payload.currentChecker
//         }
//         case AT.DO_STEP:
//             return {
//                 ...state,
//                 ticTacToe:
//                     state.ticTacToe.map(item => {
//                         if (item.position === action.payload) {
//                             return {
//                                 ...item, figure: state.steps.count % 2 === 0
//                                     ? TIC_TAC_ITEM.X
//                                     : TIC_TAC_ITEM.O
//                             }
//                         }
//                         return item
//                     }),
//                 steps: {
//                     ...state.steps,
//                     count: state.steps.count + 1,
//                 }
//             };
//         default: return { ...state };
//     }
// };

import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';
import { actionTypes as AT } from './actionTypes';
import { TInitialGame } from './types';
import * as actions from './actions';

const actionTypes1 = actions;
type TActions = typeof actionTypes1;
export type TActionsRegistration = ActionType<TActions>;

export const initialState: TInitialGame = {
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
};

export const reducer: Reducer<TInitialGame, TActionsRegistration> = (state = initialState, action) => {
    switch (action.type) {
        case AT.SET_VALUE_SEARCH: return { ...state, [action.payload.name]: action.payload.value}
        case AT.PUT_ROOMS: return { ...state, rooms: action.payload };
        case AT.SET_USER_LOGIN: return { ...state, userLogin: action.payload };
        case AT.SET_ACTUAL_ROOM: return { ...state, actualRoom: action.payload };
        case AT.SET_STEP_ORDER: return { ...state, stepOrder: action.payload };
        case AT.SET_STEP_HISTORY: return { ...state, stepHistory: action.payload };
        case AT.SET_WINNER: return { ...state, winner: action.payload };
        case AT.PUT_POSSIBLE_STEPS: return { ...state, possibleSteps: action.payload };
        default: return state;
    }
};
