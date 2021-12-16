import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import modalAction from '../redux/modal/modal.actions';
import Classroom from './Classroom/Classroom';
import Sidebar from './layout/Sidebar';
import Game from './Game/Game';
import Chat from './Chat/Chat';

import './App.css';

function App(): JSX.Element {
  const [handleSidebar, setHandleSidebar] = useState(false);
  const dispatch = useDispatch();

  return (
    <div data-testid="app">
      <button
        type="button"
        onClick={() => dispatch(modalAction.classroomModalToggle())}
      >
        modal classe
      </button>
      {handleSidebar ? (
        <Sidebar handleSidebar={() => setHandleSidebar(!handleSidebar)} />
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
      <Classroom />
      <Chat />
      <Game />
    </div>
  );
}

export default App;
