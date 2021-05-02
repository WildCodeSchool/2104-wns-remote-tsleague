import GAME_ACTIONS from './game.types';

const { STUDENT_MODAL_TOGGLE, STUDENT_GAME_POSITION } = GAME_ACTIONS;

export type Action = {
  type: string;
  payload?: { positionX: string; positionY: string };
};

const studentModalToggle = (): Action => ({
  type: STUDENT_MODAL_TOGGLE,
});

const getStudentPosition = (payload: {
  positionX: '';
  positionY: '';
}): Action => ({
  type: STUDENT_GAME_POSITION,
  payload,
});

export default { studentModalToggle, getStudentPosition };
