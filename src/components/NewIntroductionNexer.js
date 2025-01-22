import React from 'react';
import './NewIntroductionNexer.css';

const NewIntroductionNexer = ({ 
  onNewIntroduction,
  onTrackIntroductions,
  onFindCompanies,
  onSettings,
  onPayment,
  onAccount,
  onHelp
}) => {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="logo-container">
          <img src="https://dashboard.codeparrot.ai/api/image/Z5CShQa3lv04CQFH/orbit-lo.png" alt="Orbit Logo" className="Norbit-logo" />
        </div>
        
        <div className="menu-container">
          <span className="menu-label">MENU</span>
          
          <div className="menu-item active">
            <img src="https://dashboard.codeparrot.ai/api/image/Z5CShQa3lv04CQFH/iconly-b-7.png" alt="New" className="menu-icon" />
            <span>New introduction</span>
          </div>
          
          <div className="menu-item">
            <img src="https://dashboard.codeparrot.ai/api/image/Z5CShQa3lv04CQFH/iconly-b-6.png" alt="Track" className="menu-icon" />
            <span>Track introductions</span>
          </div>
          
          <div className="menu-item">
            <img src="https://dashboard.codeparrot.ai/api/image/Z5CShQa3lv04CQFH/iconly-b-5.png" alt="Find" className="menu-icon" />
            <span>Find companies</span>
          </div>
          
          <span className="menu-label others-label">OTHERS</span>
          
          <div className="menu-item">
            <img src="https://dashboard.codeparrot.ai/api/image/Z5CShQa3lv04CQFH/iconly-b-4.png" alt="Settings" className="menu-icon" />
            <span>Settings</span>
          </div>
          
          <div className="menu-item">
            <img src="https://dashboard.codeparrot.ai/api/image/Z5CShQa3lv04CQFH/iconly-b-3.png" alt="Payment" className="menu-icon" />
            <span>Payment</span>
          </div>
          
          <div className="menu-item">
            <img src="https://dashboard.codeparrot.ai/api/image/Z5CShQa3lv04CQFH/iconly-b-2.png" alt="Account" className="menu-icon" />
            <span>Account</span>
          </div>
          
          <div className="menu-item">
            <img src="https://dashboard.codeparrot.ai/api/image/Z5CShQa3lv04CQFH/iconly-b.png" alt="Help" className="menu-icon" />
            <span>Help</span>
          </div>
        </div>
      </div>
<div>
      <div className="main-content">
        <h1 className="page-title">New Introduction to Nexer</h1>
        <div className="content-area">
          <img 
            src="https://dashboard.codeparrot.ai/api/image/Z5CShQa3lv04CQFH/screensh.png" 
            alt="Dashboard Screenshot" 
            className="dashboard-screenshot"
          />
        </div>
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
  onHelp: () => {}
};

export default NewIntroductionNexer;
