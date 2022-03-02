import React from 'react';
import { render, screen } from '@testing-library/react';
import NoDataFound from '.';

describe('<NoDataFound />', () => {
  it('should render the no data found indicator', () => {
    render(<NoDataFound />);

    expect(
      screen.getByRole('img', { name: /no data found/i })
    ).toBeInTheDocument();
  });

  it('should render the no data found indicator whith a child', () => {
    render(
      <NoDataFound>
        <h2>Ops! No data found</h2>
      </NoDataFound>
    );

    expect(
      screen.getByRole('img', { name: /no data found/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /ops! no data found/i })
    ).toBeInTheDocument();
  });
});
