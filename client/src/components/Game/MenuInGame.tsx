import React from 'react';
import { connect } from 'react-redux';

import { StyledMenu, StyledMenuItem } from '../styles/MenuInGame';

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
    // TODO: fix la propriété style, et mettre le style dans le styled component
    <StyledMenu
      style={{
        position: 'absolute',
        top: `${studentGamePosition.positionY}px`,
        transform: 'translate(5%, -110%)',
        left: `${studentGamePosition.positionX}px`,
      }}
    >
      <StyledMenuItem>Agenda</StyledMenuItem>
      <StyledMenuItem>Classe</StyledMenuItem>
      <StyledMenuItem>Mes documents</StyledMenuItem>
      <StyledMenuItem>Mes notes</StyledMenuItem>
      <StyledMenuItem>Mes videos</StyledMenuItem>
      <StyledMenuItem>Mes ressources</StyledMenuItem>
      <StyledMenuItem>Paramètres</StyledMenuItem>
      <StyledMenuItem>Déconnecter</StyledMenuItem>
    </StyledMenu>
  );
}

const mapStateToProps = (state: State) => ({
  studentGamePosition: state.gameToggle.studentGamePosition,
});

export default connect(mapStateToProps)(MenuInGame);
