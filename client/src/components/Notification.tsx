import React from 'react';
import { Card, Elevation } from '@blueprintjs/core';

function Notification({ message }: { message: string }) {
  return (
    <Card interactive elevation={Elevation.TWO}>
      <p>{message}</p>
    </Card>
  );
}
export default Notification;
