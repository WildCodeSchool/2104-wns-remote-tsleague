import React, { useState } from 'react';
import { Drawer, Position, Card, Button, Icon } from '@blueprintjs/core';
import Notification from './Notification';

export type NotificationsProps = {
  message: string;
};

export type User = {
  firstName: string;
  lastName: string;
  classroom: string;
  picture: string;
};

function Sidebar() {
  const [handleSidebar, setHandleSidebar] = useState(false);

  const user: User = {
    firstName: 'Jake',
    lastName: 'Mike',
    classroom: 'WnS - Remote',
    picture: 'https://randomuser.me/api/portraits/men/80.jpg',
  };

  const notifications: NotificationsProps[] = [
    { message: 'nouveau dossier' },
    { message: 'nouveau dossier' },
    { message: 'nouveau fichier' },
    { message: 'nouveau dossier' },
    { message: 'nouveau dossier' },
    { message: 'nouveau fichier' },
    { message: 'nouveau dossier' },
    { message: 'nouveau dossier' },
    { message: 'nouveau fichier' },
  ];

  return (
    <div>
      <Icon
        icon="caret-right"
        iconSize={32}
        onClick={() => setHandleSidebar(!handleSidebar)}
      />

      {handleSidebar && (
        <Drawer isOpen size={Drawer.SIZE_SMALL} position={Position.LEFT}>
          <div
            style={{
              height: '100vh',
              textAlign: 'center',
              backgroundColor: '#137CBD',
              color: 'white',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'end' }}>
              <Icon
                icon="caret-left"
                iconSize={32}
                onClick={() => setHandleSidebar(!handleSidebar)}
              />
            </div>
            <div>
              <h2>PIXELEARN</h2>
              <img
                src={user.picture}
                alt="profile"
                style={{ width: '50%', height: '45%', borderRadius: '50%' }}
              />
              <h3>
                {user.firstName} {user.lastName}{' '}
              </h3>
              <h3>{user.classroom}</h3>
            </div>
            <Card
              style={{
                backgroundColor: 'lightblue',
                width: '100%',
              }}
            >
              <h3>FLUX DE NOTIFICATION</h3>
              <div style={{ height: '45vh', color: 'black', overflow: 'auto' }}>
                {notifications.map((Element: NotificationsProps) => (
                  <Notification message={Element.message} />
                ))}
              </div>
            </Card>
            <Button
              type="button"
              fill
              style={{
                height: '7vh',
              }}
            >
              Déconnexion
            </Button>
          </div>
        </Drawer>
      )}
    </div>
  );
}

export default Sidebar;
