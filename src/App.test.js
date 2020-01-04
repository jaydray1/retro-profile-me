import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Jon-Michael Dreher in header', () => {
  const { getByText } = render(<App />);
  const header = getByText(/Jon-Mchael Dreher/i);
  expect(header).toBeInTheDocument();
});
