import React from 'react';
import Card from '../Card/Card';
import Pagination from '../Pagination/Pagination';
import './MarketGrid.css';

const MarketGrid = () => {
  const items = [
    {
      id: 0,
      title: 'Blue PartyHat',
      price: 450.00,
      originalPrice: 500.00,
      image: 'https://chicks-products.s3.amazonaws.com/2de94590-b836-4d2a-9d15-575c35f38892',
      onSale: true,
      stock: 156,
      delivery: 'Instant Delivery'
    },
    {
      id: 1,
      title: 'Mythical Shield',
      price: 299.99,
      originalPrice: 399.99,
      image: './fort_shield.webp',
      onSale: true,
      stock: 42,
      delivery: 'Instant Delivery',
      gameIcon: 'https://chicks-games.s3.amazonaws.com/11a1698b-9135-4a14-8d11-08525bb0aa75'
    },
    {
      id: 2,
      title: 'Mythical Shield',
      price: 325.00,
      originalPrice: null,
      image: './fort_shield.webp',
      onSale: false,
      stock: 23,
      delivery: 'Instant Delivery',
      gameIcon: 'https://chicks-games.s3.amazonaws.com/11a1698b-9135-4a14-8d11-08525bb0aa75'
    },
    // Fill the rest with Blue PartyHat items to maintain 15 total items
    ...Array(12).fill().map((_, i) => ({
      id: i + 3,
      title: 'Blue PartyHat',
      price: 450.00,
      originalPrice: 500.00,
      image: 'https://chicks-products.s3.amazonaws.com/2de94590-b836-4d2a-9d15-575c35f38892',
      onSale: true,
      stock: 156,
      delivery: 'Instant Delivery'
    }))
  ];

  return (
    <>
      <div className="filters-section">
        <h1>Condimentum consectetur</h1>
        <div className="filters-controls">
          <div className="select-game">
            <img src="./sword.webp" alt="" className="control-icon" />
            Select a game
            <img src="https://chicksgold.com/icons/arrow-white.svg" alt="" className="arrow-icon" />
          </div>
          <div className="search-bar">
            <img src="/search_icon.svg" alt="Search" className="search-icon" />
            <input type="text" placeholder="Search" />
          </div>
          <div className="filters">
            <div className="filter-dropdown">
              <div className="filter-icon-wrapper">
                <img src="https://chicksgold.com/icons/green-icons/item-bag.svg" alt="" className="control-icon" />
              </div>
              <div className="filter-value">
                <span className="filter-label">Price</span>
                <div className="filter-content">
                  <span>All</span>
                  <img src="https://chicksgold.com/icons/arrow-white.svg" alt="" className="arrow-icon" />
                </div>
              </div>
            </div>
            
            <div className="filter-dropdown">
              <div className="filter-icon-wrapper">
                <img src="https://chicksgold.com/icons/green-icons/feather.svg" alt="" className="control-icon" />
              </div>
              <div className="filter-value">
                <span className="filter-label">Item Type</span>
                <div className="filter-content">
                  <span>All</span>
                  <img src="https://chicksgold.com/icons/arrow-white.svg" alt="" className="arrow-icon" />
                </div>
              </div>
            </div>
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
              <div className="filter-icon-wrapper">
                <img src="https://chicksgold.com/icons/green-icons/filter.svg" alt="" className="control-icon" />
              </div>
              <div className="sort-value">
                <span className="sort-label">Sort By</span>
                <div className="sort-content">
                  <span>Featured</span>
                  <img src="https://chicksgold.com/icons/arrow-white.svg" alt="" className="arrow-icon" />
                </div>
              </div>
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