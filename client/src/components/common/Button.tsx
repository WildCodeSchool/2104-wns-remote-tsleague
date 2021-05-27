import React from 'react';
import Btn from '../styles/Button';

export type ButtonProps = {
  text: string;
  handleClick: () => void;
  reverse?: boolean;
};

function Button({ text, handleClick, reverse }: ButtonProps) {
  return (
    <Btn reverse={reverse} onClick={handleClick} data-testid="btn">
      {text}
    </Btn>
  );
}

export default Button;
