import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = ['CURRENCY', 'ITEMS', 'ACCOUNTS', 'SERVICES', 'SWAP', 'SELL'];

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <img src="https://chicksgold.com/logo/chicks-logo-large.svg" alt="Chicks Gold" />
        </div>
        
        <div className="separator"></div>
        
        <nav className="main-nav">
          {navItems.map((item) => (
            <div className="nav-item" key={item}>
              <button className="nav-button">
                {item}
                <img src="https://chicksgold.com/icons/arrow-down.svg" alt="" className="arrow-icon" />
              </button>
            </div>
          ))}
        </nav>

        <div className="header-actions">
          <div className="currency-selector">
            <button className="nav-button">
              USD
              <img src="https://chicksgold.com/icons/arrow-down.svg" alt="" className="arrow-icon" />
            </button>
          </div>
          <button className="cart-button">
            <img src="https://chicksgold.com/icons/cart.svg" alt="" className="cart-icon" />
            CART (5)
          </button>
          <button className="sign-in-button desktop-only">
            SIGN IN
            <img src="https://chicksgold.com/sign-in/profile.png" alt="" className="profile-icon" />
          </button>
          <button 
            className={`burger-menu ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <div className="mobile-nav-item" key={item}>
            <button className="mobile-nav-button">
              {item}
              <img src="https://chicksgold.com/icons/arrow-down.svg" alt="" className="arrow-icon" />
            </button>
          </div>
        ))}
        <div className="mobile-nav-item">
          <button className="mobile-nav-button">
            USD
            <img src="https://chicksgold.com/icons/arrow-down.svg" alt="" className="arrow-icon" />
          </button>
        </div>
        <div className="mobile-nav-item">
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