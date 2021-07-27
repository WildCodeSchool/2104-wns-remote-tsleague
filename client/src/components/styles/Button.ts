import styled from 'styled-components';
import { colors } from './globals';

interface StyledButtonProps {
  buttonStyle?: string;
}

const StyledButton = styled.button<StyledButtonProps>`
  text-transform: uppercase;
  margin: 10px 0;
  cursor: pointer;
  padding: 11px;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px;
  white-space: nowrap;
  transition: all, 240ms ease-in-out;

  /* Colors */
  background-color: ${(props) => {
    if (props.buttonStyle === 'reverse') return colors.white;
    return colors.primary;
  }};
  color: ${(props) => {
    if (props.buttonStyle === 'reverse') return colors.primary;
    return colors.white;
  }};

  /* Rounded border */
  border: none;
  height: 50px;
  width: 200px;

  &:hover {
    filter: brightness(1.1);
  }
`;

export default StyledButton;
