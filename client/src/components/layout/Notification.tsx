import React from 'react';
import { StyledNotificationItem } from '../styles/Sidebar';

function Notification({ message }: { message: string }): JSX.Element {
  return (
    <StyledNotificationItem>
      <p data-testid="notifiaction-message">{message}</p>
    </StyledNotificationItem>
  );
}
export default Notification;
