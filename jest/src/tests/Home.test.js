import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

test('Home_test_1', () => {
  render(<Home />);
  const linkElement = screen.getByText(/SKCT/i);
  expect(linkElement).toBeInTheDocument();
});

test('Home_test_2', () => {
  render(<Home />);
  const linkElement = screen.getByText(/React_IRC/i);
  expect(linkElement).toBeInTheDocument();
});
