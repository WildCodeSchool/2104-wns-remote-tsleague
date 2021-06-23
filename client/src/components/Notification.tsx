import React from 'react';
import { StyledNotificationItem } from './styles/Sidebar';

function Notification({ message }: { message: string }) {
  return (
    <StyledNotificationItem>
      <p data-testid="notifiaction-message">{message}</p>
    </StyledNotificationItem>
  );
}
export default Notification;
