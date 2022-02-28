import React from 'react';

import * as S from './styles';
import logo from '../../assets/logo.png';

const Menu = () => (
  <S.Wrapper>
    <S.Logo src={logo} aria-label="Marvel" />
    <S.Link to="/">Home</S.Link>
  </S.Wrapper>
);
export default Menu;
