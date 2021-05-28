import React from 'react';
import Notification from './Notification';

import {
  StyledSidebar,
  StyledSidebarNotificationFeed,
  StyledIconRight,
} from './styles/Sidebar';
import Button from './common/Button';

export type NotificationsProps = {
  message: string;
};

export type User = {
  firstName: string;
  lastName: string;
  classroom: string;
  picture: string;
};

function Sidebar({ handleSidebar }: { handleSidebar: () => void }) {
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
    { message: 'nouveau fichier' },
    { message: 'nouveau fichier' },
    { message: 'nouveau fichier' },
    { message: 'nouveau dossier' },
    { message: 'nouveau dossier' },
    { message: 'nouveau fichier' },
  ];

  return (
    <StyledSidebar>
      <div className="sidebar-container">
        <div className="sidebar-btn">
          <StyledIconRight
            data-testid="sidebar-icon-right"
            onClick={handleSidebar}
          />
        </div>
        <div>
          <h2>PIXELEARN</h2>
          <img src={user.picture} alt="profile" />
          <h3>
            {user.firstName} {user.lastName}
          </h3>
          <h3>{user.classroom}</h3>
        </div>
        <StyledSidebarNotificationFeed>
          <h3>FLUX DE NOTIFICATION</h3>
          <div className="notification-feed">
            <div>
              {notifications.map((Element: NotificationsProps) => (
                <Notification message={Element.message} />
              ))}
            </div>
          </div>
        </StyledSidebarNotificationFeed>
        <Button
          text="Déconnexion"
          handleClick={() => console.log('Déconnexion')}
        />
      </div>
    </StyledSidebar>
  );
}

export default Sidebar;
