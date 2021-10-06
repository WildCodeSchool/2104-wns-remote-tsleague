import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');

socket.on('connect', () => {
  console.log(`log to socket server with id ${socket.id}`);
});

export default socket;