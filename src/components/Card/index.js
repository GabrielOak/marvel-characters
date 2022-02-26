/* eslint-disable react/prop-types */
import React from 'react';

import * as S from './styles';

const Card = ({ img, title }) => (
  <S.Card>
    <S.Image img={img} aria-label={title} role="img" />
    <S.InfoContainer>
      <S.Name>{title}</S.Name>
    </S.InfoContainer>
  </S.Card>
);
export default Card;
