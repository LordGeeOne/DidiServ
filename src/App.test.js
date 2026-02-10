import { render, screen } from '@testing-library/react';
import App from './App';

test('renders dashboard heading', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading', { name: /dashboard/i });
  expect(headingElement).toBeInTheDocument();
});

test('renders welcome message', () => {
  render(<App />);
  const welcomeElement = screen.getByText(/welcome to your new workspace/i);
  expect(welcomeElement).toBeInTheDocument();
});
