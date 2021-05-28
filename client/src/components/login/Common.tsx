import styled from 'styled-components';

const StyledLoginBoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const StyledLoginFormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledLoginMutedLink = styled.a`
  font-size: 12px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
  text-decoration: none;
`;

export const StyledLoginBoldLink = styled.a`
  font-size: 12px;
  color: rgb(137, 130, 255);
  font-weight: 500;
  text-decoration: none;
`;

export const StyledLoginInput = styled.input`
  outline: none;
  height: 45px;
  width: 100%;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  &:placeholder {
    color: rgba(200, 200, 200, 1);
  }
  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(137, 130, 255);
  }
`;

export const StyledLoginSubmitButton = styled.button`
  width: 100%;
  padding: 10px 30%;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  background: rgb(137, 130, 255);
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 250ms ease-in-out;
`;

export default StyledLoginBoxContainer;
