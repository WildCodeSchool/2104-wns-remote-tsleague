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
          <h2>Bienvenue sur PixelMerde</h2>
          <h5>Ne vous connectez surtout pas!</h5>
        </div>
      </StyledHeader>
      <StyledBody>
        <LoginForm />
      </StyledBody>
    </StyledCard>
  );
}

export default Login;
