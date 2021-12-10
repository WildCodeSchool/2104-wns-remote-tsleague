import React from 'react';

import { StyledItem } from '../styles/Classroom';

function ClassroomAddStudent(): JSX.Element {
  return (
    <StyledItem>
      <span>+</span>
      <p>Ajouter un élève</p>
    </StyledItem>
  );
}

export default ClassroomAddStudent;
