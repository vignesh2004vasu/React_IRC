import { render, screen } from '@testing-library/react';
import About from '../pages/About';

test('About_test_1', () => {
  render(<About />);
  const linkElement = screen.getByText(/VIGNESH/i);
  expect(linkElement).toBeInTheDocument();
});

test('About_test_2', () => {
  render(<About />);
  const linkElement = screen.getByText(/v@gmail.com/i);
  expect(linkElement).toBeInTheDocument();
});
