import React, { useEffect } from 'react';
import { IonPhaser } from '@ion-phaser/react';
import { useDispatch, useSelector } from 'react-redux';
import config from '../../phaser/config ';
import { State } from '../../redux/root-reducer';
import socket from '../../socket';

function Game(): JSX.Element {
  const game = config;
  const initialize = true;
  const userData = useSelector((state: State) => state.user.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    socket.connect();
    let socketId: string;
    const classroomId = userData.classrooms[0].id;

    socket.emit('createRoom', { classroomId, userData });

    socket.on('socketId', (arg): void => {
      socketId = arg;
      console.log(`new mate connected with id ${socketId}`);
    });

    socket.on('roomJoined', (arg: string) =>
      console.log(`you joined room ${arg}`)
    );

    socket.on('currentPlayers', (payload) => {
      dispatch({
        type: 'CLASSMATES_GAME_POSITION',
        socketId,
        payload,
      });
    });

    socket.on('newPlayers', (payload) => {
      dispatch({
        type: 'CLASSMATES_GAME_POSITION',
        socketId,
        payload,
      });
    });

    socket.on('logout', (arg) => {
      dispatch({
        type: 'CLASSMATE_LOGOUT',
        socketId: arg,
      });
    });
  });

  return (
    <>
      <div className="game">
        <IonPhaser game={game} initialize={initialize} />
      </div>
    </>
  );
}

export default Game;
