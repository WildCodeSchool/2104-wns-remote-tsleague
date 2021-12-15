import React, { useState } from 'react';

import './App.css';

import { StyledIconLeft } from './styles/Sidebar';
import Sidebar from './layout/Sidebar';
import Game from './Game/Game';
import Chat from './Chat/Chat';

function App(): JSX.Element {
  const [handleSidebar, setHandleSidebar] = useState(false);

  return (
    <div data-testid="app">
      {handleSidebar ? (
        <Sidebar handleSidebar={() => setHandleSidebar(!handleSidebar)} />
      ) : (
        <StyledIconLeft
          data-testid="sidebar-icon-left"
          onClick={() => setHandleSidebar(!handleSidebar)}
        />
      )}
      <Chat />
      <Game />
    </div>
  );
}

export default App;
