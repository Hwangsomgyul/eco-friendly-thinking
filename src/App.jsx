import React, { Component, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header.jsx';
import MainPage from './components/MainPage.jsx';
import About from './components/About.jsx';
import ReviewPage from './components/ReviewPage.jsx';

import MyPage from './components/MyPage.jsx';
import Forum from './components/Forum.jsx';

import Footer from './components/Footer.jsx';
import NewKakao from './pages/NewKakao.jsx';
import { useKakaoLoader } from './hooks/useKakaoLoader.js';

function App() {
  useKakaoLoader();

  return (
    <div className="app-container">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/MainPage" element={<MainPage />} />
          <Route path="/About" element={<About />} />
          <Route path="/ReviewPage" element={<ReviewPage />} />
          <Route path="/MyPage" element={<MyPage />} />

          <Route path="/Forum" element={<Forum />} />

          <Route path="/new-kakao" element={<NewKakao />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
