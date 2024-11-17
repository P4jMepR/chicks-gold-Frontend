import React from 'react';
import Payments from '../Payments/Payments';
import './Footer.css';

const SOCIAL_LINKS = [
  { href: '#facebook', icon: './social/facebook_white.svg', alt: 'Facebook' },
  { href: '#instagram', icon: './social/instagram_white.svg', alt: 'Instagram' },
  { href: '#twitter', icon: './social/old_twitter.svg', alt: 'Twitter' },
  { href: '#discord', icon: './social/discord_white.svg', alt: 'Discord' }
];

const FOOTER_SECTIONS = [
  {
    title: 'Chicks Gold',
    links: [
      { href: '#games', text: 'Games' },
      { href: '#about', text: 'About Us' },
      { href: '#blog', text: 'Blog' },
      { href: '#sitemap', text: 'Sitemap' }
    ]
  },
  {
    title: 'Support',
    links: [
      { href: '#contact', text: 'Contact Us' },
      { href: '#faq', text: 'FAQ' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { href: '#privacy', text: 'Privacy Policy' },
      { href: '#terms', text: 'Terms of Service' },
      { href: '#copyright', text: 'Copyright Policy' }
    ]
  }
];

const SocialIcons = () => (
  <div className="social-icons">
    {SOCIAL_LINKS.map(({ href, icon, alt }) => (
      <a key={href} href={href} className="social-icon">
        <img src={icon} alt={alt} />
      </a>
    ))}
  </div>
);

const FooterSection = ({ title, links }) => (
  <div className="footer-section">
    <h3>{title}</h3>
    <ul>
      {links.map(({ href, text }) => (
        <li key={href}>
          <a href={href}>{text}</a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => (
  <footer className="footer">
    <Payments />
    <div className="social-bar">
      <div className="social-content">
        <SocialIcons />
      </div>
    </div>

    <div className="footer-content">
      <div className="footer-section company">
        <img 
          src="./chicks-logo-large.svg" 
          alt="Chicks Gold" 
          className="footer-logo" 
        />
        <a href="mailto:support@chicksgold.com" className="support-email">
          support@chicksgold.com
        </a>
      </div>

      {FOOTER_SECTIONS.map(section => (
        <FooterSection key={section.title} {...section} />
      ))}

      <div className="footer-section reviews">
        <div className="trustpilot-reviews">
          {[...Array(5)].map((_, i) => (
            <img 
              key={i}
              src="./social/star_full.svg" 
              alt="Full Star" 
              className="star-rating" 
            />
          ))}
          <span className="review-text">Trustpilot Reviews</span>
        </div>
      </div>
    </div>
    
    <div className="footer-bottom">
      <p>© 2017 - 2020 Chicksgold.com. All Rights Reserved</p>
    </div>
  </footer>
);

export default Footer; 