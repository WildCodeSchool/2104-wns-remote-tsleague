import React from 'react';
import { Drawer } from '@blueprintjs/core';
import Notification from './Notification';

function Sidebar() {
  const user = {
    firstName: 'Jake',
    lastName: 'Mike',
    classroom: 'WnS - Remote',
    picture: 'https://randomuser.me/api/portraits/men/80.jpg',
  };

  // const notifications = [
  //   { message: 'nouveau dossier' },
  //   { message: 'nouveau dossier' },
  //   { message: 'nouveau fichier' },
  // ];
  return (
    <Drawer isOpen size={Drawer.SIZE_SMALL}>
      <div style={{ height: '100vh', backgroundColor: 'lightblue' }}>
        <div>
          <h3>PIXELEARN</h3>
          <img src={user.picture} alt="profile" />
          <h2>
            {user.firstName} {user.lastName}{' '}
          </h2>
          <h2>{user.classroom}</h2>
        </div>
        <div>
          <h2>FLUX</h2>
          <div>
            <Notification />
            <Notification />
            <Notification />
          </div>
        </div>
        <button type="button">Déconnexion</button>
      </div>
    </Drawer>
  );
}

export default Sidebar;
