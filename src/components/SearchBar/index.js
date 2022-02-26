import React from 'react';
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search';

import * as S from './styles';

const SearchBar = () => (
  <S.Wrapper>
    <S.Input placeholder="Pesquisar" data-testid="search-input" />
    <SearchIcon data-testid="icon" />
  </S.Wrapper>
);
export default SearchBar;
