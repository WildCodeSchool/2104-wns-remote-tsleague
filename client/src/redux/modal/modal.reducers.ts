import MODAL_ACTIONS, { ModalState } from './modal.types';
import { Action } from './modal.actions';

const { CLASSROOM_MODAL_TOGGLE } = MODAL_ACTIONS;

const initialGameState = {
  classroomModal: false,
};

export default (state = initialGameState, action: Action): ModalState => {
  switch (action.type) {
    case CLASSROOM_MODAL_TOGGLE:
      return { ...state, classroomModal: !state.classroomModal };
    default:
      return state;
  }
};
