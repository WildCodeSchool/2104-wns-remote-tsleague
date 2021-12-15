import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import { Player, StudentPlayerMoves, UserData } from './helpers/types';
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

    socket.on('createRoom', async (userData: UserData) => {
      const alreadyExist = await playerAlreadyExist(players, socket.id);
      if (!alreadyExist) {
        players.push({
          firstname: userData.firstname,
          lastname: userData.lastname,
          role: userData.role,
          id: userData.id,
          socketId: socket.id,
          position: {
            positionX: '',
            positionY: '',
          },
          direction: '',
          connected: true,
          classroom: userData.classrooms[0].id,
        });
      }
      socket.join(userData.classrooms[0].id);
      socket.emit('roomJoined', userData.classrooms[0].id);
      console.log(socket.rooms);

      socket.emit('socketId', socket.id);

      // FILTRER SUR LA CLASSROOM ID POUR ENVOYER A LA BONNE ROOM
      const currentPlayersFilteredByRoom = await filterPlayersByRoom(
        players,
        userData.classrooms[0].id,
      );
      socket.emit('currentPlayers', currentPlayersFilteredByRoom);

      socket.on('studentPlayer', async (payload: StudentPlayerMoves) => {
        players = await updatePlayersPosition(players, socket.id, payload);

        // FILTRER SUR LA CLASSROOM ID POUR ENVOYER A LA BONNE ROOM
        const newPlayersFilteredByRoom = await filterPlayersByRoom(
          players,
          userData.classrooms[0].id,
        );
        io.to(userData.classrooms[0].id).emit('newPlayers', newPlayersFilteredByRoom);
      });

      socket.on('disconnect', () => {
        console.log(`${socket.id} disconnected`);
        players = players.filter((player) => player.socketId !== socket.id);

        socket.to(userData.classrooms[0].id).emit('logout', socket.id);
      });
    });
  });

  const port = 4000;
  console.log(`Socket server started at port ${port}`);
  httpServer.listen(port);
}
