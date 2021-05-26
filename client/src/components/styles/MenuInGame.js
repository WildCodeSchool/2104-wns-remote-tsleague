import styled from 'styled-components';
import { colors } from './globals';

export const Menu = styled.div`
  background: #ffffff;
  border-radius: 3px;
  color: #182026;
  list-style: none;
  margin: 0;
  min-width: 180px;
  padding: 5px;
  text-align: left;
`;

export const MenuItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  border-radius: 2px;
  color: inherit;
  line-height: 20px;
  padding: 5px 7px;
  text-decoration: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  :hover {
    cursor: pointer;
  }
`;
