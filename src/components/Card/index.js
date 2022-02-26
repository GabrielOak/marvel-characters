/* eslint-disable react/prop-types */
import React from 'react';

import * as S from './styles';

const Card = ({ content }) => {
  const { path, extension } = content.thumbnail;
  const image = `${path}/portrait_uncanny.${extension}`;

  return (
    <S.Card>
      <S.Image img={image} aria-label={content.name} role="img" />
      <S.InfoContainer>
        <S.Name>{content.name}</S.Name>
      </S.InfoContainer>
    </S.Card>
  );
};
export default Card;
