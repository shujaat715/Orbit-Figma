import React from 'react';
import './FinalCTASection.css';

const FinalCTASection = ({ title, buttonText }) => {
  return (
    <div className="final-cta-container">
      <div className="final-cta-content">
        <h2 className="final-cta-title">
          {title}
        </h2>
        <button className="final-cta-button">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

FinalCTASection.defaultProps = {
  title: "Ready to introduce people who need Nexer's help?",
  buttonText: "Make an introduction now"
};

export default FinalCTASection;
