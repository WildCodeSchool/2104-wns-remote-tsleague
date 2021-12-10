import { GameAction, Position } from './game.types';

const studentModalToggle = (): GameAction => ({
  type: 'STUDENT_MODAL_TOGGLE',
});

const getStudentPosition = (payload: Position): GameAction => ({
  type: 'STUDENT_GAME_POSITION',
  payload,
});

export default { studentModalToggle, getStudentPosition };
