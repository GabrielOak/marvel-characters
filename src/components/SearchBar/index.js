import React from 'react';
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search';

import * as S from './styles';

const SearchBar = ({ search, setSearch, onClick }) => {
  const onChengeHandler = (value) => {
    setSearch(value);
  };

  const keyPress = (key) => {
    if (key === 'Enter') {
      onClick();
    }
  };

  return (
    <S.Wrapper>
      <S.Input
        type="text"
        placeholder="Pesquisar"
        value={search || ''}
        data-testid="search-input"
        onChange={(event) => onChengeHandler(event.target.value)}
        onKeyDown={(event) => keyPress(event.key)}
      />
      <SearchIcon data-testid="icon" onClick={() => onClick()} />
    </S.Wrapper>
  );
};
export default SearchBar;
