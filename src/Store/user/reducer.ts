import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';
import { backgroundUrls } from 'src/components/UI/baseLayout';
import { support } from 'src/helpers/support';
import * as actions from './actions';
import { actionTypes as AT } from './actionTypes';
import { TInitialUserData } from './types';

const actionTypesAll = actions;
type TActions = typeof actionTypesAll ;
export type TActionsUser = ActionType<TActions>;

export const initialState: TInitialUserData = {
  theme: backgroundUrls,
  themeMode: support.getSessionStorageItem('themeMode') || 'light',
  token: support.getSessionStorageItem('token') || null,
  userInfo: support.getSessionStorageItem('userInfo') || {
    login: '',
    firstName: '',
    lastName: '',
    id: 0,
    age: 0,
    hobby: '',
    company: '',
    city: '',
  },
  init: false,
  settings: support.getSessionStorageItem('settings') || { notifications: true },
  changeUser: support.getSessionStorageItem('userInfo') || null,
};

export const reducer: Reducer<TInitialUserData, TActionsUser> = (state = initialState, action) => {
  switch (action.type) {
    case AT.SET_VALUE:
      return { ...state, [action.payload.name]: action.payload.value };
    case AT.CHANGE_USER_DATA:
      return { ...state, changeUser: { ...state.changeUser, [action.payload.name]: action.payload.value } };
    case AT.SET_AUTH_VALUES:
      return {
        ...state,
        token: action.payload.token,
        userInfo: action.payload.userInfo,
        changeUser: action.payload.userInfo,
      };
    case AT.SIGN_IN_SUCCESS:
      return { ...state, userInfo: { ...state.userInfo, [action.payload.name]: action.payload.value } };
    default: return { ...state };
  }
};
