import styled from 'styled-components';
import { colors } from './globals';

export const StyledBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

export const StyledInput = styled.div`
  input {
    width: 300px;
    height: 52px;
    outline: none;
    border: none;
    margin: 14px;
    border-bottom: 1.4px solid transparent;
    transition: all 200ms ease-in-out;
    font-size: 14px;
    &::placeholder {
      color: ${colors.gray};
    }
    &:not(:last-of-type) {
      border-bottom: 1.5px solid ${colors.lightgray};
    }
    &:focus {
      outline: none;
      border-bottom: 2px solid ${colors.primary};
    }
  }

  div {
    color: red;
    opacity: 80%;
    font-size: 12px;
  }
`;

export const StyledCard = styled.div`
  position: absolute;
  transform: translate(-0%, 25%);
  width: 480px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
  margin: auto;

  a {
    font-size: 11px;
    color: ${colors.gray};
    font-weight: 500;
    text-decoration: none;
    margin-bottom: 20px;
    margin-top: 15px;
  }
`;

export const StyledCardClassroom = styled.div`
  position: absolute;
  transform: translate(-0%, 25%);
  width: 480px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
  margin: auto;
  margin-top: -150px;

  a {
    font-size: 11px;
    color: ${colors.gray};
    font-weight: 500;
    text-decoration: none;
    margin-bottom: 20px;
    margin-top: 15px;
  }
`;

export const StyledHeader = styled.div`
  width: 80%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 10em;

  div {
    display: flex;
    flex-direction: column;

    h2 {
      font-size: 30px;
      font-weight: 600;
      line-height: 1.24;
      color: #fff;
      z-index: 10;
      margin: 0;
    }

    h5 {
      color: #fff;
      font-weight: 500;
      font-size: 11px;
      z-index: 10;
      margin: 0;
      margin-top: 7px;
    }
  }
`;

export const BackDrop = styled.div`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 70%;
  transform: rotate(164deg);
  top: -290px;
  left: -70px;
  background: linear-gradient(
    60deg,
    rgba(137, 130, 255, 1) 20%,
    rgba(92, 92, 237, 1) 100%
  );
`;

export const StyledBody = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`;
