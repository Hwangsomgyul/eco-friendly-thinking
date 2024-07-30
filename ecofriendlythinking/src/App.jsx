import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home';
import About from './pages/About';
import Reviews from './pages/Reviews';
import Forum from './pages/Forum';
import Shop from './pages/Shop';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;