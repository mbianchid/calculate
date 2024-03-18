import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { Calculator } from './calculator';

describe('Calculator component', () => {
  test('renders correctly', () => {
    const { getByText } = render(<Calculator />);
    const buttonElement = getByText('C');

    expect(buttonElement).toBeInTheDocument();
  });

  test('handles button clicks correctly', () => {
    const { getByText, getByDisplayValue } = render(<Calculator />);
    fireEvent.click(getByText('1'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    
    expect(getByDisplayValue('3')).toBeInTheDocument();
  });
});
