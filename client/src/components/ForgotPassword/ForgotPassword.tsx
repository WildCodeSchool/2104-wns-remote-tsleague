import React from 'react';
import './ForgotPassword.css';

import {
  StyledCard,
  StyledHeader,
  BackDrop,
  StyledBody,
  StyledCardPassword,
} from '../styles/ForgotPassword';
import ForgotPasswordForm from './ForgotPasswordForm';

function ForgotPassword(): JSX.Element {
  return (
    <StyledCardPassword>
      <StyledHeader>
        <BackDrop />
        <div>
          <h2>PixeLearn - Mot de passe oublié </h2>
        </div>
      </StyledHeader>
      <StyledBody>
        <ForgotPasswordForm />
      </StyledBody>
    </StyledCardPassword>
  );
}

export default ForgotPassword;
