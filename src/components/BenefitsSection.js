import React from 'react';
import './BenefitsSection.css';

const BenefitsSection = () => {
  return (
    <div className="Bbenefits-container">
      <img 
        src="https://dashboard.codeparrot.ai/api/image/Z5ZlJcAVJ0Xbb6G0/group-9.png" 
        alt="Background" 
        className="benefits-background-image" 
      />
      <div className="benefits-content">
        <h1 className="benefits-heading">Everyone benefits from<br />your introductions</h1>
        <p className="benefits-intro-text">
          With your introduction, your network receive an exclusive discount, making it even easier for them to access Nexer's services.<br /><br />
          You strengthen your network and earn a well-deserved thank-you.
        </p>

        <div className="steps-container">
          <div className="step">
            <img 
              src="https://dashboard.codeparrot.ai/api/image/Z5ZlJcAVJ0Xbb6G0/healthic.png" 
              alt="Search" 
              className="step-icon" 
            />
            <p>Look out for people or companies you know that could benefit from Nexer's services</p>
          </div>

          <div className="step">
            <img 
              src="https://dashboard.codeparrot.ai/api/image/Z5ZlJcAVJ0Xbb6G0/group-2.png" 
              alt="Chat" 
              className="step-icon" 
            />
            <p>Log them in Orbit - it only takes a minute.<br />Then make the introduction in the way that feels best to you—email, LinkedIn, or even a quick call.</p>
          </div>

          <div className="step">
            <img 
              src="https://dashboard.codeparrot.ai/api/image/Z5ZlJcAVJ0Xbb6G0/mdi-pres.png" 
              alt="Gift" 
              className="step-icon" 
            />
            <p>That's it. Nexer will take it from here.<br /><br />
            If they become a client, they'll get a discount thanks to you, and you'll earn a thank-you payment!<br /><br />
            It's a win-win!</p>
          </div>
        </div>

        <button 
          className="benefits-button"
          onClick={() => console.log('Make introduction clicked')}
        >
          Make a introduction now
        </button>
      </div>
    </div>
  );
};

export default BenefitsSection;
