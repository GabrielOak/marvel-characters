import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import Dropdown from '../../components/Dropdown';
import Menu from '../../components/Menu';
import SearchBar from '../../components/SearchBar';
import api from '../../services/api';

import * as S from './styles';
import LoadingIndicator from '../../components/LoadingIndicator';

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');
  const [limit] = useState(10);
  const [loading, setLoading] = useState(false);
  const options = ['A-Z', 'Z-A'];

  const generateURL = () => {
    let url = `/characters?limit=${limit}`;
    if (search) {
      url += `&nameStartsWith=${search}`;
    }

    return url;
  };

  const getCharacters = async () => {
    setLoading(true);
    const url = generateURL();
    api
      .get(url)
      .then((response) => {
        setCharacters(response.data.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
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
          <SearchBar
            search={search}
            setSearch={setSearch}
            onClick={() => getCharacters()}
          />
          <Dropdown options={options} />
        </S.FilterContainer>
        <S.CardsContainer>
          {loading ? (
            <LoadingIndicator />
          ) : characters.length ? (
            characters.map((character) => (
              <Card key={character.id} content={character} />
            ))
          ) : (
            <h1>Not found!</h1>
          )}
        </S.CardsContainer>
      </S.Container>
    </S.Wrapper>
  );
};

export default Home;
