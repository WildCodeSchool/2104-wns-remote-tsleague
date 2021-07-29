import React from 'react';
import { StyledButton, StyledSubmitButton } from '../styles/Button';

export type ButtonProps = {
  text: string;
  handleClick: () => void;
  buttonStyle?: string;
};

function Button({ text, handleClick, buttonStyle }: ButtonProps): JSX.Element {
  if (buttonStyle === 'submit') {
    return (
      <StyledSubmitButton
        buttonStyle={buttonStyle}
        onClick={handleClick}
        data-testid="btn"
      >
        {text}
      </StyledSubmitButton>
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
