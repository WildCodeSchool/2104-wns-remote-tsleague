import React from 'react';
import { Icon, Menu, MenuDivider, MenuItem } from '@blueprintjs/core';
import { connect } from 'react-redux';

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
      <MenuDivider />
      <MenuItem icon="timeline-events" text="Agenda" />
      <MenuItem icon="learning" text="Classe" />
      <MenuItem icon="folder-open" text="Mes documents">
        <MenuItem icon="annotation" text="Mes notes" />
        <MenuItem icon="video" text="Mes videos" />
        <MenuItem icon="link" text="Mes ressources" />
      </MenuItem>
      <MenuDivider />
      <MenuItem
        icon="cog"
        labelElement={<Icon icon="share" />}
        text="Paramètres"
      />
      <MenuItem icon="log-out" text="Déconnecter" />
    </Menu>
  );
}

const mapStateToProps = (state: State) => ({
  studentGamePosition: state.gameToggle.studentGamePosition,
});

export default connect(mapStateToProps)(MenuInGame);
