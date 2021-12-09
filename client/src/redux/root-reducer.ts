import { combineReducers } from 'redux';

import gameReducer from './game/game.reducer';
import { GameState } from './game/game.types';
import userReducer from './user/user.reducer';
import { UserState } from './user/user.types';

export type State = {
  game: GameState;
  user: UserState;
};

const rootReducer = combineReducers({
  game: gameReducer,
  user: userReducer,
});

export default rootReducer;
