/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

import { StyledIconLeft } from './styles/Sidebar';
import Sidebar from './layout/Sidebar';
import Game from './Game/Game';
import Chat from './Chat/Chat';

import './App.css';

function App(): JSX.Element {
  const [handleSidebar, setHandleSidebar] = useState(false);

  return (
    <div data-testid="app">
      {handleSidebar ? (
        <Sidebar handleSidebar={() => setHandleSidebar(!handleSidebar)} />
      ) : (
        <img
          src={`${window.location.origin}/burger-menu.png`}
          alt="burger menu icon"
          className="burger-menu"
          onClick={() => setHandleSidebar(!handleSidebar)}
        />
      )}
      <Chat />
      <Game />
    </div>
  );
}

export default App;
