import { Dispatch, Middleware, Store } from 'redux';
import { Socket } from 'socket.io-client';
import { Action } from '../game/game.actions';

const buildSocketMiddleware: (socket: Socket) => Middleware =
  (socket) => (store) => (next) => (action: Action) => {
    const state = store.getState();
    const prevPosition = state.gameToggle.studentGamePosition;
    switch (action.type) {
      case 'STUDENT_GAME_POSITION':
        // TODO detect if postion changed and emit
        if (
          action.payload.positionX !== prevPosition.positionX ||
          action.payload.positionY !== prevPosition.positionY
        ) {
          socket.emit('STUDENT_GAME_POSITION', action.payload);
          socket.on('STUDENT_GAME_POSITION', (payload) => {
            console.log(`position X: ${payload.positionX}, 
            positionY: ${payload.positionY}`);
          });
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
