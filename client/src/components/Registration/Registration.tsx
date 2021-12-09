import React from 'react';
import { useLocation } from 'react-router-dom';

import './Registration.css';

import {
  StyledHeader,
  BackDrop,
  StyledBody,
  StyledCard,
} from '../styles/Authentication';
import RegistrationForm from './RegistrationForm';

function Registration(): JSX.Element {
  const { pathname } = useLocation();

  return (
    <StyledCard>
      <StyledHeader>
        <BackDrop />
        <div>
          <h2>
            {pathname === '/register-teacher'
              ? "PixeLearn - Création de l'enseignant et de la classe"
              : 'PixeLearn - Création de l’élève'}
          </h2>
        </div>
      </StyledHeader>
      <StyledBody>
        <RegistrationForm />
      </StyledBody>
    </StyledCard>
  );
}

export default Registration;
