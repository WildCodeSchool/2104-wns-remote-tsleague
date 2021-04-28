// REACT
import React from 'react';
// PHASER
import { IonPhaser } from '@ion-phaser/react';
import PixeLearnScene from '../phaser/pixeLearnScene';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
  scene: [PixeLearnScene],
};

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
