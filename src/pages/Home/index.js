import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import Dropdown from '../../components/Dropdown';
import Menu from '../../components/Menu';
import SearchBar from '../../components/SearchBar';
import api from '../../services/api';

import * as S from './styles';

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [limit] = useState(10);
  const options = ['A-Z', 'Z-A'];

  const getCharacters = async () => {
    api
      .get(`/characters?limit=${limit}`)
      .then((response) => {
        setCharacters(response.data.data.results);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <S.Wrapper>
      <Menu />
      <S.Container>
        <S.HeaderContainer>
          <h1>Characters</h1>
        </S.HeaderContainer>
        <S.FilterContainer>
          <SearchBar />
          <Dropdown options={options} />
        </S.FilterContainer>
        <S.CardsContainer>
          {!!characters &&
            characters.map((character) => (
              <Card key={character.id} content={character} />
            ))}
        </S.CardsContainer>
      </S.Container>
    </S.Wrapper>
  );
};

export default Home;
