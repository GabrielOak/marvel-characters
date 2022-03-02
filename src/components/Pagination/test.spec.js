import React from 'react';
import { render, screen } from '@testing-library/react';
import Pagination from '.';

describe('<Pagination />', () => {
  it('should render the pagination component', () => {
    render(<Pagination page={1} isPrevBttnDis={false} isNextBttnDis={false} />);

    const prevButton = screen.getByRole('button', { name: /previous button/i });
    const nextButton = screen.getByRole('button', { name: /next button/i });

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
    expect(screen.getByText(/1/i)).toBeInTheDocument();

    expect(prevButton).not.toBeDisabled();
    expect(nextButton).not.toBeDisabled();
  });

  it('should render the pagination component with disabled buttons', () => {
    render(<Pagination page={22} isPrevBttnDis={true} isNextBttnDis={true} />);

    const prevButton = screen.getByRole('button', { name: /previous button/i });
    const nextButton = screen.getByRole('button', { name: /next button/i });

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
    expect(screen.getByText(/22/i)).toBeInTheDocument();

    expect(prevButton).toBeDisabled();
    expect(nextButton).toBeDisabled();
  });
});
