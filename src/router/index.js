import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Menu from '../components/Menu';
import Detail from '../pages/Detail';
import Favorites from '../pages/Favorites';
import Home from '../pages/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
