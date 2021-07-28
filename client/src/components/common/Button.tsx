import React from 'react';
import StyledButton from '../styles/Button';

export type ButtonProps = {
  text: string;
  handleClick: () => void;
  reverse?: boolean;
};

function Button({ text, handleClick }: ButtonProps) {
  return (
    <StyledButton onClick={handleClick} data-testid="btn">
      {text}
    </StyledButton>
  );
}

export default Button;
