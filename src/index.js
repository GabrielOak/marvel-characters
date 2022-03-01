import React from 'react';
import ReactDOM from 'react-dom';
import { FavoritesProvider } from './context/favorites';
import './index.css';
import Router from './router';

ReactDOM.render(
  <React.StrictMode>
    <FavoritesProvider>
      <Router />
    </FavoritesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
