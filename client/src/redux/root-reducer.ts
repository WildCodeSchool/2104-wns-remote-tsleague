import { combineReducers } from 'redux';

import gameReducer from './Game/game.reducer';

const rootReducer = combineReducers({
  gameToggle: gameReducer,
});

export default rootReducer;
