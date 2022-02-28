import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Menu from '../components/Menu';
import Detail from '../pages/Detail';
import Home from '../pages/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
