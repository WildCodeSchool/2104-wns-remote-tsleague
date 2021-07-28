import React, { useState } from 'react';

import './App.css';

import { StyledIconLeft } from './styles/Sidebar';
import Sidebar from './layout/Sidebar';
import Game from './Game/Game';

function App(): JSX.Element {
  const [handleSidebar, setHandleSidebar] = useState(false);

  return (
    <div data-testid="app">
      {handleSidebar ? (
        <Sidebar handleSidebar={() => setHandleSidebar(!handleSidebar)} />
      ) : (
        <div>
          <StyledIconLeft onClick={() => setHandleSidebar(!handleSidebar)} />
        </div>
      )}
      <Game />
    </div>
  );
}

export default App;
