import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '.';

import { StarOutline } from '@styled-icons/material/StarOutline';

describe('<Button />', () => {
  it('should render a button', () => {
    render(<Button title="test" />);

    expect(screen.getByRole('button', { name: /test/i })).toBeInTheDocument();
    expect(screen.getByText(/test/i)).toBeInTheDocument();
  });

  it('should render a button with icon', () => {
    render(
      <Button
        title="Button with icon"
        icon={<StarOutline data-testid="icon" />}
      />
    );

    expect(
      screen.getByRole('button', { name: /button with icon/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/button with icon/i)).toBeInTheDocument();
    expect(screen.getByText(/button with icon/i)).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });
});
