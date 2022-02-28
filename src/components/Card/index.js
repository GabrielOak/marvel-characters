/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './styles';

const Card = ({ content }) => {
  const { path, extension } = content.thumbnail;
  const image = `${path}/portrait_uncanny.${extension}`;
  const navigate = useNavigate();

  return (
    <S.Card>
      <S.Image
        img={image}
        aria-label={content.name}
        role="img"
        onClick={() => navigate(`/detail/${content.id}`)}
      />
      <S.InfoContainer>
        <S.Name>{content.name}</S.Name>
      </S.InfoContainer>
    </S.Card>
  );
};
export default Card;
