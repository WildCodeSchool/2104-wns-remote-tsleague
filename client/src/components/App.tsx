import React from 'react';
import Sidebar from './Sidebar';
import MenuInGame from './MenuInGame';

function App(): JSX.Element {
  return (
    <div className="App">
      <Sidebar />
      <div>
        <MenuInGame />
      </div>
    </div>
  );
}

export default App;
