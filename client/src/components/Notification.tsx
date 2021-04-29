import React from 'react';
import { Card, Elevation } from '@blueprintjs/core';

function Notification() {
  return (
    <Card interactive elevation={Elevation.TWO}>
      <p>Card content</p>
    </Card>
  );
}
export default Notification;
