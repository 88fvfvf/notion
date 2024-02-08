import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePages';
import FavoritesPages from './pages/FavoritesPages';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/favorites' element={<FavoritesPages />} />
      </Routes>
    </>
  );
}

export default App;
