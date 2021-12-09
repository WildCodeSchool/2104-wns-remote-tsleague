import React from 'react';
import './Login.css';

import {
  StyledCard,
  StyledHeader,
  BackDrop,
  StyledBody,
} from '../styles/Authentication';
import LoginForm from './LoginForm';

function Login(): JSX.Element {
  return (
    <StyledCard>
      <StyledHeader>
        <BackDrop />
        <div>
          <h2>Bienvenue sur PixeLearn</h2>
        </div>
      </StyledHeader>
      <StyledBody>
        <LoginForm />
      </StyledBody>
    </StyledCard>
  );
}

export default Login;
