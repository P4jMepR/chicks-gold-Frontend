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
          {['CURRENCY', 'ITEMS', 'ACCOUNTS', 'SERVICES', 'SWAP', 'SELL'].map((item) => (
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
          <button className="sign-in-button">
            SIGN IN
            <img src="https://chicksgold.com/sign-in/profile.png" alt="" className="profile-icon" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 