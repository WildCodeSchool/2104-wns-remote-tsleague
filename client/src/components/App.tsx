import React, { useState } from 'react';
import { connect } from 'react-redux';
import { IonPhaser } from '@ion-phaser/react';

import { StyledIconLeft } from './styles/Sidebar';

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
    <div data-testid="app">
      {handleSidebar ? (
        <Sidebar handleSidebar={() => setHandleSidebar(!handleSidebar)} />
      ) : (
        <div>
          <StyledIconLeft
            data-testid="sidebar-icon-left"
            onClick={() => setHandleSidebar(!handleSidebar)}
          />
        </div>
      )}
      <div className="game">
        <IonPhaser game={game} initialize={initialize} />
      </div>
      {studentModalProps && <MenuInGame />}
    </div>
  );
}

const mapStateToProps = (state: State) => ({
  studentModalProps: state.gameToggle.studentModal,
});

export default connect(mapStateToProps)(App);
