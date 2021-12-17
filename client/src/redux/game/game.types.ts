export type ClassMate = {
  readonly id: string;
  lastname: string;
  firstname: string;
  role: string;
  position: {
    positionX: string;
    positionY: string;
  };
  socketId: string;
  direction: string;
  skin: string;
  connected: boolean;
  classroom: string;
};

export type GameState = {
  studentModal: boolean;
  studentGamePosition?: {
    positionX: string;
    positionY: string;
  };
  classMates: ClassMate[];
  logoutClassMates: string[];
};

export type Position = {
  positionX: string;
  positionY: string;
};

export type GameAction =
  | {
      type: 'STUDENT_MODAL_TOGGLE';
    }
  | {
      type: 'STUDENT_GAME_POSITION';
      payload: Position;
    }
  | {
      type: 'CLASSMATES_GAME_POSITION';
      payload: ClassMate[];
      socketId: string;
    }
  | {
      type: 'CLASSMATE_LOGOUT';
      socketId: string;
    };
