
import './App.css';
import React from 'react';
import {Routes, Route } from 'react-router-dom';


import MainPage from './components/MainPage';
import Pagination from './components/Pagination';
import MyPage from './components/MyPage';
import Forum from './components/Forum';

import KakaoMap from './components/KakaoMap';


import Modal from './components/Modal';


function App() {
  return (
    <Routes>
      <Route path='/MainPage' element={<MainPage />} /> 
      <Route path='/MyPage' element={<MyPage />} />
      <Route path='/Pagination' element={<Pagination />} />
      <Route path='/Forum' element={<Forum />} />
      <Route path='/Modal' element={<Modal />} />

      <Route path='/KakaoMap' element={<KakaoMap />} />
      
    </Routes>
  );
}

export default App;
