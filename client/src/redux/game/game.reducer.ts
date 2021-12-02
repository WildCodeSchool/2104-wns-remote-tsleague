// eslint-disable-next-line import/no-cycle
import { Action } from './game.actions';

const initialGameState = {
  studentModal: false,
  studentGamePosition: { positionX: '', positionY: '' },
  classMates: [],
};

export type ClassMate = {
  position: {
    positionX: string;
    positionY: string;
  };
  socketId: string;
};

export type State = {
  studentModal: boolean;
  studentGamePosition?: {
    positionX: string;
    positionY: string;
  };
  classMates: ClassMate[];
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
      return { ...state, classMates: action.payload };
    }
    default:
      return state;
  }
};

export default gameReducer;
