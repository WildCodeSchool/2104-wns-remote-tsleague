import { createServer } from 'http';
import { Server, Socket } from 'socket.io';

type Position = {
  positionX: string;
  positionY: string;
};

type Player = {
  socketId: string;
  position: Position;
};

const updatePlayersPosition = async (players: Player[], socketId: string, payload: any ): Promise<Player[]> => {
  return players.map((player: Player) => {
    if (player.socketId === socketId){
      return { ...player, position: payload } 
    }

    return player
    
  });
}

export default function startSocket(): void {
  const httpServer = createServer();
  const io = new Server(httpServer, {
    cors: {
      origin: true,
      methods: ['*'],
    },
  }).listen(httpServer);

  let players: Player[] = [];

  io.on('connection', (socket: Socket): void => {
    console.log(`connected with id ${socket.id}`);

    players.push({
      socketId: socket.id,
      position: {
        positionX: '',
        positionY: '',
      },
    });

    socket.emit('currentPlayers', players);

    socket.on('disconnect', () => {
      console.log(`${socket.id} disconnected`);
    });

    socket.on('studentPlayer', async (payload: Position) => {
      console.log(payload)
      const newPlayers = await updatePlayersPosition(players, socket.id, payload)

      socket.broadcast.emit('newPlayers', newPlayers);
      console.log(players);
      console.log(`received move: ${payload.positionX}, ${payload.positionY}`);
    });
  });

  console.log('Socket server started at port 5050');
  httpServer.listen(5050);
}
