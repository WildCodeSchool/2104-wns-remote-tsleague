import React from 'react';
import { useLocation } from 'react-router-dom';

import './ForgotPassword.css';

import {
  StyledCard,
  StyledHeader,
  BackDrop,
  StyledBody,
} from '../styles/Authentication';
import ForgotPasswordForm from './ForgotPasswordForm';
import ResetPasswordForm from './ResetPasswordForm';

function ForgotPassword(): JSX.Element {
  const { pathname } = useLocation();

  return (
    <StyledCard>
      <StyledHeader>
        <BackDrop />
        <div>
          <h2>
            {pathname === '/forgot-password'
              ? 'PixeLearn - Mot de passe oublié '
              : 'PixeLearn - Changer de mot de passe'}
          </h2>
        </div>
      </StyledHeader>
      <StyledBody>
        {pathname === '/forgot-password' ? (
          <ForgotPasswordForm />
        ) : (
          <ResetPasswordForm />
        )}
      </StyledBody>
    </StyledCard>
  );
}

export default ForgotPassword;
