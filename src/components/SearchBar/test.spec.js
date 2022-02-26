import React from 'react';
import { render, screen } from '@testing-library/react';
import SeachBar from '.';

describe('<SeachBar />', () => {
  it('should render the serch bar', () => {
    render(<SeachBar />);

    expect(screen.getByTestId(/search-input/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/pesquisar/i)).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });
});
