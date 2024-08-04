import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import MainPage from "./components/MainPage";
import About from "./components/About.jsx";
import ReviewPage from "./components/ReviewPage.jsx";
import Pagination from "./components/Pagination";
import MyPage from "./components/MyPage";
import Forum from "./components/Forum";

import KakaoMap from "./components/KakaoMap";

import Modal from "./components/Modal";
import ReviewModal from "./components/ReviewModal";
import PhotoReviewModal from "./components/PhotoReviewModal.jsx";
import ForumModal from "./components/ForumModal";
import Store from "./pages/Store.jsx";
import EventPage from "./pages/EventPage.jsx";
import EventOver from "./pages/EventOver.jsx";

function App() {
  return (
    <Routes>
      <Route path="/MainPage" element={<MainPage />} />
      <Route path="/About" element={<About />} />
      <Route path="/ReviewPage" element={<ReviewPage />} />
      <Route path="/MyPage" element={<MyPage />} />
      <Route path="/Pagination" element={<Pagination />} />
      <Route path="/Forum" element={<Forum />} />

      <Route path="/Store" element={<Store />} />
      <Route path="/Store/event/*" element={<EventPage />} />
      <Route path="/Store/over" element={<EventOver />} />

      <Route path="/Modal" element={<Modal />} />
      <Route path="/ReviewModal" element={<ReviewModal />} />
      <Route path="/PhotoReviewModal" element={<PhotoReviewModal />} />
      <Route path="/ForumModal" element={<ForumModal />} />

      <Route path="/KakaoMap" element={<KakaoMap />} />
    </Routes>
  );
}

export default App;
