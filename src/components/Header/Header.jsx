import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="shipping-banner">
        Worldwide Shipping - Duties and Taxes Prepaid
      </div>
      <nav className="navbar">
        <div className="logo">HEBRON NUTRITION</div>
        
        {/* Desktop Navigation */}
        <div className={`nav-links ${isMenuOpen ? 'mobile-show' : ''}`}>
          <a href="/" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="/shop-by-brand" onClick={() => setIsMenuOpen(false)}>Shop by brand</a>
          <a href="/shop-by-category" onClick={() => setIsMenuOpen(false)}>Shop by category</a>
          <a href="/meet-us" onClick={() => setIsMenuOpen(false)}>Meet us CMO</a>
          <a href="/contact" onClick={() => setIsMenuOpen(false)}>Contact us</a>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="mobile-menu" onClick={toggleMenu}>
          <span className="menu-icon">{isMenuOpen ? '✕' : '☰'}</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;