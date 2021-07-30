import MODAL_ACTIONS from './modal.types';
import { Action } from './modal.actions';

const { CLASSROOM_MODAL_TOGGLE } = MODAL_ACTIONS;

type State = {
  classroomModal: boolean;
};

const initialGameState = {
  classroomModal: false,
};

const modalReducer = (state = initialGameState, action: Action): State => {
  switch (action.type) {
    case CLASSROOM_MODAL_TOGGLE:
      return { ...state, classroomModal: !state.classroomModal };
    default:
      return state;
  }
};

// export const getModals = (state: State) => {
//   return state.modals;
// };

export default modalReducer;
