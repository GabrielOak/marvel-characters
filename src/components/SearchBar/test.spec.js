import React from 'react';
import { render, screen } from '@testing-library/react';
import SeachBar from '.';

describe('<SeachBar />', () => {
  it('should render the serch bar', () => {
    render(<SeachBar />);

    expect(screen.getByTestId(/search-input/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });
});
