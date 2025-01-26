import React from 'react';
import './IntroSection.css';

const IntroSection = ({ userName = "Jacob", company = "ACME" }) => {
  return (
    <div className="ireferral-container">
      {/*  */}
      <div>
      <div className="ilogo-container">
        <img 
          src="https://dashboard.codeparrot.ai/api/image/Z5Y5Z8AVJ0Xbb6Gd/nexer-1.png" 
          alt="Nexer Logo" 
          className="inexer-logo"
        />
      </div>
      
      <div className="icontent-section">
        <div className="iintro-text">
          <p>Hey {userName} - Because of your role at {company} and network across financial services we think you might know people at companies that would benefit from Nexer's services.</p>
        </div>
        </div>
        {/*  */}
        {/*  */}
        <div>
        <div className="ibenefits-section">
          <div className="ibenefit-block">
            <h2>Help your network with exclusive discounts</h2>
            <p>Your referral earns a 10% discount for their first 6 months.</p>
          </div>
          </div>
          </div>
          </div>
        
          {/*  */}
          <div>
          <div className="ibenefit-block">
            <h2>Earn up to £5000</h2>
            <p>If you're introduction results in a partnership you will earn a thank you payment of £5000</p>
          </div>
          
        
      </div>
    </div>
  );
};

export default IntroSection;

