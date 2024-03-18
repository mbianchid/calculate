// src/components/Button.spec.tsx
import { render, fireEvent } from '@testing-library/react';
import { Button } from './button';

describe('Button component', () => {
  test('renders correctly', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button value="7" onClick={onClick} />);
    const buttonElement = getByText('7');

    expect(buttonElement).toBeInTheDocument();
  });

  test('onClick event works correctly', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button value="7" onClick={onClick} />);
    const buttonElement = getByText('7');
    fireEvent.click(buttonElement);
    
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
