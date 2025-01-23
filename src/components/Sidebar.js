import React from "react";
import PropTypes from "prop-types";
import "./Sidebar.css";

const Sidebar = () => {
  const menuItems = [
    {
      id: "new",
      label: "New introduction",
      icon: "https://dashboard.codeparrot.ai/api/image/Z5CFhMFg4WXPOX3G/iconly-b-7.png",
      isActive: true,
    },
    {
      id: "track",
      label: "Track introductions",
      icon: "https://dashboard.codeparrot.ai/api/image/Z5CFhMFg4WXPOX3G/iconly-b-6.png",
    },
    {
      id: "find",
      label: "Find companies",
      icon: "https://dashboard.codeparrot.ai/api/image/Z5CFhMFg4WXPOX3G/iconly-b-5.png",
    },
  ];
  const otherItems = [
    {
      id: "settings",
      label: "Settings",
      icon: "https://dashboard.codeparrot.ai/api/image/Z5CFhMFg4WXPOX3G/iconly-b-4.png",
    },
    {
      id: "payment",
      label: "Payment",
      icon: "https://dashboard.codeparrot.ai/api/image/Z5CFhMFg4WXPOX3G/iconly-b-3.png",
    },
    {
      id: "account",
      label: "Account",
      icon: "https://dashboard.codeparrot.ai/api/image/Z5CFhMFg4WXPOX3G/iconly-b-2.png",
    },
    {
      id: "help",
      label: "Help",
      icon: "https://dashboard.codeparrot.ai/api/image/Z5CFhMFg4WXPOX3G/iconly-b.png",
    },
  ];
  return (
    <div className="sidebar">
      <div className="logo-container">
        <img
          src="https://dashboard.codeparrot.ai/api/image/Z5CFhMFg4WXPOX3G/orbit-lo.png"
          alt="Orbit Logo"
          className="logo"
        />
      </div>

      <nav className="menu">
        <span className="menu-label">MENU</span>
        <ul className="menu-list">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`menu-item ${item.isActive ? "active" : ""}`}
            >
              <img src={item.icon} alt="" className="menu-icon" />
              <span className="menu-text">{item.label}</span>
            </li>
          ))}
        </ul>

        <span className="menu-label others-label">OTHERS</span>
        <ul className="menu-list">
          {otherItems.map((item) => (
            <li key={item.id} className="menu-item">
              <img src={item.icon} alt="" className="menu-icon" />
              <span className="menu-text">{item.label}</span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

Sidebar.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      isActive: PropTypes.bool,
    })
  ),
  otherItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ),
};

export default Sidebar;
