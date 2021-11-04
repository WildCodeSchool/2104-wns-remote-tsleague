import React from 'react';
import './ClassroomRegistration.css';

import {
  StyledCard,
  StyledHeader,
  BackDrop,
  StyledBody,
} from '../styles/ClasroomRegistration';
import ClassroomRegistrationForm from './ClassroomRegistrationForm';

function ClassroomRegistration(): JSX.Element {
  return (
    <StyledCard>
      <StyledHeader>
        <BackDrop />
        <div>
          <h2>Bienvenue sur PixeLearn</h2>
        </div>
      </StyledHeader>
      <StyledBody>
        <ClassroomRegistrationForm />
      </StyledBody>
    </StyledCard>
  );
}

export default ClassroomRegistration;
