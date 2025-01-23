import React from "react";
import "./FinalCTASection.css";

const FinalCTASection = () => {
  const title = "Ready to introduce people who need Nexer's help?";
  const buttonText = "Make an introduction now";
  return (
    <div className="final-cta-container">
      <div className="final-cta-content">
        <h2 className="final-cta-title">{title}</h2>
        <button className="final-cta-button">{buttonText}</button>
      </div>
    </div>
  );
};

export default FinalCTASection;
