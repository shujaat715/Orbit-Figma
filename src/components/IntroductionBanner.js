import React from 'react';
import './IntroductionBanner.css';

const IntroductionBanner = ({ title, buttonText }) => {
  return (
    <div className="introduction-banner">
      <h1 className="introduction-title">{title}</h1>
      <button className="introduction-cta">{buttonText}</button>
    </div>
  );
};

IntroductionBanner.defaultProps = {
  title: "Ready to introduce people who need Nexer's help?",
  buttonText: "Make an introduction now"
};

export default IntroductionBanner;

