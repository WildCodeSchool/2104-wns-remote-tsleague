import React, { useState } from 'react';

import Classroom from './Classroom/Classroom';
import Sidebar from './layout/Sidebar';
import Game from './Game/Game';
import Chat from './Chat/Chat';

import './App.css';

function App(): JSX.Element {
  const [handleSidebar, setHandleSidebar] = useState(false);
  const [handleClassroom, setHandleClassroom] = useState(false);

  return (
    <div data-testid="app">
      {handleSidebar ? (
        <Sidebar
          handleSidebar={() => setHandleSidebar(!handleSidebar)}
          handleClassroom={() => setHandleClassroom(!handleClassroom)}
        />
      ) : (
        <img
          src={`${window.location.origin}/burger-menu.png`}
          alt="burger menu icon"
          className="burger-menu"
          onClick={() => setHandleSidebar(!handleSidebar)}
          onKeyPress={() => {}}
          role="presentation"
        />
      )}
      {handleClassroom ? <Classroom /> : ''}
      <Chat />
      <Game />
    </div>
  );
}

export default App;
