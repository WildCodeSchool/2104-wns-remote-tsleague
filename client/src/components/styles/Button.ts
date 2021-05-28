import styled from 'styled-components';
import { colors } from './globals';

interface StyledButtonProps {
  reverse?: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  text-transform: uppercase;
  margin: 10px 0;
  cursor: pointer;

  /* Colors */
  background-color: ${(props) =>
    props.reverse ? colors.white : colors.primary};
  color: ${(props) => (props.reverse ? colors.primary : colors.white)};

  /* Rounded border */
  border: none;
  border-radius: 10px;
  height: 50px;
  width: 200px;
`;

export default StyledButton;
