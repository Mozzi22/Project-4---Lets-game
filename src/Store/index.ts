import { combineReducers } from 'redux';
import { reducer as registrationReducer } from './registration/reducer';
import { reducer as loginReducer } from './login/reducer';
import { reducer as modalReducer } from './modals/reducer';
import { reducer as gameReducer } from './game/reducer';

const rootReducer = combineReducers({
  registration: registrationReducer,
  login: loginReducer,
  game: gameReducer,
  modals: modalReducer,
});

export default rootReducer;
