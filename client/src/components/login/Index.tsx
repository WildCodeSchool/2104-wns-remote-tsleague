import React from 'react';
import styled from 'styled-components';
import LoginForm from './LoginForm';

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
  padding-bottom: 8em;
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
  margin-top: 10px;
`;

const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 11px;
  z-index: 10;
  margin: 0;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

function AccountBox(): JSX.Element {
  return (
    <BoxContainer>
      <TopContainer>
        <BackDrop />
        <HeaderContainer>
          <HeaderText>Bienvenue sur PixeLearn</HeaderText>
          <SmallText>Connectez-vous pour continuer!</SmallText>
        </HeaderContainer>
      </TopContainer>
      <InnerContainer>
        <LoginForm />
      </InnerContainer>
    </BoxContainer>
  );
}

export default AccountBox;
