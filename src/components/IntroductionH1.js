import React from 'react';
import './IntroductionH1.css';

const IntroductionH1 = ({ 
  title = "Ready to introduce people who need Nexer's help?",
  buttonText = "Make a introduction now",
  onButtonClick = () => {}
}) => {
  return (
    <div className="introduction1-hero">
      <h1 className="introduction1-hero__title">
        {title}
      </h1>
      <button 
        className="introduction1-hero__cta"
        onClick={onButtonClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default IntroductionH1;

