// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="app-footer">
      <p>
        Tamil Transliterator - A modern React application for typing Tamil using English keyboard
      </p>
      <p>
        Developed by Visagan S
      </p>
      <div className="footer-links">
        <a href="https://github.com/VisaganSP/tamil-transliterator" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://en.wikipedia.org/wiki/Tamil_language" target="_blank" rel="noopener noreferrer">About Tamil</a>
      </div>
    </footer>
  );
};

export default Footer;
