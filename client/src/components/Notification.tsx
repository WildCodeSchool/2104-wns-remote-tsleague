import React from 'react';
import { NotificationItem } from './styles/Sidebar';

function Notification({ message }: { message: string }) {
  return (
    <NotificationItem>
      <p>{message}</p>
    </NotificationItem>
  );
}
export default Notification;
