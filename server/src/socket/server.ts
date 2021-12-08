import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import { Player, StudentPlayerMoves } from './helpers/types';

const updatePlayersPosition = async (
  players: Player[],
  socketId: string,
  payload: StudentPlayerMoves,
): Promise<Player[]> => players.map((player: Player) => {
  if (player.socketId === socketId) {
    return {
      ...player,
      position: {
        positionX: payload.positionX,
        positionY: payload.positionY,
      },
      direction: payload.direction,
    };
  }

  return player;
});

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

    socket.emit('socketId', socket.id);

    socket.on('disconnect', () => {
      console.log(`${socket.id} disconnected`);
      players = players.filter((player) => player.socketId !== socket.id);

      socket.broadcast.emit('logout', socket.id);
    });

    socket.on('studentPlayer', async (payload: StudentPlayerMoves) => {
      const playerAlreadyExist = players.some(
        (player) => player.socketId === socket.id,
      );
      if (!playerAlreadyExist) {
        players.push({
          socketId: socket.id,
          position: {
            positionX: payload.positionX,
            positionY: payload.positionY,
          },
          direction: payload.direction,
          connected: true,
        });
      }

      players = await updatePlayersPosition(players, socket.id, payload);

      socket.broadcast.emit('newPlayers', players);
    });
  });
  const port = 6000;
  console.log(`Socket server started at port ${port}`);
  httpServer.listen(port);
}
