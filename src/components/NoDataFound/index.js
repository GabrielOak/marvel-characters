import React from 'react';
import NoDataImage from '../../assets/data-not-found.svg';

import * as S from './styles';

const NoDataFound = ({ children }) => {
  return (
    <S.Wrapper>
      <S.Image src={NoDataImage} />
      {children}
    </S.Wrapper>
  );
};

export default NoDataFound;
