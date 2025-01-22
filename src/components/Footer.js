import React from 'react';
import './Footer.css';

const Footer = ({ backgroundColor = '#ffffff', borderColor = '#000000' }) => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#how-it-works" className="footer-link">How it works</a>
        <a href="#faqs" className="footer-link">FAQs</a>
        <a href="#contact" className="footer-link">Get in touch</a>
      </div>
    </footer>
  );
};

Footer.defaultProps = {
  backgroundColor: '#ffffff',
  borderColor: '#000000'
};

export default Footer;

