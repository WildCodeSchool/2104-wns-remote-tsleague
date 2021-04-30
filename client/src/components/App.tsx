// REACT
import React from 'react';
// REDUX
import { connect } from 'react-redux';
// STYLE
import './App.css';
// PHASER
import { IonPhaser } from '@ion-phaser/react';
import MenuInGame from './MenuInGame';
import config from '../phaser/config ';

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
    </div>
  );
}

const mapStateToProps = (state: State) => ({
  studentModalProps: state.gameToggle.studentModal,
});

export default connect(mapStateToProps)(App);
