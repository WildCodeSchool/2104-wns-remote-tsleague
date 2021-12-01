import React from 'react';
import './StudentRegistration.css';

import {
  StyledCard,
  StyledHeader,
  BackDrop,
  StyledBody,
} from '../styles/StudentRegistration';
import StudentRegistrationForm from './StudentRegistrationForm';

function ClassroomRegistration(): JSX.Element {
  return (
    <StyledCard>
      <StyledHeader>
        <BackDrop />
        <div>
          <h2>PixeLearn - Création de l’élève</h2>
        </div>
      </StyledHeader>
      <StyledBody>
        <StudentRegistrationForm />
      </StyledBody>
    </StyledCard>
  );
}

export default ClassroomRegistration;
