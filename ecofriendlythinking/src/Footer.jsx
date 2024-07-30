import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>© 2024 eco-friendly-thinking Company. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://facebook.com">Facebook</a>
          <a href="https://twitter.com">Twitter</a>
          <a href="https://instagram.com">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;