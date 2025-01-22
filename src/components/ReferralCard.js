import React from 'react';
import './ReferralCard.css';

const ReferralCard = ({ userName = 'Jacob', company = 'ACME' }) => {
  return (
    <div className="referral-card">
      <div className="logo-container">
        <img src="https://dashboard.codeparrot.ai/api/image/Z5C2Pr3EVBdKOl4s/nexer-1.png" alt="Nexer Logo" className="logo" />
      </div>
      
      <div className="content">
        <h1 className="title">Help your network</h1>
        
        <p className="intro-text">
          Hey {userName} - Because of your role at {company} and network across financial 
          services we think you might know people at companies that would benefit 
          from Nexer's services.
        </p>

        <h2 className="subtitle">Get them exclusive discounts</h2>
        
        <p className="discount-text">
          Your referral earns anyone your introduce a 10% discount for their 
          first 6 months.of work with Nexer
        </p>

        <h2 className="subtitle">Earn up to £5000</h2>
        
        <p className="reward-text">
          If you're introduction results in a partnership you will earn a thank you 
          payment of £5000
        </p>
      </div>
    </div>
  );
};

export default ReferralCard;

