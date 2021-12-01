import React from 'react';
import './ClassroomRegistration.css';

import {
  StyledCard,
  StyledHeader,
  BackDrop,
  StyledBody,
  StyledCardClassroom,
} from '../styles/ClassroomRegistration';
import ClassroomRegistrationForm from './ClassroomRegistrationForm';

function ClassroomRegistration(): JSX.Element {
  return (
    <StyledCardClassroom>
      <StyledHeader>
        <BackDrop />
        <div>
          <h2>PixeLearn - Création de l&rsquo;enseignant et de la classe</h2>
        </div>
      </StyledHeader>
      <StyledBody>
        <ClassroomRegistrationForm />
      </StyledBody>
    </StyledCardClassroom>
  );
}

export default ClassroomRegistration;
