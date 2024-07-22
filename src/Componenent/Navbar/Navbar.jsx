import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const spans = document.querySelectorAll('.navbar-logo span');
    spans.forEach((span, index) => {
      span.style.setProperty('--char-index', index);
    });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const handleLinkClick = () => {
    // Close the menu when a link is clicked
    setIsMenuOpen(false);
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={assets.logo} alt="Esperanza Club Logo" />
        <p>Esperanza</p>
        {'Club'.split('').map((char, index) => (
          <span key={index}>{char}</span>
        ))}
      </div>
      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <a href="#home" onClick={handleLinkClick}>Home</a>
        <a href="#Slider" onClick={handleLinkClick}>Events</a>
        <a href="#Contact" onClick={handleLinkClick}>Contact</a>
      </div>
      <div className="navbar-burger" onClick={toggleMenu}>
        <div className="burger-icon"></div>
        <div className="burger-icon"></div>
        <div className="burger-icon"></div>
      </div>
    </nav>
  );
}

export default Navbar;
