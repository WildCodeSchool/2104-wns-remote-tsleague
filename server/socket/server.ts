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
  console.log(`connected with id ${socket.id}`);
  socket.on('STUDENT_GAME_POSITION',(payload)=>{
    socket.broadcast.emit('STUDENT_GAME_POSITION', payload)
    console.log(`received move: ${payload.positionX}, ${payload.positionY}`)
  })
});

const randomInt = (low: number, high: number): number => {
  return Math.floor(Math.random() * (high - low) + low);
};

httpServer.listen(5000);
