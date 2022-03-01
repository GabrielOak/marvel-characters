import React from 'react';
import Card from '../../components/Card';
import { useFavorites } from '../../context/favorites';

import * as S from './styles';
import NoDataFound from '../../components/NoDataFound';

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <S.Wrapper>
      <S.Container>
        <S.HeaderContainer>
          <h1>Favorites Characters</h1>
        </S.HeaderContainer>
        <S.CardsContainer>
          {favorites.length > 0 ? (
            favorites.map((character) => (
              <Card content={character} key={character.id} />
            ))
          ) : (
            <NoDataFound>
              <h2>Add characters to your favorites list</h2>
            </NoDataFound>
          )}
        </S.CardsContainer>
      </S.Container>
    </S.Wrapper>
  );
};
export default Favorites;
