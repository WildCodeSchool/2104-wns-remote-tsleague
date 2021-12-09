import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import { Player, StudentPlayerMoves } from './helpers/types';
import { filterPlayersByRoom, playerAlreadyExist, updatePlayersPosition } from './utils/playersUtils';

export default function startSocket(): void {
  const httpServer = createServer();
  const io = new Server(httpServer, {
    cors: {
      origin: true,
      methods: ['*'],
    },
  }).listen(httpServer);

  let players: Player[] = [];
  let room: string;

  io.on('connection', async (socket: Socket): Promise<void> => {
    console.log(`connected with id ${socket.id}`);

    socket.on('createRoom', (classroomId: string) => {
      room = classroomId;
      const alreadyExist = playerAlreadyExist(players, socket.id);
      if (!alreadyExist) {
        players.push({
          socketId: socket.id,
          position: {
            positionX: '',
            positionY: '',
          },
          direction: '',
          connected: true,
          classroom: room,
        });
      }
      socket.join(room);
      socket.to(room).emit('roomJoined', room);
    });

    // FILTRER SUR LA CLASSROOM ID POUR ENVOYER A LA BONNE ROOM
    const currentPlayersFilteredByRoom = await filterPlayersByRoom(players, room);
    socket.to(room).emit('currentPlayers', currentPlayersFilteredByRoom);

    socket.to(room).emit('socketId', socket.id);

    socket.on('disconnect', () => {
      console.log(`${socket.id} disconnected`);
      players = players.filter((player) => player.socketId !== socket.id);

      socket.to(room).emit('logout', socket.id);
    });

    socket.on('studentPlayer', async (payload: StudentPlayerMoves) => {
      const alreadyExist = playerAlreadyExist(players, socket.id);
      if (!alreadyExist) {
        players.push({
          socketId: socket.id,
          position: {
            positionX: payload.positionX,
            positionY: payload.positionY,
          },
          direction: payload.direction,
          connected: true,
          classroom: '',
        });
      }
      players = await updatePlayersPosition(players, socket.id, payload);

      // FILTRER SUR LA CLASSROOM ID POUR ENVOYER A LA BONNE ROOM
      const newPlayersFilteredByRoom = await filterPlayersByRoom(players, room);
      socket.to(room).emit('newPlayers', newPlayersFilteredByRoom);
    });
  });
  const port = 4000;
  console.log(`Socket server started at port ${port}`);
  httpServer.listen(port);
}
