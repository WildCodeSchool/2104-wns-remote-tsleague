import { io } from 'socket.io-client';
// eslint-disable-next-line import/no-cycle
import store from './redux/store';

const socket =
  process.env.NODE_ENV === 'development' ? io('http://localhost:5050') : io();

socket.on('connect', () => {
  console.log(`log to socket server with id ${socket.id}`);
});

// socket.on('currentPlayers', (args) => {
//   const players = args;
//   console.log('current', players);
// });

socket.on('newPlayers', (payload) => {
  console.log(payload);
  store.dispatch({
    type: 'CLASSMATES_GAME_POSITION',
    payload,
  });
});

export default socket;
