import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { IonPhaser } from '@ion-phaser/react';
import Cookies from 'js-cookie';

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
  const history = useHistory();

  if (!Cookies.get('token')) {
    history.push('/');
  }

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
