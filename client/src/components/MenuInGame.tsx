import React from 'react';
import { Classes, Icon, Menu, MenuDivider, MenuItem } from '@blueprintjs/core';

function MenuInGame(): JSX.Element {
  return (
    <Menu
      style={{
        position: 'absolute',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        left: '50%',
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

export default MenuInGame;
