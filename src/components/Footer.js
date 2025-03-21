import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 Eric Strange | All Rights Reserved</p>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/eric-strange-cfa-48955120" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:jestrange83@gmail.com">Email Me</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
