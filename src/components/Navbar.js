/* src/components/Navbar.js */
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
       
        <li><Link to="/email">Email </Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/landing-page">Landing-page</Link></li>
        <li><Link to="/dashboard-introductions">Dashboard-Introductions</Link></li>
        <li><Link to="/dashboard-new-introductions">Dashboard-New-Introductions</Link></li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
