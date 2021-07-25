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
    checker: {
        desk: INITIAL_STATE_FOR_CHECKER
    },
    currentChecker: {},
    ticTacToe: {
        desk: ITEMS_FOR_TIC_TAC_TOE
    },
    steps: {
        count: 0,
        isUserStep: null,
  },
};

export const reducer: Reducer<TInitialUserGame, TActionsLogin> = (
    state = initialState, action) => {
    switch (action.type) {
        case AT.SET_ALL_ROOMS:
            return { ...state, rooms: action.payload };
        case AT.SET_CURRENT_CHECKER: return {
            ...state,
            currentChecker: action.payload.currentChecker
        }
        case AT.DO_STEP:
      state.squares[action.payload] = state.steps.count % 2 === 0
        ? TIC_TAC_ITEM.X : TIC_TAC_ITEM.O;
      return {
        ...state,
        steps: {
          ...state.steps,
          count: state.steps.count + 1,
        },
        ticTacToe: [...state.desk],
      };
        default: return { ...state };
    }
};
