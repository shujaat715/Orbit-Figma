import React from 'react';
import './NewIntroductionNexer.css';

const NewIntroductionNexer = ({
  onNewIntroduction,
  onTrackIntroductions,
  onFindCompanies,
  onSettings,
  onPayment,
  onAccount,
  onHelp,
}) => {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="ninlogo-container">
          <img
            src="https://dashboard.codeparrot.ai/api/image/Z5HonfA8XwfbJP7a/orbit-lo.png"
            alt="Orbit Logo"
            className="orbit-logo"
          />
        </div>

        <div className="menu-container">
          <span className="menu-label">MENU</span>

          <div className="menu-item active" onClick={onNewIntroduction}>
            <img
              src="https://dashboard.codeparrot.ai/api/image/Z5HonfA8XwfbJP7a/iconly-b-7.png"
              alt="New"
              className="menu-icon"
            />
            <span>New introduction</span>
          </div>

          <div className="menu-item" onClick={onTrackIntroductions}>
            <img
              src="https://dashboard.codeparrot.ai/api/image/Z5HonfA8XwfbJP7a/iconly-b-6.png"
              alt="Track"
              className="menu-icon"
            />
            <span>Track introductions</span>
          </div>

          <div className="menu-item" onClick={onFindCompanies}>
            <img
              src="https://dashboard.codeparrot.ai/api/image/Z5HonfA8XwfbJP7a/iconly-b-5.png"
              alt="Find"
              className="menu-icon"
            />
            <span>Find companies</span>
          </div>

          <span className="menu-label others-label">OTHERS</span>

          <div className="menu-item" onClick={onSettings}>
            <img
              src="https://dashboard.codeparrot.ai/api/image/Z5HonfA8XwfbJP7a/iconly-b-4.png"
              alt="Settings"
              className="menu-icon"
            />
            <span>Settings</span>
          </div>

          <div className="menu-item" onClick={onPayment}>
            <img
              src="https://dashboard.codeparrot.ai/api/image/Z5HonfA8XwfbJP7a/iconly-b-3.png"
              alt="Payment"
              className="menu-icon"
            />
            <span>Payment</span>
          </div>

          <div className="menu-item" onClick={onAccount}>
            <img
              src="https://dashboard.codeparrot.ai/api/image/Z5HonfA8XwfbJP7a/iconly-b-2.png"
              alt="Account"
              className="menu-icon"
            />
            <span>Account</span>
          </div>

          <div className="menu-item" onClick={onHelp}>
            <img
              src="https://dashboard.codeparrot.ai/api/image/Z5HonfA8XwfbJP7a/iconly-b.png"
              alt="Help"
              className="menu-icon"
            />
            <span>Help</span>
          </div>
        </div>
      </div>

      <div className="form-container">
        <h1>New Introduction to Nexer</h1>
        <div className="form-section">
          <div className="form-group">
            <input type="text" placeholder="Campaign name" />
          </div>
          <div className="form-group">
            <input type="date" />
          </div>
          <div className="form-group">
            <input type="date" />
          </div>
        </div>
        <div className="form-section">
          <h2>Target</h2>
          <div className="form-group">
            <input type="radio" id="general" name="target" />
            <label htmlFor="general">General</label>
          </div>
          <div className="form-group">
            <input type="radio" id="targeted" name="target" />
            <label htmlFor="targeted">Targeted</label>
          </div>
          <div className="form-group">
            <input type="checkbox" id="company" />
            <label htmlFor="company">Company</label>
          </div>
          <div className="form-group">
            <input type="checkbox" id="person" />
            <label htmlFor="person">Person</label>
          </div>
          <div className="form-group">
            <input type="checkbox" id="sector" />
            <label htmlFor="sector">Sector/Industry</label>
          </div>
          <input type="text" placeholder="Name" />
        </div>
        <div className="form-section">
          <h2>Incentive</h2>
          <div className="form-group">
            <input type="radio" id="fixed" name="incentive" />
            <label htmlFor="fixed">Fixed fee</label>
          </div>
          <div className="form-group">
            <input type="radio" id="percentage" name="incentive" />
            <label htmlFor="percentage">Percentage</label>
          </div>
          <input type="text" placeholder="Amount or %" />
          <p>
            Conditions e.g: paid on first year's revenue. Tiered percentage
            based on contract value
          </p>
        </div>
        <div className="form-section">
          <h2>Buyer Incentive</h2>
          <p>
            Unique offer available to the buyer as a result of this referral.
            Eg: 10% discount on the first 6 months. Or additional services
            provided at no cost
          </p>
        </div>
      </div>
    </div>
  );
};

NewIntroductionNexer.defaultProps = {
  onNewIntroduction: () => {},
  onTrackIntroductions: () => {},
  onFindCompanies: () => {},
  onSettings: () => {},
  onPayment: () => {},
  onAccount: () => {},
  onHelp: () => {},
};

export default NewIntroductionNexer;
