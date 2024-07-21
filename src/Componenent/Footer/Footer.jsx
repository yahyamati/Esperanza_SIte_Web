import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <p className="footer-title">Follow Us</p>
          <div className="footer-socials">
            <img src={assets.twitter} alt="Twitter" />
            <img src={assets.face} alt="Facebook" />
            <img src={assets.linkedin} alt="LinkedIn" />
          </div>
        </div>
        <div className="footer-section">
          <img src={assets.logo} alt="Esperanza Club Logo" className="footer-logo" />
          <p className="footer-text">Esperanza Club</p>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-copyright">
        <p>© 2024 Esperanza Club. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
