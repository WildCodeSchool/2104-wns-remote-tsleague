import type { Action } from './game.actions';

const initialGameState = {
  studentModal: false,
  studentGamePosition: { positionX: '', positionY: '' },
  classMates: [],
  logoutClassMates: [],
};

export type ClassMate = {
  position: {
    positionX: string;
    positionY: string;
  };
  socketId: string;
  direction: string;
  connected: boolean;
};

export type State = {
  studentModal: boolean;
  studentGamePosition?: {
    positionX: string;
    positionY: string;
  };
  classMates: ClassMate[];
  logoutClassMates: string[];
};

const gameReducer = (state = initialGameState, action: Action): State => {
  switch (action.type) {
    case 'STUDENT_MODAL_TOGGLE': {
      return { ...state, studentModal: !state.studentModal };
    }
    case 'STUDENT_GAME_POSITION': {
      return { ...state, studentGamePosition: action.payload };
    }
    case 'CLASSMATES_GAME_POSITION': {
      return { ...state, classMates: action.classMates };
    }
    case 'CLASSMATE_LOGOUT': {
      const newClassMates = state.classMates.map((classMate: ClassMate) => {
        if (classMate.socketId === action.socketId) {
          return { ...classMate, connected: !classMate.connected };
        }
        return classMate;
      });
      return {
        ...state,
        classMates: newClassMates,
      };
    }
    default:
      return state;
  }
};

export default gameReducer;
