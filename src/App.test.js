import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders welcome message on home', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Welcome to our website/i);
  expect(linkElement).toBeInTheDocument();
});
