import GAME_ACTIONS from './game.types';

const { STUDENT_MODAL_TOGGLE } = GAME_ACTIONS;

const initialGameState = {
  studentModal: false,
};

const gameReducer = (state = initialGameState, action: { type: string }) => {
  switch (action.type) {
    case STUDENT_MODAL_TOGGLE: {
      return { ...state, studentModal: !state.studentModal };
    }
    default:
      return state;
  }
};

export default gameReducer;
