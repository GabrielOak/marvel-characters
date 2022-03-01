import React from 'react';

import * as S from './styles';

const Button = ({ title, icon, onClick }) => {
  return (
    <S.Wrapper onClick={() => onClick()}>
      {!!icon && icon}
      <span>{title}</span>
    </S.Wrapper>
  );
};
export default Button;
