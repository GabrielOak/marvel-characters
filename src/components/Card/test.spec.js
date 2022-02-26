import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '.';

const props = {
  title: 'Spider-man',
  img: 'https://i.annihil.us/u/prod/marvel/i/mg/e/03/5317713c9e746.jpg',
};

describe('<Card />', () => {
  it('should render the card', () => {
    render(<Card {...props} />);

    expect(
      screen.getByRole('heading', { name: /spider-man/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('img', { name: /spider-man/i })
    ).toBeInTheDocument();
  });
});
