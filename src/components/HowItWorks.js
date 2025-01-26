import React from 'react';
import './HowitWorks.css';

const HowitWorks = () => {
  return (
    <div className="howitworks-container">
      <h1 className="howitworks-title">How making an introduction works</h1>
      
      <div className="howitworks-card-container">
        <div className="howitworks-card">
          <img 
            src="https://dashboard.codeparrot.ai/api/image/Z5Y6VcAVJ0Xbb6Ge/healthic.png" 
            alt="Search" 
            className="howitworks-icon"
          />
          <p>Look out for people or companies you know that could benefit from Nexer's services</p>
        </div>

        <div className="howitworks-card">
          <img 
            src="https://dashboard.codeparrot.ai/api/image/Z5Y6VcAVJ0Xbb6Ge/group-2.png" 
            alt="Communication" 
            className="howitworks-icon"
          />
          <p>Choose how to introduce them: email, LinkedIn, or a quick call. We'll even provide tips to make it simple.</p>
        </div>

        <div className="howitworks-card">
          <img 
            src="https://dashboard.codeparrot.ai/api/image/Z5Y6VcAVJ0Xbb6Ge/vector.png" 
            alt="Gift" 
            className="howitworks-icon"
          />
          <p>That's it, Nexer will take it from here.
          <br /><br />
          If they become a client, you've helped them, they'll get a discount thanks to you, and you'll earn a thank-you payment!
          <br /><br />
          It's a win-win!</p>
        </div>
      </div>
    </div>
  );
};

export default HowitWorks;
