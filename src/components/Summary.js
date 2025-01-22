import React from 'react';
import './Summary.css';

const Summary = ({ introductions = 4, active = 1, closed = 1 }) => {
  return (
    <div className="summary-container">
      {/* Introductions Section */}
      <div className="summary-section">
        <div className="icon-container">
          <img src="https://dashboard.codeparrot.ai/api/image/Z4_LvhlhS4ds4FDV/group-10.png" alt="Introductions" className="icon" />
        </div>
        <div className="text-container">
          <span className="label">Introductions</span>
          <span className="value">{introductions}</span>
        </div>
        <div className="divider"></div>
      </div>

      {/* Active Section */}
      <div className="summary-section">
        <div className="icon-container">
          <img src="https://dashboard.codeparrot.ai/api/image/Z4_LvhlhS4ds4FDV/group-10-2.png" alt="Active" className="icon" />
        </div>
        <div className="text-container">
          <span className="label">Active</span>
          <span className="value">{active}</span>
        </div>
        <div className="divider"></div>
      </div>

      {/* Closed Section */}
      <div className="summary-section">
        <div className="icon-container">
          <img src="https://dashboard.codeparrot.ai/api/image/Z4_LvhlhS4ds4FDV/group-10-3.png" alt="Closed" className="icon" />
        </div>
        <div className="text-container">
          <span className="label">Closed</span>
          <span className="value">{closed}</span>
        </div>
      </div>
    </div>
  );
};

Summary.defaultProps = {
  introductions: 4,
  active: 1,
  closed: 1,
};

export default Summary;

