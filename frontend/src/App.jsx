import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import { Login } from "./pages/Login.jsx";
import KakaoCallback from "./service/KakaoCallback.js";
import Header from "./components/Header.jsx";
import MainPage from "./components/MainPage.jsx";
import About from "./components/About.jsx";
import ReviewPage from "./components/ReviewPage.jsx";
import Pagination from "./components/Pagination.jsx";
import MyPage from "./components/MyPage.jsx";
import Forum from "./components/Forum.jsx";
import KakaoMap from "./components/KakaoMap.jsx";
import Star from "./components/Star.jsx";
import Modal from "./components/Modal.jsx";
import ReviewModal from "./components/reviewModal.jsx";
import PhotoReviewModal from "./components/PhotoReviewModal.jsx";
import ForumModal from "./components/ForumModal.jsx";
import Store from "./pages/Store.jsx";
import EventPage from "./pages/EventPage.jsx";
import EventOver from "./pages/EventOver.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  if (!localStorage.getItem("token")) {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/auth/kakao/callback" element={<KakaoCallback />} />

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
          <Route path="/MainPage" element={<MainPage />} />
          <Route path="/About" element={<About />} />
          <Route path="/ReviewPage" element={<ReviewPage />} />
          <Route path="/MyPage" element={<MyPage />} />
          <Route path="/Pagination" element={<Pagination />} />
          <Route path="/Forum" element={<Forum />} />
          <Route path="/Star" element={<Star />} />
          <Route path="/Modal" element={<Modal />} />
          <Route path="/ReviewModal" element={<ReviewModal />} />
          <Route path="/PhotoReviewModal" element={<PhotoReviewModal />} />
          <Route path="/ForumModal" element={<ForumModal />} />
          <Route path="/KakaoMap" element={<KakaoMap />} />
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
