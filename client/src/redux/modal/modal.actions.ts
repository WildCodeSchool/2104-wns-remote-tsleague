import MODAL_ACTIONS from './modal.types';

const { CLASSROOM_MODAL_TOGGLE } = MODAL_ACTIONS;

export type Action = {
  type: string;
};

const classroomModalToggle = (): Action => ({
  type: CLASSROOM_MODAL_TOGGLE,
});

export default { classroomModalToggle };
