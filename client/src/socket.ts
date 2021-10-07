import { io } from 'socket.io-client';

const socket = io('https://staging.typescript-league.wns.wilders.dev/');

socket.on('connect', () => {
  console.log(`log to socket server with id ${socket.id}`);
});

export default socket;
