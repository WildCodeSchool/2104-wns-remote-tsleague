import React from 'react';
import { connect } from 'react-redux';
import { IonPhaser } from '@ion-phaser/react';

import MenuInGame from './MenuInGame';
import config from '../../phaser/config ';

type PropsType = {
  studentModalProps: boolean;
};
type State = {
  gameToggle: {
    studentModal: boolean;
  };
};

function Game({ studentModalProps }: PropsType): JSX.Element {
  const game = config;
  const initialize = true;

  return (
    <>
      <div className="game">
        <IonPhaser game={game} initialize={initialize} />
      </div>
      {studentModalProps && <MenuInGame />}
    </>
  );
}

const mapStateToProps = (state: State) => ({
  studentModalProps: state.gameToggle.studentModal,
});

export default connect(mapStateToProps)(Game);
