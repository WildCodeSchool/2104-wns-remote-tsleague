import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Sidebar from '../components/Sidebar';
import '@testing-library/jest-dom/extend-expect';

const handleSidebar = jest.fn();

// test('has a button', async () => {
//   render(<Sidebar handleSidebar={handleSidebar} />);
//   await waitFor(() => screen.getByTestId('btn'));
//   expect(screen.queryByTestId('btn')).not.toBeNull();
//   expect(screen.queryByTestId('btn')).toBeInstanceOf(HTMLButtonElement);
// });

// test('open sidebar with handleClick', async () => {
//   render(<Sidebar handleSidebar={handleSidebar} />);
//   fireEvent.click(screen.getByTestId('sidebar-icon-left'));
//   await waitFor(() => screen.getByTestId('sidebar-icon-left'));
//   expect(handleSidebar).toHaveBeenCalledTimes(1);
//   expect(screen.getByTestId('sidebar-title')).toHaveTextContent('PIXELEARN');
// });

test('has a sidebar', async () => {
  render(<Sidebar handleSidebar={handleSidebar} />);
  await waitFor(() => screen.getByTestId('sidebar-title'));
  expect(screen.getByTestId('sidebar-title')).toHaveTextContent('PIXELEARN');
});
