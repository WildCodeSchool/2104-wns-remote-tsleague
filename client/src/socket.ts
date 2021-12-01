import { io } from 'socket.io-client';

const socket = io();

socket.on('connect', () => {
  console.log(`log to socket server with id ${socket.id}`);
});

socket.on('STUDENT_GAME_POSITION', (payload) => {
  console.log('position');
  console.log(payload);
});

export default socket;
