import React from 'react';
import './IntroCard.css';

const IntroCard = ({ userName = "Jacob", companyName = "ACME" }) => {
  return (
    <div className="intro-card">
      <div className="logo-container">
        <img src="https://dashboard.codeparrot.ai/api/image/Z5DziXhIZI-ZK8bh/nexer-1.png" alt="Nexer Logo" className="nexer-logo" />
      </div>
      <p className="intro-text">
        Hey {userName} - Because of your role at {companyName} and network across financial services we think you might know people at companies that would benefit from Nexer's services.
      </p>
    </div>
  );
};

export default IntroCard;

