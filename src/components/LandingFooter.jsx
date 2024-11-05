import React from 'react';
import '../css/LandingFooter.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Contact us: capstone.g01.04@gmail.com</p>
      <div className="footer-links">
        <a href="#privacy" className="footer-link">Privacy Policy</a>
        <a href="#terms" className="footer-link">Terms of Service</a>
        <a href="#support" className="footer-link">Support</a>
      </div>
      <p>© 2024 SulongEdukasyon. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
