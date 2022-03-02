import React from 'react';
import { render, screen } from '@testing-library/react';
import LoadingIndicator from '.';

describe('<LoadingIndicator />', () => {
  it('should render the loading indicator', () => {
    render(<LoadingIndicator />);

    expect(screen.getByRole('img', { name: /loading/i })).toBeInTheDocument();
  });
});
