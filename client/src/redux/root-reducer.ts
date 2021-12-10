import { combineReducers } from 'redux';

import gameReducer from './game/game.reducer';
import modalReducer from './modal/modal.reducers';
import { GameState } from './game/game.types';
import userReducer from './user/user.reducer';
import { UserState } from './user/user.types';
import { ModalState } from './modal/modal.types';

export type State = {
  game: GameState;
  user: UserState;
  modals: ModalState;
};

const rootReducer = combineReducers({
  game: gameReducer,
  user: userReducer,
  modals: modalReducer,
});

export default rootReducer;
