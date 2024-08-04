import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import MainPage from "./components/MainPage";
import Pagination from "./components/Pagination";
import MyPage from "./components/MyPage";
import Forum from "./components/Forum";

import KakaoMap from "./components/KakaoMap";
import Star from "./components/Star";

import Modal from "./components/Modal";
import ReviewModal from "./components/reviewModal";
import PhotoReviewModal from "./components/PhotoReivewModal";
import ForumModal from "./components/ForumModal";

import { Login } from "./pages/Login";
import { RecycleRate } from "./asserts/Chart/RecycleRate";

function App() {
  return (
    <Routes>
      <Route path="/MainPage" element={<MainPage />} />
      <Route path="/MyPage" element={<MyPage />} />
      <Route path="/Pagination" element={<Pagination />} />
      <Route path="/Forum" element={<Forum />} />
      <Route path="/Modal" element={<Modal />} />
      <Route path="/Star" element={<Star />} />
      <Route path="/ReviewModal" element={<ReviewModal />} />
      <Route path="/PhotoReviewModal" element={<PhotoReviewModal />} />
      <Route path="/ForumModal" element={<ForumModal />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/" element={<RecycleRate />} />

      <Route path="/KakaoMap" element={<KakaoMap />} />
    </Routes>
  );
}

export default App;
