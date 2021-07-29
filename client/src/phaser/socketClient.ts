import { io } from 'socket.io-client';

const SOCKET_ENDPOINT = 'http://localhost:5000';
const socket = io(SOCKET_ENDPOINT);

const askNewPlayer = () => {
  socket.emit('newplayer');
  socket.on('new player added', () => {
    console.log('ADDED!');
  });
};

export default askNewPlayer;
