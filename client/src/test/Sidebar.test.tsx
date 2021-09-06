import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Sidebar from '../components/Sidebar';
import '@testing-library/jest-dom/extend-expect';

import userData from '../mocks/user';

const handleSidebar = jest.fn();

test('should have a Sidebar', async () => {
  render(<Sidebar handleSidebar={handleSidebar} />);
  await waitFor(() => screen.getByTestId('sidebar-title'));
  expect(screen.queryByTestId('sidebar-title')).toHaveTextContent('PIXELEARN');
});

test('Sidebar should display user', async () => {
  render(<Sidebar handleSidebar={handleSidebar} />);
  expect(
    screen.queryByTestId('sidebar-user-picture').getAttribute('src')
  ).toEqual(userData.picture);
  expect(screen.queryByTestId('sidebar-user-name')).toHaveTextContent(
    `${userData.firstName} ${userData.lastName}`
  );
  expect(screen.queryByTestId('sidebar-user-classroom')).toHaveTextContent(
    `${userData.classroom}`
  );
});
