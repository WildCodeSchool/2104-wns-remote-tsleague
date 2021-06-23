import React from 'react';
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from './Common';
import Marginer from './marginer/Marginer';
import AccountContext from './AccountContext';

function LoginForm(): JSX.Element {
  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="  Mail" />
        <Input type="password" placeholder="   Mot de passe" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Vous avez oublié votre mot de passe ?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit">Connectez-vous</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
    </BoxContainer>
  );
}

export default LoginForm;
