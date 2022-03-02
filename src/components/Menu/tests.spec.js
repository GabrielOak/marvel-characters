import React from 'react';
import { render, screen } from '@testing-library/react';
import Menu from '.';
import { BrowserRouter } from 'react-router-dom';

describe('<Menu />', () => {
  it('should render menu', () => {
    render(<Menu />, { wrapper: BrowserRouter });

    expect(screen.getByRole('img', { name: /marvel/i })).toBeInTheDocument();
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/favorites/i)).toBeInTheDocument();
  });
});
