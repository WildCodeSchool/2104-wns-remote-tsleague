import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../components/App';
import { Provider } from 'react-redux';
import store from '../redux/store';

test('renders learn react link', async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  await waitFor(() => screen.getByTestId('app'));
  expect(screen.queryByTestId('app')).not.toBeNull();
  expect(screen.queryByTestId('app')).toBeInstanceOf(HTMLDivElement);
});
