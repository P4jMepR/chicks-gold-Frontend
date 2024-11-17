import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = ['CURRENCY', 'ITEMS', 'ACCOUNTS', 'SERVICES', 'SWAP', 'SELL'];

  return (
    <header className="header">
      <div className="header-content">
        <button 
          className={`burger-menu ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </button>

        <div className="logo">
          <img src="https://chicksgold.com/logo/chicks-logo-large.svg" alt="Chicks Gold" />
        </div>
        
        <div className="separator"></div>
        
        <nav className="main-nav">
          {navItems.map((item) => (
            <button className="nav-button" key={item}>
              {item}
              <img src="https://chicksgold.com/icons/arrow-down.svg" alt="" className="arrow-icon" />
            </button>
          ))}
        </nav>

        <div className="header-actions">
          <button className="nav-button currency-button">
            USD
            <img src="https://chicksgold.com/icons/arrow-down.svg" alt="" className="arrow-icon" />
          </button>
          <button className="cart-button">
            <img src="https://chicksgold.com/icons/cart.svg" alt="" className="cart-icon" />
            <span className="cart-text">CART (5)</span>
          </button>
          <button className="sign-in-button desktop-only">
            SIGN IN
            <img src="https://chicksgold.com/sign-in/profile.png" alt="" className="profile-icon" />
          </button>
        </div>
      </div>

      {}
      <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-top">
          <button className="mobile-nav-button currency">
            USD
            <img src="https://chicksgold.com/icons/arrow-down.svg" alt="" className="arrow-icon" />
          </button>
          <button className="mobile-nav-button cart">
            <img src="https://chicksgold.com/icons/cart.svg" alt="" className="cart-icon" />
            CART (5)
          </button>
        </div>
        
        <div className="mobile-nav-main">
          {navItems.map((item) => (
            <div className="mobile-nav-item" key={item}>
              <button className="mobile-nav-button">
                {item}
                <img src="https://chicksgold.com/icons/arrow-down.svg" alt="" className="arrow-icon" />
              </button>
            </div>
          ))}
        </div>

        <div className="mobile-nav-bottom">
          <button className="mobile-nav-button sign-in">
            SIGN IN
            <img src="https://chicksgold.com/sign-in/profile.png" alt="" className="profile-icon" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header; 