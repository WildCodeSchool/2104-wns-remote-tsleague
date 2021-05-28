import React from 'react';
import BoxContainer, {
  StyledLoginFormContainer,
  StyledLoginInput,
  StyledLoginMutedLink,
  StyledLoginSubmitButton,
} from './Common';
import Marginer from './marginer/Marginer';

function LoginForm(): JSX.Element {
  return (
    <BoxContainer>
      <StyledLoginFormContainer>
        <StyledLoginInput type="email" placeholder="E-mail" />
        <StyledLoginInput type="password" placeholder="Mot de passe" />
        <Marginer direction="vertical" margin={5} />
        <StyledLoginMutedLink href="#">
          Mot de passe oublié?
        </StyledLoginMutedLink>
        <Marginer direction="vertical" margin="1em" />
        <StyledLoginSubmitButton type="submit" id="loginBtn">
          Connectez-vous
        </StyledLoginSubmitButton>
      </StyledLoginFormContainer>
    </BoxContainer>
  );
}

export default LoginForm;
