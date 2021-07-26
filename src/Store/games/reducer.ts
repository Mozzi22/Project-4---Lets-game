import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { actionTypes as AT } from './actionTypes';
import { TInitialUserGame } from './types';
import { INITIAL_STATE_FOR_CHECKER, ITEMS_FOR_TIC_TAC_TOE, TIC_TAC_ITEM } from 'src/constants/ui';

const actionTypesAll = actions;
type TActions = typeof actionTypesAll ;
export type TActionsLogin = ActionType<TActions>;

export const initialState: TInitialUserGame = {
    rooms: [],
    currentRoom: {},
    checker: {
        desk: INITIAL_STATE_FOR_CHECKER
    },
    currentChecker: {},
    ticTacToe: ITEMS_FOR_TIC_TAC_TOE,
    steps: {
        count: 0,
        isUserStep: null,
  },
    joinToRoom: ''
};

export const reducer: Reducer<TInitialUserGame, TActionsLogin> = (
    state = initialState, action) => {
    switch (action.type) {
        case AT.SET_ALL_ROOMS:
            return { ...state, rooms: action.payload };
        case AT.SET_CURRENT_ROOM:
            return { ...state, [action.payload.name]: action.payload.value};
        case AT.JOIN_ROOM:
            return { ...state, joinToRoom: action.payload };
        case AT.PLAY_WITH_BOT:
            return { ...state, rooms: action.payload };
        case AT.SET_CURRENT_CHECKER: return {
            ...state,
            currentChecker: action.payload.currentChecker
        }
        case AT.DO_STEP:
            return {
                ...state,
                ticTacToe:
                    state.ticTacToe.map(item => {
                        if (item.position === action.payload) {
                            return {
                                ...item, figure: state.steps.count % 2 === 0
                                    ? TIC_TAC_ITEM.X
                                    : TIC_TAC_ITEM.O
                            }
                        }
                        return item
                    }),
                steps: {
                    ...state.steps,
                    count: state.steps.count + 1,
                }
            };
        default: return { ...state };
    }
};
