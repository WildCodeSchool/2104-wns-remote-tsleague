import React from 'react';
import { IonPhaser } from '@ion-phaser/react';
import { useSelector } from 'react-redux';
import config from '../../phaser/config ';
import { State } from '../../redux/root-reducer';
import socket from '../../socket';

function Game(): JSX.Element {
  const game = config;
  const initialize = true;
  const userData = useSelector((state: State) => state.user.userData);

  socket.connect();

  if (userData.id !== '') {
    const classroomId = userData.classrooms[0].id;
    socket.emit('createRoom', classroomId);
  }

  return (
    <>
      <div className="game">
        <IonPhaser game={game} initialize={initialize} />
      </div>
    </>
  );
}

export default Game;
