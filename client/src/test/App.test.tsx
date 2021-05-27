import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders learn react link', () => {
  render(<App />);
  expect(screen.queryByTestId('app')).not.toBeNull();
  // expect(screen.queryByTestId('app')).toBeInstanceOf(HTMLDivElement);
});
