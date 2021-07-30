import React from 'react';
import {
  StyledCard,
  StyledHeader,
  BackDrop,
  StyledBody,
} from '../styles/Signup';
import SignupForm from './SignupForm';

function Login(): JSX.Element {
  return (
    <StyledCard>
      <StyledHeader>
        <BackDrop />
        <div>
          <h2>Bienvenue sur PixeLearn</h2>
          <h5>Inscrivez-vous pour continuer!</h5>
        </div>
      </StyledHeader>
      <StyledBody>
        <SignupForm />
      </StyledBody>
    </StyledCard>
  );
}

export default Login;
