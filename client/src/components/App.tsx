import React from 'react';
import { connect } from 'react-redux';
import { IonPhaser } from '@ion-phaser/react';

import Sidebar from './Sidebar';
import MenuInGame from './MenuInGame';
import config from '../phaser/config ';

import './App.css';
import AccountBox from './login/Index';

type PropsType = {
  studentModalProps: boolean;
};
type State = {
  gameToggle: {
    studentModal: boolean;
  };
};

function App({ studentModalProps }: PropsType): JSX.Element {
  const game = config;
  const initialize = true;

  return (
    <>
      <Sidebar />
      <div className="game">
        <IonPhaser game={game} initialize={initialize} />
        {studentModalProps && <MenuInGame />}
      </div>
    </>
  );
}

const mapStateToProps = (state: State) => ({
  studentModalProps: state.gameToggle.studentModal,
});

export default connect(mapStateToProps)(App);
