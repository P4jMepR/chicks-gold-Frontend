import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-bar">
        <div className="social-content">
          <div className="social-icons">
            <a href="#facebook" className="social-icon">
              <img src="https://chicksgold.com/icons/facebook_white.svg" alt="Facebook" />
            </a>
            <a href="#instagram" className="social-icon">
              <img src="https://chicksgold.com/icons/instagram_white.svg" alt="Instagram" />
            </a>
            <a href="#twitter" className="social-icon">
              <img src="/old_twitter.svg" alt="Twitter" />
            </a>
            <a href="#discord" className="social-icon">
              <img src="https://chicksgold.com/icons/discord_white.svg" alt="Discord" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-section company">
          <img 
            src="https://chicksgold.com/logo/chicks-logo-large.svg" 
            alt="Chicks Gold" 
            className="footer-logo" 
          />
          <a href="mailto:support@chicksgold.com" className="support-email">
            support@chicksgold.com
          </a>
        </div>

        <div className="footer-section">
          <h3>Chicks Gold</h3>
          <ul>
            <li><a href="#games">Games</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#sitemap">Sitemap</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
            <li><a href="#copyright">Copyright Policy</a></li>
          </ul>
        </div>

        <div className="footer-section reviews">
          <div className="trustpilot-reviews">
            <img src="https://chicksgold.com/home/star_full.svg" alt="Full Star" className="star-rating" />
            <img src="https://chicksgold.com/home/star_full.svg" alt="Full Star" className="star-rating" />
            <img src="https://chicksgold.com/home/star_full.svg" alt="Full Star" className="star-rating" />
            <img src="https://chicksgold.com/home/star_full.svg" alt="Full Star" className="star-rating" />
            <img src="https://chicksgold.com/home/star_full.svg" alt="Full Star" className="star-rating" />
            <span className="review-text">Trustpilot Reviews</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2017 - 2020 Chicksgold.com. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer; 