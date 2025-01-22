
/* src/pages/Email.js */
import React from 'react';
import './Email.css'; // Add custom styles here if needed
import EmailTemplate from '../components/EmailTemplate';


const Email = () => {
     
  return (
    <div className="email-page">
      {/* Email Template Section */}
      <div className="email-section">
        <EmailTemplate />
      </div>
      
      
    </div>
  );
};

export default Email;