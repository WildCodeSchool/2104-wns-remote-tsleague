export type Position = {
  positionX: string;
  positionY: string;
};

export type Player = {
  readonly id: string;
  lastname: string;
  firstname: string;
  role: string;
  socketId: string;
  position: Position;
  direction: string;
  skin: string;
  connected: boolean;
  classroom: string;
};

export type StudentPlayerMoves = {
  positionX: string;
  positionY: string;
  direction: string;
  skin: string;
};

export type UserClassRoom = {
  id: string;
  name: string;
  __typename: string;
};

export type UserData = {
  readonly id: string;
  readonly lastname: string;
  readonly firstname: string;
  readonly role: string;
  readonly classrooms: UserClassRoom[];
  readonly token: string;
};
