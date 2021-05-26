import styled from 'styled-components';
import { colors } from './globals';

const Button = styled.button`
  text-transform: uppercase;
  margin: 10px 0;

  /* Colors */
  background-color: ${colors.primary};
  color: ${colors.white};

  /* Rounded border */
  border: none;
  border-radius: 10px;
  height: 50px;
  width: 200px;
`;

export default Button;
