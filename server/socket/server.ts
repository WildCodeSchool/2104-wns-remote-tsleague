import { createServer } from 'http';
import { Server, Socket } from 'socket.io';

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['*'],
  },
}).listen(httpServer);

let lastPlayerID = 0;

io.on('connection', (socket: Socket) => {
  console.log('OKAAAAAAAYYYYYY');
  socket.on('newplayer', () => {
    const player = {
      id: lastPlayerID++,
      x: randomInt(100, 400),
      y: randomInt(100, 400),
    };
    // socket.emit('allplayers', getAllPlayers());
    socket.broadcast.emit('new player added', player);
  });
});

// const getAllPlayers = () => {
//   const players = [];
//   Object.keys(io.sockets.)
// }

const randomInt = (low: number, high: number): number => {
  return Math.floor(Math.random() * (high - low) + low);
};

httpServer.listen(5000);
