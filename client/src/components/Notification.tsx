import React from 'react';
import { StyledNotificationItem } from './styles/Sidebar';

function Notification({ message }: { message: string }) {
  return (
    <StyledNotificationItem>
      <p>{message}</p>
    </StyledNotificationItem>
  );
}
export default Notification;
