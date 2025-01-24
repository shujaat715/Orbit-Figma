import React from 'react';
import './IntroSection_BenefitsSection.css';

const IntroSection_BenefitsSection = ({ 
  userName = "Jacob",
  userRole = "ACME",
  industry = "financial services"
}) => {
  return (
    <div className="intro-benefits-container">
      <div className="intro-section">
        <div className="isblogo-container">
          <img src="https://dashboard.codeparrot.ai/api/image/Z5D1DnhIZI-ZK8bk/nexer-1.png" alt="Nexer Logo" className="logo-image" />
        </div>
        
        <p className="intro-text">
          Hey {userName} - Because of your role at {userRole} and network across {industry} we 
          think you might know people at companies that would benefit from Nexer's services.
        </p>

        <button className="cta-button">
          Make an introduction now
        </button>
      </div>

      <div className="benefits-section">
        <h2 className="benefits-title">
          Help your network & get them exclusive discounts
        </h2>
        
        <p className="discount-text">
          Your referral earns anyone your introduce a 10% discount for their 
          first 6 months of work with Nexer
        </p>

        <h3 className="reward-title">
          Earn up to £5000
        </h3>

        <p className="reward-text">
          If you're introduction results in a partnership you will earn a 
          thank you payment of £5000
        </p>
      </div>
    </div>
  );
};

export default IntroSection_BenefitsSection;

