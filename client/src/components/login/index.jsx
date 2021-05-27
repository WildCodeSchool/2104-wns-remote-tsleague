import React from 'react';
import styled from 'styled-components';

const BoxContainer = styled.div`
  width: 280px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;

const BackDrop = styled.div`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  top: -300px;
  left: -80px;
  transform: rotate(60deg);
  background: rgb(137, 130, 255);
  background: linear-gradient(
    60deg,
    rgba(137, 130, 255, 1) 20%,
    rgba(92, 92, 237, 1) 100%
  );
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  font-size: 30px;
  
`;

function AccountBox(props) {
  return (
    <BoxContainer>
      <TopContainer>
        <BackDrop />
      </TopContainer>
    </BoxContainer>
  );
}

export default AccountBox;
