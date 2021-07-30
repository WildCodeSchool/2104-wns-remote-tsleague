import React, { useState } from 'react';

import './App.css';

import { StyledIconLeft } from './styles/Sidebar';
import Sidebar from './layout/Sidebar';
import Game from './Game/Game';
import Classroom from './Classroom/Classroom';

function App(): JSX.Element {
  const [handleSidebar, setHandleSidebar] = useState(false);
  const [handleClassroom] = useState(true);

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
      {handleClassroom ? <Classroom /> : ''}
      <Game />
    </div>
  );
}

export default App;
