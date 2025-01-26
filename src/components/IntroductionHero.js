import React from 'react';
import './IntroductionHero.css';

const IntroductionHero = ({ userName = "Jacob", companyName = "Nexer" }) => {
  return (
    <div className="hero-container">
      <nav className="main-menu">
        <img 
          src="https://dashboard.codeparrot.ai/api/image/Z5ZjrMAVJ0Xbb6Gz/orbit-lo.png" 
          alt="Orbit Logo" 
          className="orbit-logo"
        />
        <div className="nav-right">
          <div className="Hintro-button">
            <span>Make introduction</span>
          </div>
          <div className="nav-links">
            <a href="#how">How it works</a>
            <a href="#faqs">FAQs</a>
            <a href="#contact">Get in touch</a>
          </div>
        </div>
      </nav>

      <div className="content-section">
        <div className="left-content">
          <img 
            src="https://dashboard.codeparrot.ai/api/image/Z5ZjrMAVJ0Xbb6Gz/logo.png" 
            alt="Company Logo" 
            className="company-logo"
          />
          <h1 className="Hintro-text">
            Hey {userName} - if you're ready to help your network and make an introduction to {companyName}
          </h1>
          <button className="Hcta-button">
            Click here
          </button>
          <p className="sub-text">
            Or to find out more about how introductions work, keep reading
          </p>
        </div>

        <div className="macbook-preview">
          <div className="macbook-lid">
            <div className="screen-wrap">
              <div className="dark-screen">
                <img 
                  src="https://dashboard.codeparrot.ai/api/image/Z5ZjrMAVJ0Xbb6Gz/screensh.png" 
                  alt="Screenshot" 
                  className="screen-content"
                />
              </div>
            </div>
          </div>
          <div className="macbook-bottom"></div>
          <div className="macbook-shadow"></div>
          <span className="macbook-label">Macbook Air</span>
        </div>
      </div>
    </div>
  );
};

export default IntroductionHero;
