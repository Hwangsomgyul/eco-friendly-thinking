import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import KakaoLogin from './components/KakaoLogin';
import KakaoCallback from './components/KakaoCallback';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<KakaoLogin />} />
        <Route path="/auth/kakao/callback" element={<KakaoCallback />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
