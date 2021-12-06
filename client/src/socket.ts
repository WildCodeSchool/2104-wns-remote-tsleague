import { io } from 'socket.io-client';
import { ClassMate } from './redux/game/game.reducer';
// eslint-disable-next-line import/no-cycle
import store from './redux/store';

const socket =
  process.env.NODE_ENV === 'development' ? io('http://localhost:5050') : io();

socket.on('connect', () => {
  console.log(`log to socket server with id ${socket.id}`);
});

let socketId: string;
socket.on('socketId', (arg): void => {
  socketId = arg;
});

socket.on('currentPlayers', (payload) => {
  const classMates: ClassMate[] = payload.filter(
    (classMate: ClassMate) => classMate.socketId !== socketId
  );
  store.dispatch({
    type: 'CLASSMATES_GAME_POSITION',
    classMates,
  });
});

socket.on('newPlayers', (payload) => {
  const classMates: ClassMate[] = payload.filter(
    (classMate: ClassMate) => classMate.socketId !== socketId
  );
  store.dispatch({
    type: 'CLASSMATES_GAME_POSITION',
    classMates,
  });
});

socket.on('logout', (arg) => {
  store.dispatch({
    type: 'CLASSMATE_LOGOUT',
    socketId: arg,
  });
});

export default socket;
