// REACT
import React from 'react';
// STYLE
import './App.css';
// PHASER
import { IonPhaser } from '@ion-phaser/react';
import config from '../phaser/config ';

function App(): JSX.Element {
  const game = config;
  const initialize = true;

  return (
    <div className="App">
      <IonPhaser game={game} initialize={initialize} />
    </div>
  );
}

export default App;
