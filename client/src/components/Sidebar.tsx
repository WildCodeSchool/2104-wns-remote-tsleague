import React from 'react';
import Notification from './Notification';

import {
  StyledSidebar,
  StyledSidebarNotificationFeed,
  StyledIconRight,
} from './styles/Sidebar';
import Button from './common/Button';

import userData from '../mocks/user';
import notificationsData from '../mocks/notifications';

export type NotificationsProps = {
  id: string;
  message: string;
};

export type User = {
  firstName: string;
  lastName: string;
  classroom: string;
  picture: string;
};

function Sidebar({ handleSidebar }: { handleSidebar: () => void }) {
  const user: User = userData;
  const notifications: NotificationsProps[] = notificationsData;

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
          <h2 data-testid="sidebar-title">PIXELEARN</h2>
          <img
            src={user.picture}
            alt="profile"
            data-testid="sidebar-user-picture"
          />
          <h3 data-testid="sidebar-user-name">
            {user.firstName} {user.lastName}
          </h3>
          <h3 data-testid="sidebar-user-classroom">{user.classroom}</h3>
        </div>
        <StyledSidebarNotificationFeed>
          <h3>FLUX DE NOTIFICATION</h3>
          <div className="notification-feed">
            <div>
              {notifications.map((Element: NotificationsProps) => (
                <Notification key={Element.id} message={Element.message} />
              ))}
            </div>
          </div>
        </StyledSidebarNotificationFeed>
        <Button
          data-testid="sidebar-btn-disconnection"
          text="Déconnexion"
          handleClick={() => console.log('Déconnexion')}
        />
      </div>
    </StyledSidebar>
  );
}

export default Sidebar;
