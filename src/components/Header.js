import React from 'react';
import './Header.css';

const Header = ({ logoSrc, logoAlt, navLinks }) => {
  return (
    <nav className="header">
      <div className="header-container">
        <img 
          src={logoSrc}
          alt={logoAlt}
          className="header-logo"
          width={107}
          height={39}
        />
        
        <div className="nav-group">
          <div className="nav-links">
            {navLinks.map((link, index) => (
              <a key={index} href={link.href}>{link.text}</a>
            ))}
          </div>
          
          <button className="intro-button">
            Make introduction
          </button>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  logoSrc: "https://dashboard.codeparrot.ai/api/image/Z5D1DnhIZI-ZK8bk/orbit-lo.png",
  logoAlt: "Orbit Logo",
  navLinks: [
    { text: "How it works", href: "#how-it-works" },
    { text: "FAQs", href: "#faqs" },
    { text: "Get in touch", href: "#contact" }
  ]
};

export default Header;
