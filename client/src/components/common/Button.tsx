import React from 'react';
import { StyledButton, StyledSubmitButton } from '../styles/Button';

export type ButtonProps = {
  text: string;
  type?: 'submit' | 'button' | 'reset' | undefined;
  handleClick?: () => void;
  buttonStyle?: string;
};

function Button({
  text,
  type,
  handleClick,
  buttonStyle,
}: ButtonProps): JSX.Element {
  if (buttonStyle === 'submit') {
    return (
      <StyledSubmitButton
        buttonStyle={buttonStyle}
        onClick={handleClick}
        data-testid="btn"
        type={type}
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
      type={type}
    >
      {text}
    </StyledButton>
  );
}

export default Button;
