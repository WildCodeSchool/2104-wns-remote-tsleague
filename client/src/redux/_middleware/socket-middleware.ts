import { Middleware } from 'redux';
import { Socket } from 'socket.io-client';
import { GameAction } from '../game/game.types';
import { State } from '../root-reducer';

const buildSocketMiddleware: (socket: Socket) => Middleware =
  (socket) => (store) => (next) => (action: GameAction) => {
    const state: State = store.getState();
    const prevPosition = state.game.studentGamePosition;
    switch (action.type) {
      case 'STUDENT_GAME_POSITION':
        // TODO detect if postion changed and emit
        if (
          action.payload.positionX !== prevPosition?.positionX ||
          action.payload.positionY !== prevPosition?.positionY
        ) {
          socket.emit('studentPlayer', action.payload);
        }
        break;
      default:
        // eslint-disable-next-line no-console
        console.log('no emit');
    }

    const result = next(action);
    return result;
  };

export default buildSocketMiddleware;
