import React, { Component, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header.jsx';
import MainPage from './components/MainPage.jsx';
import About from './components/About.jsx';
import ReviewPage from './components/ReviewPage.jsx';
import Pagination from './components/Pagination.jsx';
import MyPage from './components/MyPage.jsx';
import Forum from './components/Forum.jsx';
import KakaoMap from './components/KakaoMap.jsx';
import Star from './components/Star.jsx';
import Modal from './components/Modal.jsx';
import ReviewModal from './components/reviewModal.jsx';
import PhotoReviewModal from './components/PhotoReviewModal.jsx';
import ForumModal from './components/ForumModal.jsx';
import Footer from './components/Footer.jsx';
import NewKakao from './pages/NewKakao.jsx';
import { useKakaoLoader } from './hooks/useKakaoLoader.js';

function App() {
  useKakaoLoader();

  return (
    <div className='app-container'>
      <Header />
      <div className='content'>
        <Routes>
          <Route path='/MainPage' element={<MainPage />} />
          <Route path='/About' element={<About />} />
          <Route path='/ReviewPage' element={<ReviewPage />} />
          <Route path='/MyPage' element={<MyPage />} />
          <Route path='/Pagination' element={<Pagination />} />
          <Route path='/Forum' element={<Forum />} />
          <Route path='/Star' element={<Star />} />
          <Route path='/Modal' element={<Modal />} />
          <Route path='/ReviewModal' element={<ReviewModal />} />
          <Route path='/PhotoReviewModal' element={<PhotoReviewModal />} />
          <Route path='/ForumModal' element={<ForumModal />} />
          <Route path='/KakaoMap' element={<KakaoMap />} />
          <Route path='/new-kakao' element={<NewKakao />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
