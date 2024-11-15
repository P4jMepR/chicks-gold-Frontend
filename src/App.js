import React from 'react';
import Header from './components/Header/Header';
import MarketGrid from './components/MarketGrid/MarketGrid';
import Footer from './components/Footer/Footer';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <div className="background-image" />
      <Header />
      <main className="main-content">
        <MarketGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
