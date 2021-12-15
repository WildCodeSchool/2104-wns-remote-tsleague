import React from 'react';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { State } from '../../redux/root-reducer';

import socket from '../../socket';

import {
  StyledSidebar,
  StyledSidebarNotificationFeed,
  StyledIconRight,
} from '../styles/Sidebar';
import Button from '../common/Button';

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

function Sidebar({
  handleSidebar,
}: {
  handleSidebar: () => void;
}): JSX.Element {
  const userData = useSelector((state: State) => state.user.userData);
  const history = useHistory();

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
          <h2 data-testid="sidebar-title">PixeLearn</h2>
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/12-peoples-avatars/avatar.png"
            alt="profile"
            data-testid="sidebar-user-picture"
          />
          <h3 data-testid="sidebar-user-name">
            {userData.firstname} {userData.lastname}
          </h3>
          <h3 data-testid="sidebar-user-classroom">
            {userData.classrooms[0].id}
          </h3>
        </div>
        <StyledSidebarNotificationFeed>
          <div className="notification-feed" />
        </StyledSidebarNotificationFeed>
        <Button
          data-testid="sidebar-btn-disconnection"
          text="Déconnexion"
          handleClick={async () => {
            Cookies.remove('token');
            socket.disconnect();
            history.push('/');
          }}
        />
      </div>
    </StyledSidebar>
  );
}

export default Sidebar;
