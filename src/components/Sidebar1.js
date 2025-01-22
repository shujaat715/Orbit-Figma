import React from 'react';
import PropTypes from 'prop-types';
import './Sidebar1.css';

const Sidebar1 = ({ activeItem }) => {
  return (
    <div className="sidebar1">
      <div className="logo">
        <img src="https://dashboard.codeparrot.ai/api/image/Z4_LvhlhS4ds4FDV/orbit-lo.png" alt="Orbit Logo" width="149" height="82" />
      </div>
      
      <nav className="menu">
        <span className="menu-label">MENU</span>
        
        <div className="menu-items">
          <div className={`menu-item ${activeItem === 'new' ? 'active' : ''}`}>
            <img src="https://dashboard.codeparrot.ai/api/image/Z4_LvhlhS4ds4FDV/iconly-b-7.png" alt="New" width="18" height="17" />
            <span>New introduction</span>
          </div>

          <div className={`menu-item ${activeItem === 'track' ? 'active' : ''}`}>
            <img src="https://dashboard.codeparrot.ai/api/image/Z4_LvhlhS4ds4FDV/iconly-b-6.png" alt="Track" width="18" height="17" />
            <span>Track introductions</span>
          </div>

          <div className={`menu-item ${activeItem === 'find' ? 'active' : ''}`}>
            <img src="https://dashboard.codeparrot.ai/api/image/Z4_LvhlhS4ds4FDV/iconly-b-5.png" alt="Find" width="18" height="17" />
            <span>Find companies</span>
          </div>
        </div>

        <span className="menu-label others-label">OTHERS</span>
        
        <div className="menu-items">
          <div className={`menu-item ${activeItem === 'settings' ? 'active' : ''}`}>
            <img src="https://dashboard.codeparrot.ai/api/image/Z4_LvhlhS4ds4FDV/iconly-b-4.png" alt="Settings" width="18" height="17" />
            <span>Settings</span>
          </div>

          <div className={`menu-item ${activeItem === 'payment' ? 'active' : ''}`}>
            <img src="https://dashboard.codeparrot.ai/api/image/Z4_LvhlhS4ds4FDV/iconly-b-3.png" alt="Payment" width="18" height="17" />
            <span>Payment</span>
          </div>

          <div className={`menu-item ${activeItem === 'account' ? 'active' : ''}`}>
            <img src="https://dashboard.codeparrot.ai/api/image/Z4_LvhlhS4ds4FDV/iconly-b-2.png" alt="Account" width="18" height="17" />
            <span>Account</span>
          </div>

          <div className={`menu-item ${activeItem === 'help' ? 'active' : ''}`}>
            <img src="https://dashboard.codeparrot.ai/api/image/Z4_LvhlhS4ds4FDV/iconly-b.png" alt="Help" width="18" height="17" />
            <span>Help</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

Sidebar1.propTypes = {
  activeItem: PropTypes.string,
};

Sidebar1.defaultProps = {
  activeItem: 'track',
};

export default Sidebar1;

