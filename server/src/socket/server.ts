import { createServer } from 'http';
import { Server, Socket } from 'socket.io';

export default function startSocket() {
  const httpServer = createServer();
  const io = new Server(httpServer, {
    cors: {
      origin: true,
      methods: ['*'],
    },
  }).listen(httpServer);

  // const lastPlayerID = 0;

  io.on('connection', (socket: Socket) => {
    console.log(`connected with id ${socket.id}`);
    socket.on('STUDENT_GAME_POSITION', (payload) => {
      socket.broadcast.emit('STUDENT_GAME_POSITION', payload);
      console.log(`received move: ${payload.positionX}, ${payload.positionY}`);
    });
  });

  // eslint-disable-next-line max-len
  // const randomInt = (low: number, high: number): number => Math.floor(Math.random() * (high - low) + low);
  console.log('socket');
  httpServer.listen(5050);
}
