import React, { createContext, useState, useEffect } from 'react';

export const FavoritesContext = createContext({});

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (character) => {
    setFavorites([...favorites, character]);
  };

  const removeFromFavorites = (id) => {
    const result = favorites.filter((favorite) => id !== favorite.id);
    setFavorites(result);
  };

  useEffect(() => {
    const favoritesStorage = localStorage.getItem('@App:favorites');
    if (favoritesStorage) {
      setFavorites(JSON.parse(favoritesStorage));
    } else {
      setFavorites([]);
    }
  }, []);

  useEffect(() => {
    if (favorites.length > 0) {
      localStorage.setItem('@App:favorites', JSON.stringify(favorites));
    }
  }, [favorites]);

  return (
    <FavoritesContext.Provider
      value={{ favorites, setFavorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => React.useContext(FavoritesContext);
