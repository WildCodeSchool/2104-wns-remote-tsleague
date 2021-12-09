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
          (prevPosition &&
            action.payload.positionX !== prevPosition.positionX) ||
          (prevPosition && action.payload.positionY !== prevPosition.positionY)
        ) {
          socket.emit('studentPlayer', action.payload);
        }

        if (state.user.userData.id !== '') {
          const playerIds = {
            id: state.user.userData.id,
            classroomId: state.user.userData.classrooms[0],
          };
          socket.emit('IDs', playerIds);
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
