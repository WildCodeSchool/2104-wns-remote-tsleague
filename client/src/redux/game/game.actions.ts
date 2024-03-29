type Position = {
  positionX: string;
  positionY: string;
};

export type Action =
  | {
      type: 'STUDENT_MODAL_TOGGLE';
    }
  | {
      type: 'STUDENT_GAME_POSITION';
      payload: Position;
    };

const studentModalToggle = (): Action => ({
  type: 'STUDENT_MODAL_TOGGLE',
});

const getStudentPosition = (payload: Position): Action => ({
  type: 'STUDENT_GAME_POSITION',
  payload,
});

export default { studentModalToggle, getStudentPosition };
