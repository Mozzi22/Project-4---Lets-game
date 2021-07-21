import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { actionTypes as AT } from './actionTypes';
import { TInitialModalData } from './types';

const actionTypes1 = actions;
type TActions = typeof actionTypes1 ;
export type TActionsModals = ActionType<TActions>;

export const initialState: TInitialModalData = {
  createGame: {
    type: 'createGame',
    data: {},
    isOpen: false,
  },
};

export const reducer: Reducer<TInitialModalData, TActionsModals> = (state = initialState, action) => {
  switch (action.type) {
    case AT.CHANGE_MODAL_VISIBILITY: {
      const { isOpen, modalType, data } = action.payload;
      return {
        ...state,
        [modalType]: {
          ...state[modalType], data, isOpen,
        },
      };
    }
    default: return { ...state };
  }
};
