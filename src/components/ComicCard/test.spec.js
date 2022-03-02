import React from 'react';
import { render, screen } from '@testing-library/react';
import ComicCard from '.';

import { comic } from './mock/comics';

describe('<ComicCard />', () => {
  it('should render comic card', () => {
    render(<ComicCard comic={comic} />);

    expect(
      screen.getByRole('heading', { name: /incredible hulks/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('img', { name: /incredible hulks/i })
    ).toBeInTheDocument();

    expect(screen.getByText(/marko djurdjevic/i)).toBeInTheDocument();

    expect(screen.getByText(/greg pak/i)).toBeInTheDocument();

    expect(screen.getByText(/characters: hulk/i)).toBeInTheDocument();
  });
});
