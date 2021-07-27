import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../components/App';
import { Provider } from 'react-redux';
import store from '../redux/store';

test('should renders react app', async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  await waitFor(() => screen.getByTestId('app'));
  expect(screen.queryByTestId('app')).toBeInstanceOf(HTMLDivElement);
});
