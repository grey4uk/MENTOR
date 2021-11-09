import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import Example from '../Example/Example';

const RoutesEx = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/*" element={<HomePage />} />
      <Route path="/example/*" element={<Example />} />
    </Routes>
  );
};

export default RoutesEx;
