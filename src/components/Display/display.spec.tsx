import { render } from '@testing-library/react';
import { Display } from './display';

describe('Display component', () => {
  test('renders correctly', () => {
    const { getByDisplayValue } = render(<Display value="123" />);
    const inputElement = getByDisplayValue('123');
    
    expect(inputElement).toBeInTheDocument();
  });
});
