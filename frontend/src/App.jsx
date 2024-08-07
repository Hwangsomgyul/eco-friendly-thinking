import React, { Component, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

import { Login } from './pages/Login.jsx';
import Header from './components/Header.jsx';
import MainPage from './components/MainPage.jsx';
import About from './components/About.jsx';
import ReviewPage from './components/ReviewPage.jsx';

import MyPage from './components/MyPage.jsx';
import Forum from './components/Forum.jsx';
// import KakaoMap from './components/KakaoMap.jsx';

import Store from './pages/Store.jsx';
import EventPage from './pages/EventPage.jsx';
import EventOver from './pages/EventOver.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    const hash = window.location.hash;
    const params = new URLSearchParams(hash.substring(1));
    const accessToken = params.get('access_token');
    const userId = params.get('user_id');
    if (accessToken && userId) {
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('userId', userId);
      navigate('/MainPage');
    }
  }, [navigate]);

  if (
    !(localStorage.getItem('accessToken') && localStorage.getItem('userId'))
  ) {
    return (
      <Routes>
        <Route path="/" element={<Login />} />

        {/* 위에 없는 경로일 경우 올바르지 못한 접근 */}
        {/* <Route path="/*" element={<Unauthorized />} />  */}
      </Routes>
    );
  }
  return (
    <div className="app-container">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/MainPage" element={<MainPage />} />
          <Route path="/About" element={<About />} />
          <Route path="/ReviewPage" element={<ReviewPage />} />
          <Route path="/MyPage" element={<MyPage />} />
          <Route path="/Forum" element={<Forum />} />

          <Route path="/Store" element={<Store />} />
          <Route path="/Store/event/*" element={<EventPage />} />
          <Route path="/Store/over" element={<EventOver />} />

          {/* 위에 없는 경로일 경우 찾을 수 없는 페이지 */}
          {/* <Route path="/*" element={<NotFound />} />  */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
