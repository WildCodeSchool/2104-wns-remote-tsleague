import { Player, StudentPlayerMoves } from '../helpers/types';

export const playerAlreadyExist = async (players: Player[], socketId: string): Promise<boolean> => {
  const alreadyExist = players.some((player) => player.socketId === socketId);
  return alreadyExist;
};

export const updatePlayersPosition = async (
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

export const filterPlayersByRoom = async (players: Player[], room: string): Promise<Player[]> => {
  const filteredPlayers = players.filter((player: Player) => player.classroom === room);
  return filteredPlayers;
};
