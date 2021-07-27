import React from 'react';
import { BoxContainer, FormContainer, Input, MutedLink } from './Common';
import Button from '../common/Button';

function LoginForm(): JSX.Element {
  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="  Mail" />
        <Input type="password" placeholder="   Mot de passe" />
      </FormContainer>
      <MutedLink href="#">Vous avez oublié votre mot de passe ?</MutedLink>
      <Button
        text="Connectez-vous"
        buttonStyle="submit"
        handleClick={() => console.log('connexion')}
      />
    </BoxContainer>
  );
}

export default LoginForm;
