import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';

test('shows error when email is invalid', () => {
  render(<Login />);
  fireEvent.change(screen.getByTestId('email-input'), {
    target: { value: 'bad-email' }
  });
  fireEvent.click(screen.getByText('Login'));
  expect(screen.getByText('Invalid email')).toBeInTheDocument();
});