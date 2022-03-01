import React from 'react';
import Card from '../../components/Card';
import { useFavorites } from '../../context/favorites';

import * as S from './styles';

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <S.Wrapper>
      <S.Container>
        <S.HeaderContainer>
          <h1>Favorites Characters</h1>
        </S.HeaderContainer>
        <S.CardsContainer>
          {favorites.map((character) => (
            <Card content={character} key={character.id} />
          ))}
        </S.CardsContainer>
      </S.Container>
    </S.Wrapper>
  );
};
export default Favorites;
