import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Notification from '../components/Notification';
import '@testing-library/jest-dom/extend-expect';

test('should have a Notification', async () => {
  render(<Notification message={'test'} />);
  await waitFor(() => screen.getByTestId('notifiaction-message'));
  expect(screen.queryByTestId('notifiaction-message')).toHaveTextContent(
    'test'
  );
});
