import React from 'react';
import { render, screen } from '@testing-library/react';
import Dropdown from '.';

const options = ['Option 1', 'Option 2', 'Option 3'];

describe('<Dropdown />', () => {
  it('should render the dropdown', () => {
    render(<Dropdown options={options} />);

    const dropdown = screen.getByTestId(/select-input/i);

    expect(dropdown).toBeInTheDocument();
    options.forEach((option) => {
      expect(screen.getByRole('option', { name: option })).toBeInTheDocument();
    });
  });
});
