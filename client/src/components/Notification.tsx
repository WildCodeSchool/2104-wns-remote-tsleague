import React from 'react';
import { Card, Elevation } from '@blueprintjs/core';

function Notification({ message }: { message: string }) {
  return (
    <Card
      interactive
      elevation={Elevation.TWO}
      style={{
        marginBottom: '10px',
        borderRadius: '10px',
        backgroundColor: '#137CBD',
        color: 'white',
      }}
    >
      <p>{message}</p>
    </Card>
  );
}
export default Notification;
