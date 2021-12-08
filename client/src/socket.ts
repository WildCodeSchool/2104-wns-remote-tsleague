import { io } from 'socket.io-client';
// eslint-disable-next-line import/no-cycle
import store from './redux/store';

const socket =
  process.env.NODE_ENV === 'development' ? io('http://localhost:6000') : io();

socket.on('connect', () => {
  console.log(`log to socket server with id ${socket.id}`);
});

let socketId: string;
socket.on('socketId', (arg): void => {
  socketId = arg;
  console.log(`new mate connected with id ${socketId}`);
});

socket.on('currentPlayers', (payload) => {
  store.dispatch({
    type: 'CLASSMATES_GAME_POSITION',
    socketId,
    payload,
  });
});

socket.on('newPlayers', (payload) => {
  store.dispatch({
    type: 'CLASSMATES_GAME_POSITION',
    socketId,
    payload,
  });
});

socket.on('logout', (arg) => {
  store.dispatch({
    type: 'CLASSMATE_LOGOUT',
    socketId: arg,
  });
});

export default socket;
