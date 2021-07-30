import { combineReducers } from 'redux';

import gameReducer from './game/game.reducer';
import modalReducer from './modal/modal.reducers';

const rootReducer = combineReducers({
  gameToggle: gameReducer,
  modals: modalReducer,
});

export default rootReducer;
