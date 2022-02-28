import React from 'react';

import * as S from './styles';

const ComicCard = ({ comic }) => {
  const { path, extension } = comic.thumbnail;
  const image = `${path}.${extension}`;

  const charactersName = comic.characters.items.map(
    (character) => character.name
  );

  const creators = comic.creators.items.map((character) => character.name);

  return (
    <S.Wrapper>
      <S.Image src={image} />
      <S.InfoContainer>
        <h2>{comic.title}</h2>
        <S.DescriptionContainer>
          <p>{comic.description}</p>
        </S.DescriptionContainer>
        <p>{`Characters: ${charactersName.join(', ')}`}</p>
        <p>{`Creators: ${creators.join(', ')}`}</p>
      </S.InfoContainer>
    </S.Wrapper>
  );
};
export default ComicCard;
