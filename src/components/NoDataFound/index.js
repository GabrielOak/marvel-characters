import React from 'react';
import NoDataImage from '../../assets/data-not-found.svg';

import * as S from './styles';

const NoDataFound = ({ children }) => {
  return (
    <S.Wrapper>
      <S.Image src={NoDataImage} aria-label="No data found" />
      {children}
    </S.Wrapper>
  );
};

export default NoDataFound;
