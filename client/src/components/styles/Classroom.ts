import styled from 'styled-components';
import { colors } from './globals';

export const StyledClassroom = styled.div`
  position: absolute;
  left: 20%;
  top: 100px;
  z-index: 10;
  display: flex;
  margin: auto;
`;

export const StyledSection = styled.div`
  width: 600px;
  height: 800px;
  margin: 10px;
  padding: 20px;

  background: #eeeeee;
  border: 3px solid #0065a8;
  box-sizing: border-box;

  h3 {
    font-weight: bold;
    text-transform: uppercase;
  }
`;

export const StyledItem = styled.div`
  width: 95%;
  background: #ffffff;
  border-radius: 11px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  margin-bottom: 7px;
  padding: 5px;

  display: flex;
  align-items: center;

  img,
  span {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 0 20px 0 10px;
  }

  p {
    margin-right: 50px;
  }

  span {
    height: 42px;
    width: 42px;
    border-radius: 30px;

    font-weight: bold;
    font-size: 60px;
    line-height: 70px;
    text-align: center;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;

    /* white */
    color: #ffffff;
    background: #80b2d4;
  }
`;
