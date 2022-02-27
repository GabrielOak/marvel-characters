import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Detail from '../pages/Detail';
import Home from '../pages/Home';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="detail" element={<Detail />} />
    </Routes>
  );
};
export default Router;
