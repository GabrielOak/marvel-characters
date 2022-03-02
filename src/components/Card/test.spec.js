import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '.';
import { BrowserRouter } from 'react-router-dom';
import { FavoritesProvider } from '../../context/favorites';

const character = {
  name: 'Spider-man',
  thumbnail: {
    path: 'https://i.annihil.us/u/prod/marvel/i/mg/e/03/5317713c9e746',
    extension: 'jpg',
  },
};

describe('<Card />', () => {
  it('should render the card', () => {
    render(
      <FavoritesProvider>
        <Card content={character} />
      </FavoritesProvider>,
      { wrapper: BrowserRouter }
    );

    expect(
      screen.getByRole('heading', { name: /spider-man/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('img', { name: /spider-man/i })
    ).toBeInTheDocument();
  });
});
