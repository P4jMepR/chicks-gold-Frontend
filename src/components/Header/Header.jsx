import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <img src="https://chicksgold.com/logo/chicks-logo-large.svg" alt="Chicks Gold" />
        </div>
        
        <div className="separator"></div>
        
        <nav className="main-nav">
          <div className="nav-item">
            <button className="nav-button">
              CURRENCY
              <img src="https://chicksgold.com/icons/arrow-down.svg" alt="" className="arrow-icon" />
            </button>
          </div>
          <div className="nav-item">
            <button className="nav-button">
              ITEMS
              <img src="https://chicksgold.com/icons/arrow-down.svg" alt="" className="arrow-icon" />
            </button>
          </div>
          <div className="nav-item">
            <button className="nav-button">
              ACCOUNTS
              <img src="https://chicksgold.com/icons/arrow-down.svg" alt="" className="arrow-icon" />
            </button>
          </div>
          <div className="nav-item">
            <button className="nav-button">
              SERVICES
              <img src="https://chicksgold.com/icons/arrow-down.svg" alt="" className="arrow-icon" />
            </button>
          </div>
          <div className="nav-item">
            <button className="nav-button">
              SWAP
              <img src="https://chicksgold.com/icons/arrow-down.svg" alt="" className="arrow-icon" />
            </button>
          </div>
          <div className="nav-item">
            <button className="nav-button">
              SELL
              <img src="https://chicksgold.com/icons/arrow-down.svg" alt="" className="arrow-icon" />
            </button>
          </div>
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
            CART (0)
          </button>
          <button className="sign-in-button">
            <img src="https://chicksgold.com/sign-in/profile.png" alt="" className="profile-icon" />
            SIGN IN
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 