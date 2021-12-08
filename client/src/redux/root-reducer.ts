import { useReducer } from 'react';
import { combineReducers } from 'redux';

import gameReducer from './game/game.reducer';

const rootReducer = combineReducers({
  gameToggle: gameReducer,
  user: useReducer,
});

export default rootReducer;
