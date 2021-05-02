import { combineReducers } from 'redux';

import gameReducer from './game/game.reducer';

const rootReducer = combineReducers({
  gameToggle: gameReducer,
});

export default rootReducer;
