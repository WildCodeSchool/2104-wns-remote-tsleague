import GAME_ACTIONS from './game.types';

const { STUDENT_MODAL_TOGGLE } = GAME_ACTIONS;

type Action = {
  type: string;
  payload?: any;
};

const studentModalToggle = (): Action => ({
  type: STUDENT_MODAL_TOGGLE,
});

export default { studentModalToggle };
