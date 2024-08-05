import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";



import MainPage from "./components/MainPage";
import About from './components/About.jsx';
import ReviewPage from "./components/ReviewPage.jsx";
import Pagination from "./components/Pagination";
import MyPage from "./components/MyPage";
import Forum from "./components/Forum";

import KakaoMap from "./components/KakaoMap";


import Modal from "./components/Modal";
import ReviewModal from "./components/ReviewModal";
import PhotoReviewModal from "./components/PhotoReviewModal.jsx";
import ForumModal from "./components/ForumModal";

function App() {
  return (
    <Routes>
      <Route path="/MainPage" element={<MainPage />} />
      <Route path="/About" element={<About />} />
      <Route path="/ReviewPage" element={<ReviewPage />} />
      <Route path="/MyPage" element={<MyPage />} />
      <Route path="/Pagination" element={<Pagination />} />
      <Route path="/Forum" element={<Forum />} />
      <Route path="/KakaoMap" element={<KakaoMap />} />

      
      <Route path="/Modal" element={<Modal />} />
      <Route path="/ReviewModal" element={<ReviewModal />} />
      <Route path="/PhotoReviewModal" element={<PhotoReviewModal />} />
      <Route path="/ForumModal" element={<ForumModal />} />

      <Route path="/KakaoMap" element={<KakaoMap />} />
    </Routes>
  );
}

export default App;
