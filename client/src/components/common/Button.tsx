import React from 'react';
import StyledButton from '../styles/Button';

export type ButtonProps = {
  text: string;
  handleClick: () => void;
  reverse?: boolean;
};

function Button({ text, handleClick, reverse }: ButtonProps) {
  return (
    <StyledButton reverse={reverse} onClick={handleClick} data-testid="btn">
      {text}
    </StyledButton>
  );
}

export default Button;