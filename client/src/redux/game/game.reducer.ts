import { Action } from './game.actions';

const initialGameState = {
  studentModal: false,
  studentGamePosition: { positionX: '', positionY: '' },
};

type State = {
  studentModal: boolean;
  studentGamePosition?: { positionX: string; positionY: string };
};

const gameReducer = (state = initialGameState, action: Action): State => {
  switch (action.type) {
    case 'STUDENT_MODAL_TOGGLE': {
      return { ...state, studentModal: !state.studentModal };
    }
    case 'STUDENT_GAME_POSITION': {
      return { ...state, studentGamePosition: action.payload };
    }
    default:
      return state;
  }
};

export default gameReducer;
