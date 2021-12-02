import React from 'react';
import './TeacherRegistration.css';

import {
  StyledCard,
  StyledHeader,
  BackDrop,
  StyledBody,
  StyledCardClassroom,
} from '../styles/TeacherRegistration';
import TeacherRegistrationFormForm from './TeacherRegistrationForm';

function TeacherRegistrationForm(): JSX.Element {
  return (
    <StyledCardClassroom>
      <StyledHeader>
        <BackDrop />
        <div>
          <h2>PixeLearn - Création de l&rsquo;enseignant et de la classe</h2>
        </div>
      </StyledHeader>
      <StyledBody>
        <TeacherRegistrationFormForm />
      </StyledBody>
    </StyledCardClassroom>
  );
}

export default TeacherRegistrationForm;
