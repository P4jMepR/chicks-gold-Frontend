import React from 'react';
import './Pagination.css';

const Pagination = () => {
  return (
    <div className="pagination">
      <button className="pagination-btn prev">
        <span>←</span>
      </button>
      <div className="pagination-numbers">
        <button className="pagination-btn active">1</button>
        <button className="pagination-btn">2</button>
        <button className="pagination-btn">3</button>
        <button className="pagination-btn">4</button>
        <span className="pagination-ellipsis">...</span>
        <button className="pagination-btn">11</button>
      </div>
      <button className="pagination-btn next">
        <span>→</span>
      </button>
    </div>
  );
};

export default Pagination; 