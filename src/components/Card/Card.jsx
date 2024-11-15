import React from 'react';
import './Card.css';

const Card = ({ title, price, originalPrice, image, onSale, stock, delivery }) => {
  return (
    <div className="card">
      {onSale && <span className="sale-badge">ON SALE</span>}
      <div className="card-image">
        <img src={image} alt={title} />
        <div className="stock-info">
          <span className="stock">{stock} left in stock</span>
        </div>
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <div className="price-container">
          <span className="current-price">${price.toFixed(2)}</span>
          {originalPrice && (
            <span className="original-price">${originalPrice.toFixed(2)}</span>
          )}
        </div>
        <div className="delivery-info">
          <span className="delivery-badge">
            <span className="dot"></span>
            {delivery}
          </span>
        </div>
        <div className="card-actions">
          <button className="details-btn">DETAILS</button>
          <button className="add-btn">ADD</button>
        </div>
      </div>
    </div>
  );
};

export default Card; 