import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { useParams } from 'react-router-dom';

import * as S from './styles';

import LoadingIndicator from '../../components/LoadingIndicator';
import ComicCard from '../../components/ComicCard';

const Detail = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const [comics, setComics] = useState([]);
  const [loadingComics, setLoadingComics] = useState(false);

  const getCharacter = async () => {
    setLoading(true);
    api
      .get(`/characters/${id}`)
      .then((response) => {
        setCharacter(response.data.data.results[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const getComics = async () => {
    setLoadingComics(true);
    api
      .get(`/characters/${id}/comics`)
      .then((response) => {
        setComics(response.data.data.results);
        console.log(response.data.data.results);
        setLoadingComics(false);
      })
      .catch((err) => {
        console.log(err);
        setLoadingComics(false);
      });
  };

  useEffect(() => {
    getCharacter();
    getComics();
  }, []);

  useEffect(() => {
    if (character) {
      const { path, extension } = character.thumbnail;
      const imagePath = `${path}.${extension}`;
      setImage(imagePath);
    }
  }, [character]);

  return (
    <S.Wrapper>
      {loading ? (
        <LoadingIndicator />
      ) : character ? (
        <div>
          <S.Banner>
            <S.Image src={image} />
            <S.InfoContainer>
              <div>
                <h1>{character.name}</h1>
                <p>{character.description}</p>
              </div>
              <S.MetricsContainer>
                <p>{`Comics: ${character.comics.available}`}</p>
                <S.Separator />
                <p>{`Stories: ${character.stories.available}`}</p>
                <S.Separator />
                <p>{`Series: ${character.series.available}`}</p>
                <S.Separator />
                <p>{`Events: ${character.events.available}`}</p>
              </S.MetricsContainer>
            </S.InfoContainer>
          </S.Banner>
          {comics.length > 0 && <h1>Comics</h1>}
          <S.ComicsContainer>
            {loadingComics ? (
              <LoadingIndicator />
            ) : (
              comics.length > 0 &&
              comics.map((comic) => <ComicCard comic={comic} key={comic.id} />)
            )}
          </S.ComicsContainer>
        </div>
      ) : (
        <h1>No data found </h1>
      )}
    </S.Wrapper>
  );
};
export default Detail;
