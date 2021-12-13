import { ClassMate, GameAction, GameState } from './game.types';

const initialGameState = {
  studentModal: false,
  studentGamePosition: { positionX: '', positionY: '' },
  classMates: [],
  logoutClassMates: [],
};

const gameReducer = (
  state = initialGameState,
  action: GameAction
): GameState => {
  switch (action.type) {
    case 'STUDENT_MODAL_TOGGLE': {
      return { ...state, studentModal: !state.studentModal };
    }
    case 'STUDENT_GAME_POSITION': {
      return { ...state, studentGamePosition: action.payload };
    }
    case 'CLASSMATES_GAME_POSITION': {
      const newClassMates: ClassMate[] = action.payload.filter(
        (classMate: ClassMate) => classMate.socketId !== action.socketId
      );
      return { ...state, classMates: newClassMates };
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
