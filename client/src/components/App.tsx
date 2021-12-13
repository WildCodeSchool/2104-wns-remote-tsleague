import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import './App.css';

import modalAction from '../redux/modal/modal.actions';
import { StyledIconLeft } from './styles/Sidebar';
import Sidebar from './layout/Sidebar';
import Game from './Game/Game';
import Classroom from './Classroom/Classroom';

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
        <div>
          <StyledIconLeft
            data-testid="sidebar-icon-left"
            onClick={() => setHandleSidebar(!handleSidebar)}
          />
        </div>
      )}
      <Classroom />
      <Game />
    </div>
  );
}

export default App;
