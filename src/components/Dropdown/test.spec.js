import React from 'react';
import { render, screen } from '@testing-library/react';
import Dropdown from '.';

const options = [
  { name: 'Option 1', value: 'value 1' },
  { name: 'Option 2', value: 'value 2' },
  { name: 'Option 3', value: 'value 3' },
];

describe('<Dropdown />', () => {
  it('should render the dropdown', () => {
    render(<Dropdown options={options} />);

    const dropdown = screen.getByTestId(/select-input/i);

    expect(dropdown).toBeInTheDocument();
    options.forEach((option) => {
      expect(
        screen.getByRole('option', { name: option.name })
      ).toBeInTheDocument();
    });
  });
});
