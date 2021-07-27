import React from 'react';
import styled from 'styled-components';
import StyledButton from '../styles/Button';

const SubmitButton = styled(StyledButton)`
  background: linear-gradient(
    60deg,
    rgba(137, 130, 255, 1) 20%,
    rgba(92, 92, 237, 1) 100%
  );
`;

export type ButtonProps = {
  text: string;
  handleClick: () => void;
  buttonStyle?: string;
};

function Button({ text, handleClick, buttonStyle }: ButtonProps) {
  if (buttonStyle === 'submit') {
    return (
      <SubmitButton
        buttonStyle={buttonStyle}
        onClick={handleClick}
        data-testid="btn"
      >
        {text}
      </SubmitButton>
    );
  }

  return (
    <StyledButton
      buttonStyle={buttonStyle}
      onClick={handleClick}
      data-testid="btn"
    >
      {text}
    </StyledButton>
  );
}

export default Button;
