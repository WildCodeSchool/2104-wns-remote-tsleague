import { combineReducers } from 'redux';

import gameReducer from './game/game.reducer';
import userReducer from './user/user.reducer';

const rootReducer = combineReducers({
  gameToggle: gameReducer,
  user: userReducer,
});

export default rootReducer;
