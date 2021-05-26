import React, { useState } from 'react';
import { connect } from 'react-redux';
import { IonPhaser } from '@ion-phaser/react';

import { IconLeft } from './styles/Sidebar';

import Sidebar from './Sidebar';
import MenuInGame from './MenuInGame';
import config from '../phaser/config ';

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
  const [handleSidebar, setHandleSidebar] = useState(false);

  const game = config;
  const initialize = true;

  return (
    <>
      {handleSidebar ? (
        <Sidebar handleSidebar={() => setHandleSidebar(!handleSidebar)} />
      ) : (
        <div>
          <IconLeft onClick={() => setHandleSidebar(!handleSidebar)} />
        </div>
      )}
      <div className="game">
        <IonPhaser game={game} initialize={initialize} />
      </div>
      {studentModalProps && <MenuInGame />}
    </>
  );
}

const mapStateToProps = (state: State) => ({
  studentModalProps: state.gameToggle.studentModal,
});

export default connect(mapStateToProps)(App);
