import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Detail from '../pages/Detail';
import Favorites from '../pages/Favorites';
import Home from '../pages/Home';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
};
export default Router;
