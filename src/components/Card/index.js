import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFavorites } from '../../context/favorites';
import { StarOutline } from '@styled-icons/material/StarOutline';
import { Star } from '@styled-icons/material-outlined/Star';

import * as S from './styles';

const Card = ({ content }) => {
  const { path, extension } = content.thumbnail;
  const image = `${path}/portrait_uncanny.${extension}`;
  const navigate = useNavigate();

  const [favorite, setFavorite] = useState(false);

  const { favorites, isFavorite, removeFromFavorites, addToFavorites } =
    useFavorites();

  const handleFavorite = () => {
    if (favorite) {
      removeFromFavorites(content.id);
      content.favorite = true;
      setFavorite(true);
    } else {
      addToFavorites(content);
      setFavorite(false);
    }
  };

  const handleNavigation = (event) => {
    if (event.target !== event.currentTarget) return;
    navigate(`/detail/${content.id}`);
  };

  useEffect(() => {
    setFavorite(isFavorite(content.id));
  }, [favorite, favorites]);

  return (
    <S.Card>
      <S.Image
        img={image}
        aria-label={content.name}
        role="img"
        onClick={(event) => handleNavigation(event)}
      >
        {favorite ? (
          <Star
            width={30}
            onClick={(event) => handleFavorite(event)}
            color="yellow"
          />
        ) : (
          <StarOutline width={30} onClick={(event) => handleFavorite(event)} />
        )}
      </S.Image>
      <S.InfoContainer>
        <S.Name>{content.name}</S.Name>
      </S.InfoContainer>
    </S.Card>
  );
};
export default Card;
