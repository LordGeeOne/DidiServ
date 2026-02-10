import { render, screen } from '@testing-library/react';
import App from './App';

test('renders dashboard', () => {
  render(<App />);
  const headingElement = screen.getByText(/DIDISERV Dashboard/i);
  expect(headingElement).toBeInTheDocument();
});
