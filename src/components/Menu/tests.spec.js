import React from 'react';
import { render, screen } from '@testing-library/react';
import Menu from '.';

describe('<Menu />', () => {
  it('should render menu', () => {
    render(<Menu />);

    expect(screen.getByRole('img', { name: /marvel/i })).toBeInTheDocument();
    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });
});
