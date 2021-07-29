import React from 'react';

import { StyledBox, StyledForm, StyledInput } from '../styles/Login';
import Button from '../common/Button';

function LoginForm(): JSX.Element {
  return (
    <StyledBox>
      <StyledForm>
        <StyledInput type="email" placeholder="Mail" />
        <StyledInput type="password" placeholder="Mot de passe" />
      </StyledForm>
      <a href="http://localhost:3000/">Vous avez oublié votre mot de passe ?</a>
      <Button
        text="Connectez-vous"
        buttonStyle="submit"
        handleClick={() => console.log('connexion')}
      />
    </StyledBox>
  );
}

export default LoginForm;
