import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { FavoritesProvider } from './context/favorites';
import './index.css';

ReactDOM.render(
  <FavoritesProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritesProvider>,
  document.getElementById('root')
);
