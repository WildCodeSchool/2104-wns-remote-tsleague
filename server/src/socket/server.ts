import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import { Player, StudentPlayerMoves } from './helpers/types';
import {
  filterPlayersByRoom,
  playerAlreadyExist,
  updatePlayersPosition,
} from './utils/playersUtils';

export default function startSocket(): void {
  const httpServer = createServer();
  const io = new Server(httpServer, {
    cors: {
      origin: true,
      methods: ['*'],
    },
  }).listen(httpServer);

  let players: Player[] = [];
  io.on('connection', async (socket: Socket): Promise<void> => {
    console.log(`connected with id ${socket.id}`);

    socket.on('createRoom', async (classroomId: string) => {
      const alreadyExist = await playerAlreadyExist(players, socket.id);
      if (!alreadyExist) {
        players.push({
          socketId: socket.id,
          position: {
            positionX: '',
            positionY: '',
          },
          direction: '',
          connected: true,
          classroom: classroomId,
        });
      }
      socket.join(classroomId);
      socket.emit('roomJoined', classroomId);
      console.log(socket.rooms);

      socket.emit('socketId', socket.id);

      // FILTRER SUR LA CLASSROOM ID POUR ENVOYER A LA BONNE ROOM
      const currentPlayersFilteredByRoom = await filterPlayersByRoom(
        players,
        classroomId,
      );
      socket.emit('currentPlayers', currentPlayersFilteredByRoom);

      socket.on('studentPlayer', async (payload: StudentPlayerMoves) => {
        players = await updatePlayersPosition(players, socket.id, payload);

        // FILTRER SUR LA CLASSROOM ID POUR ENVOYER A LA BONNE ROOM
        const newPlayersFilteredByRoom = await filterPlayersByRoom(
          players,
          classroomId,
        );
        io.to(classroomId).emit('newPlayers', newPlayersFilteredByRoom);
      });

      socket.on('disconnect', () => {
        console.log(`${socket.id} disconnected`);
        players = players.filter((player) => player.socketId !== socket.id);

        socket.to(classroomId).emit('logout', socket.id);
      });
    });
  });

  const port = 4000;
  console.log(`Socket server started at port ${port}`);
  httpServer.listen(port);
}
