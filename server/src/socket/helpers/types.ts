export type Position = {
  positionX: string;
  positionY: string;
};

export type Player = {
  socketId: string;
  position: Position;
  direction: string;
  connected: boolean;
};

export type StudentPlayerMoves = {
  positionX: string;
  positionY: string;
  direction: string;
};
