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

const getRandomPosition = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min) + min);
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

    socket.emit('currentPlayers', players);

    socket.on('disconnect', () => {
      console.log(`${socket.id} disconnected`);
      players = players.filter(player => player.socketId !== socket.id)
    });

    socket.on('studentPlayer', async (payload: Position) => {
      const playerAlreadyExist = players.some(player => player.socketId === socket.id)
      if (!playerAlreadyExist) {
        players.push({
          socketId: socket.id,
          position: {
            positionX: payload.positionX,
            positionY: payload.positionY
          }
        })
      }
      console.log(payload)
      const newPlayers = await updatePlayersPosition(players, socket.id, payload)

      console.log(newPlayers);
      socket.broadcast.emit('newPlayers', newPlayers);
    });
  });

  console.log('Socket server started at port 5050');
  httpServer.listen(5050);
}
