import React from "react";
import "./IntroductionHero.css";
import laptop from "../img/laptop.png";
import screen from "../img/screen.png";

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
            Hey {userName} - if you're ready to help your network and make an
            introduction to {companyName}
          </h1>
          <button className="Hcta-button">Click here</button>
          <p className="sub-text">
            Or to find out more about how introductions work, keep reading
          </p>
        </div>

        <div style={{ position: "relative" }}>
          <img src={laptop} />
          <img
            src={screen}
            style={{ position: "absolute", left: "95px", top: "24px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default IntroductionHero;
