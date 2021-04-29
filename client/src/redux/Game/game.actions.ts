import GAME_ACTIONS from './game.types';

const { STUDENT_MODAL_TOGGLE } = GAME_ACTIONS;

export const studentModalToggle = () => ({
  type: STUDENT_MODAL_TOGGLE,
});
