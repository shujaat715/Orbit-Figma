import React from 'react';
import './IntroductionH.css';

const IntroductionH = ({ 
  title = "Ready to introduce people who need Nexer's help?",
  buttonText = "Make a introduction now",
  onButtonClick = () => {}
}) => {
  return (
    <div className="introduction-hero">
      <h1 className="introduction-hero__title">
        {title}
      </h1>
      <button 
        className="introduction-hero__cta"
        onClick={onButtonClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default IntroductionH;

