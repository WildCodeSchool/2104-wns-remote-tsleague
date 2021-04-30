import React from 'react';
import { connect } from 'react-redux';
import { IonPhaser } from '@ion-phaser/react';

import Sidebar from './Sidebar';
import config from '../phaser/config ';
import MenuInGame from './MenuInGame';

import './App.css';

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
    <div className="App">
      {studentModalProps && <MenuInGame />}
      <IonPhaser game={game} initialize={initialize} />
      <Sidebar />
      <div>
        <MenuInGame />
      </div>
    </div>
  );
}

const mapStateToProps = (state: State) => ({
  studentModalProps: state.gameToggle.studentModal,
});

export default connect(mapStateToProps)(App);
