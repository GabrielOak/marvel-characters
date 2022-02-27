import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import Dropdown from '../../components/Dropdown';
import Menu from '../../components/Menu';
import SearchBar from '../../components/SearchBar';
import api from '../../services/api';

import * as S from './styles';
import LoadingIndicator from '../../components/LoadingIndicator';
import Pagination from '../../components/Pagination';

const Home = () => {
  const limit = 15;

  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');

  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const [totalResult, setTotalResult] = useState(0);
  const [isPrevBttnDis, setIsPrevButtnDis] = useState(false);
  const [isNextBttnDis, setIsNextButtnDis] = useState(false);

  const [loading, setLoading] = useState(false);
  const options = ['A-Z', 'Z-A'];

  const generateURL = () => {
    let url = `/characters?limit=${limit}`;
    if (offset) {
      url += `&offset=${offset}`;
    }

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
        setTotalResult(response.data.data.total);
        setCharacters(response.data.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const handleSearch = () => {
    if (page > 1) {
      setPage(1);
      return;
    }
    getCharacters();
  };

  const checkPagination = () => {
    const nextOffset = page * limit;

    if (page <= 1) {
      setIsPrevButtnDis(true);
    } else {
      setIsPrevButtnDis(false);
    }

    if (nextOffset >= totalResult) {
      setIsNextButtnDis(true);
    } else {
      setIsNextButtnDis(false);
    }
    setOffset((page - 1) * limit);
  };

  useEffect(() => {
    checkPagination();
  }, [page, totalResult]);

  useEffect(() => {
    getCharacters();
  }, [offset]);

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
            onClick={() => handleSearch()}
          />
          <Dropdown options={options} />
        </S.FilterContainer>
        <S.CardsContainer>
          {loading ? (
            <LoadingIndicator />
          ) : characters.length > 0 ? (
            characters.map((character) => (
              <Card key={character.id} content={character} />
            ))
          ) : (
            <h1>Not found!</h1>
          )}
        </S.CardsContainer>
        {!loading && characters.length > 0 && (
          <Pagination
            page={page}
            setPage={setPage}
            isPrevBttnDis={isPrevBttnDis}
            isNextBttnDis={isNextBttnDis}
          />
        )}
      </S.Container>
    </S.Wrapper>
  );
};

export default Home;
