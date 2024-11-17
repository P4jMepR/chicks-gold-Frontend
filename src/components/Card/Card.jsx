import React, { useState } from 'react';
import './Card.css';

const Card = ({ 
  title, 
  price, 
  originalPrice, 
  image, 
  onSale,
  gameIcon
}) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <div className="card">
      <div className="card-header">
        <div className="status-bar">
          <div className="status-badges">
            {onSale && <span className="sale-badge">ON SALE</span>}
            <span className="stock-badge">In stock</span>
          </div>
        </div>
        <div className="quantity-control">
          <span>{quantity}</span>
          <div className="arrows">
            <button onClick={increaseQuantity}>▲</button>
            <button onClick={decreaseQuantity}>▼</button>
          </div>
        </div>
      </div>
      
      <div className="card-image">
        <img src={image} alt={title} />
      </div>

      <div className="content">
        <h3 className="card-title">{title}</h3>
        
        <div className="price-container">
          <span className="current-price">${price.toFixed(2)}</span>
          {originalPrice && (
            <span className="original-price">${originalPrice.toFixed(2)}</span>
          )}
        </div>

        <p className="description">Lorem ipsum dolor sit amet consectetur adipiscing elitr.</p>

        <img 
          src={gameIcon || "https://chicks-games.s3.amazonaws.com/5695707f-378c-4b23-b85e-3216ccf3af06"}
          alt="Game indicator" 
          className="game-indicator"
        />

        <div className="card-footer">
          <button className="details-btn">DETAILS</button>
          <button className="add-btn">
            ADD
            <div className="cart-icon-wrapper">
              <svg viewBox="0 0 24 24" className="cart-icon">
                <path d="M8 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-9.8-3.2c0 .1.1.2.2.2h12.2c.1 0 .2-.1.2-.2l1.3-5.8c0-.1-.1-.2-.2-.2H7.2l-.3-1.5c0-.1-.1-.2-.2-.2H4c-.1 0-.2.1-.2.2v1c0 .1.1.2.2.2h2l1.4 7.1z"/>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card; 