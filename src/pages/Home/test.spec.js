import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '.';

describe('<Home />', () => {
  it('should render home', () => {
    render(<Home />);
    const homeHeader = screen.getByText(/home/i);
    expect(homeHeader).toBeInTheDocument();
  });
});
