import React from 'react';
import { useLocation } from 'react-router-dom';

import './Registration.css';

import {
  StyledHeader,
  BackDrop,
  StyledBody,
  StyledCardClassroom,
} from '../styles/Registration';
import RegistrationForm from './RegistrationForm';

function Registration(): JSX.Element {
  const { pathname } = useLocation();

  return (
    <StyledCardClassroom>
      <StyledHeader>
        <BackDrop />
        <div>
          {pathname === '/register-teacher' ? (
            <h2>PixeLearn - Création de l&rsquo;enseignant et de la classe</h2>
          ) : (
            <h2>PixeLearn - Création de l’élève</h2>
          )}
        </div>
      </StyledHeader>
      <StyledBody>
        <RegistrationForm />
      </StyledBody>
    </StyledCardClassroom>
  );
}

export default Registration;
