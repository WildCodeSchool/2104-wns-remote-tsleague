import styled from 'styled-components';
import { colors } from './globals';

interface StyledButtonProps {
  buttonStyle?: string;
}

const StyledButton = styled.button<StyledButtonProps>`
  text-transform: uppercase;
  font-weight: bold;
  margin: 10px 0;
  cursor: pointer;
  padding: 10px;
  border-radius: 100px;
  white-space: nowrap;
  transition: all, 240ms ease-in-out;

  /* Colors */
  background-color: ${(props) =>
    props.buttonStyle === 'reverse' ? colors.white : colors.primary};
  color: ${(props) =>
    props.buttonStyle === 'reverse' ? colors.primary : colors.white};

  /* Rounded border */
  border: none;

  &:hover {
    filter: brightness(1.1);
  }
`;

const StyledSubmitButton = styled(StyledButton)`
  background: linear-gradient(
    60deg,
    rgba(137, 130, 255, 1) 20%,
    rgba(92, 92, 237, 1) 100%
  );
`;

export { StyledButton, StyledSubmitButton };
