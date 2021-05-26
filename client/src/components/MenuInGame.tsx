import React from 'react';
import { connect } from 'react-redux';

import { Menu, MenuItem } from './styles/MenuInGame';

type PropsType = {
  studentGamePosition: {
    positionX: string;
    positionY: string;
  };
};
type State = {
  gameToggle: PropsType;
};

function MenuInGame({ studentGamePosition }: PropsType): JSX.Element {
  return (
    <Menu
      style={{
        position: 'absolute',
        top: `${studentGamePosition.positionY}px`,
        transform: 'translate(5%, -110%)',
        left: `${studentGamePosition.positionX}px`,
      }}
    >
      <MenuItem>Agenda</MenuItem>
      <MenuItem>Classe</MenuItem>
      <MenuItem>Mes documents</MenuItem>
      <MenuItem>Mes notes</MenuItem>
      <MenuItem>Mes videos</MenuItem>
      <MenuItem>Mes ressources</MenuItem>
      <MenuItem>Paramètres</MenuItem>
      <MenuItem>Déconnecter</MenuItem>
    </Menu>
  );
}

const mapStateToProps = (state: State) => ({
  studentGamePosition: state.gameToggle.studentGamePosition,
});

export default connect(mapStateToProps)(MenuInGame);
