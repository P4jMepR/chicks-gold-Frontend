import React from 'react';
import Card from '../Card/Card';
import Pagination from '../Pagination/Pagination';
import './MarketGrid.css';

const baseItems = [
  {
    title: 'Blue PartyHat',
    basePrice: 450.00,
    image: 'https://chicks-products.s3.amazonaws.com/2de94590-b836-4d2a-9d15-575c35f38892',
    stock: 156,
    delivery: 'Instant Delivery',
    gameIcon: './game-icons/wow_icon.svg'
  },
  {
    title: 'Mythical Shield',
    basePrice: 299.99,
    image: './game-icons/fort_shield.webp',
    stock: 42,
    delivery: 'Instant Delivery',
    gameIcon: './game-icons/ffantasy_icon.png'
  },
  {
    title: 'Tempered AK',
    basePrice: 725.00,
    image: 'https://chicks-products.s3.amazonaws.com/1a1f2574-d066-4f63-9f69-de902c3ec79e',
    stock: 8,
    delivery: 'Instant Delivery',
    gameIcon: './game-icons/rust_icon.png'
  }
];

const generateVariations = (baseItems, count) => {
  const variations = [];
  const itemsPerType = Math.floor(count / baseItems.length);

  baseItems.forEach((baseItem, index) => {
    for (let i = 0; i < itemsPerType; i++) {
      // Randomized product properties
      const hasPrice = Math.random() > 0.2; // 80% chance for price
      const isOnSale = hasPrice && Math.random() > 0.5; // 50% chance on sale if price is defined
      const priceVariation = 0.9 + Math.random() * 0.2; // Price +/- 10% from base 

      const basePrice = baseItem.basePrice * priceVariation;
      const saleDiscount = 0.1 + Math.random() * 0.2; // 10-30% discount

      const variation = {
        ...baseItem,
        id: index * itemsPerType + i,
        price: hasPrice ? Number(basePrice.toFixed(2)) : null,
        originalPrice: isOnSale ? Number((basePrice * (1 + saleDiscount)).toFixed(2)) : null,
        onSale: isOnSale
      };

      variations.push(variation);
    }
  });

  return variations;
};

const MarketGrid = () => {
  const items = generateVariations(baseItems, 15);

  return (
    <>
      <div className="filters-section">
        <h1>Condimentum consectetur</h1>
        <div className="filters-controls">
          <div className="select-game">
            <img src="./icons/sword.webp" alt="" className="control-icon" />
            Select a game
            <img src="./icons/arrow-white.svg" alt="" className="arrow-icon" />
          </div>
          <div className="search-bar">
            <img src="./icons/search_icon.svg" alt="Search" className="search-icon" />
            <input type="text" placeholder="Search" />
          </div>
          <div className="filters">
            <div className="filter-dropdown">
              <div className="filter-icon-wrapper">
                <img src="./icons/item-bag.svg" alt="" className="control-icon" />
              </div>
              <div className="filter-value">
                <span className="filter-label">Price</span>
                <div className="filter-content">
                  <span>All</span>
                  <img src="./icons/arrow-white.svg" alt="" className="arrow-icon" />
                </div>
              </div>
            </div>
            
            <div className="filter-dropdown">
              <div className="filter-icon-wrapper">
                <img src="./icons/feather.svg" alt="" className="control-icon" />
              </div>
              <div className="filter-value">
                <span className="filter-label">Item Type</span>
                <div className="filter-content">
                  <span>All</span>
                  <img src="./icons/arrow-white.svg" alt="" className="arrow-icon" />
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
                <img src="./icons/filter.svg" alt="" className="control-icon" />
              </div>
              <div className="sort-value">
                <span className="sort-label">Sort By</span>
                <div className="sort-content">
                  <span>Featured</span>
                  <img src="./icons/arrow-white.svg" alt="" className="arrow-icon" />
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