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
  padding: 10px;

  background: #eeeeee;
  border: 3px solid #0065a8;
  box-sizing: border-box;

  h3 {
    font-weight: bold;
    text-transform: uppercase;
  }
`;

export const StyledItem = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: 11px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  margin-bottom: 7px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: 10px;
  }

  p {
    margin-right: 50px;
  }
`;

// .chose-folder {
//   @include basic-card-container;
//   position: absolute;
//   left: 50%;
//   top: 100px;
//   z-index: 10;
//   width: 100%;
//   max-width: 588px;
//   padding: 35px;
