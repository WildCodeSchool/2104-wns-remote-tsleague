import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Button from '../components/common/Button';
import '@testing-library/jest-dom/extend-expect';

const text = 'bouton';
const handleClick = jest.fn();

test('should have a Button', async () => {
  render(<Button text={text} handleClick={handleClick} />);
  await waitFor(() => screen.getByTestId('btn'));
  expect(screen.queryByTestId('btn')).toBeInstanceOf(HTMLButtonElement);
});

test('Button should handleClick', async () => {
  render(<Button text={text} handleClick={handleClick} />);
  fireEvent.click(screen.getByTestId('btn'));
  await waitFor(() => screen.getByTestId('btn'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
