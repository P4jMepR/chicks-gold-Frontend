import React from 'react';
import Card from '../Card/Card';
import Pagination from '../Pagination/Pagination';
import './MarketGrid.css';

const MarketGrid = () => {
  const items = Array(15).fill().map((_, i) => ({
    id: i,
    title: 'Blue PartyHat',
    price: 450.00,
    originalPrice: 500.00,
    image: 'https://chicks-products.s3.amazonaws.com/2de94590-b836-4d2a-9d15-575c35f38892',
    onSale: true,
    stock: 156,
    delivery: 'Instant Delivery'
  }));

  return (
    <>
      <div className="filters-section">
        <h1>Condimentum consectetur</h1>
        <div className="filters-controls">
          <div className="select-game">
            <img src="https://chicksgold.com/icons/game-default.svg" alt="" className="control-icon" />
            Select a game
            <img src="https://chicksgold.com/icons/arrow-down.svg" alt="" className="arrow-icon" />
          </div>
          <div className="search-bar">
            <img src="/search_icon.svg" alt="Search" className="search-icon" />
            <input type="text" placeholder="Search" />
          </div>
          <div className="filters">
            <button className="filter-btn">
              <img src="https://chicksgold.com/icons/green-icons/item-bag.svg" alt="" className="control-icon" />
              All Items
              <img src="https://chicksgold.com/icons/arrow-down.svg" alt="" className="arrow-icon" />
            </button>
            <button className="filter-btn">
              <img src="https://chicksgold.com/icons/green-icons/feather.svg" alt="" className="control-icon" />
              All Types
              <img src="https://chicksgold.com/icons/arrow-down.svg" alt="" className="arrow-icon" />
            </button>
          </div>
        </div>
      </div>

      <div className="market-container">
        <div className="market-header">
          <div className="results-info">
            Showing 20 - from 125
          </div>
          <div className="sort">
            <button className="sort-btn">
              <img src="https://chicksgold.com/icons/green-icons/filter.svg" alt="" className="control-icon" />
              Featured
              <img src="https://chicksgold.com/icons/arrow-down.svg" alt="" className="arrow-icon" />
            </button>
          </div>
        </div>
        
        <div className="market-grid">
          {items.map(item => (
            <Card key={item.id} {...item} />
          ))}
        </div>
        
        <Pagination />
      </div>
    </>
  );
};

export default MarketGrid; 