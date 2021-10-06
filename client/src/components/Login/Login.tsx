import React from 'react';
import './Login.css';

import {
  StyledCard,
  StyledHeader,
  BackDrop,
  StyledBody,
} from '../styles/Login';
import LoginForm from './LoginForm';

function Login(): JSX.Element {
  return (
    <StyledCard>
      <StyledHeader>
        <BackDrop />
        <div>
          <h2>Bienvenue sur PixeLearn</h2>
          <h5>Connectez-vous pour continuer!</h5>
        </div>
      </StyledHeader>
      <StyledBody>
        <LoginForm />
      </StyledBody>
    </StyledCard>
  );
}

export default Login;
