import React from 'react';

import { StyledItem } from '../styles/Classroom';

interface ClassroomAddStudentProps {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

function ClassroomAddStudent({
  onClick,
}: ClassroomAddStudentProps): JSX.Element {
  return (
    <StyledItem onClick={onClick} hover>
      <span>+</span>
      <p>Ajouter un élève</p>
    </StyledItem>
  );
}

export default ClassroomAddStudent;
