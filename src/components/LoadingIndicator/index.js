import React from 'react';

import * as S from './styles';
import Loading from '../../assets/loading.svg';

const LoadingIndicator = () => (
  <S.Wrapper>
    <S.Image src={Loading} />
  </S.Wrapper>
);

export default LoadingIndicator;
