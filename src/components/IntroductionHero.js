import React from 'react';
import './IntroductionHero.css';

const IntroductionHero = ({ userName = "Jacob", companyName = "Nexer" }) => {
  return (
    <div className="hero-container">
      <nav className="main-menu">
        <img src="https://dashboard.codeparrot.ai/api/assets/Z4qERa44F0YMkTZB" alt="Orbit Logo" className="orbit-logo" />
        <div className="nav-right">
          <div className="intro-button">
            <span>Make introduction</span>
          </div>
          <div className="nav-links">
            <a href="#how">How it works</a>
            <a href="#faqs">FAQs</a>
            <a href="#contact">Get in touch</a>
          </div>
        </div>
      </nav>

      <div className="content-wrapper">
        <div className="left-content">
          <div className="company-logo">
            <img src="https://dashboard.codeparrot.ai/api/assets/Z4qERa44F0YMkTZC" alt="Company Logo" />
          </div>
          <h1 className="intro-heading">
            Hey {userName} - if you're ready to help your network and make an introduction to {companyName}
          </h1>
          <button className="cta-button">Click here</button>
          <p className="sub-text">
            Or to find out more about how introductions work, keep reading
          </p>
        </div>

        <div className="macbook-preview">
          <div className="macbook-lid">
            <div className="dark-screen">
              <div className="screen-wrap">
                <div className="screen">
                  <img src="https://dashboard.codeparrot.ai/api/assets/Z4qERa44F0YMkTZD" alt="Screenshot" className="screenshot" />
                </div>
              </div>
            </div>
          </div>
          <div className="macbook-bottom">
            <img src="https://dashboard.codeparrot.ai/api/assets/Z4qERa44F0YMkTZE" alt="Bottom" />
          </div>
          <div className="macbook-shadow"></div>
          <span className="device-label">Macbook Air</span>
        </div>
      </div>
    </div>
  );
};

export default IntroductionHero;

