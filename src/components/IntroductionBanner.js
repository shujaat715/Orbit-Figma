import React from "react";
import "./IntroductionBanner.css";

const IntroductionBanner = ( ) => {
  const title = "Ready to introduce people who need Nexer's help?";
  const buttonText = "Make an introduction now";
  return (
    <div className="introduction-banner">
      <h1 className="introduction-title">{title}</h1>
      <button className="introduction-cta">{buttonText}</button>
    </div>
  );
};

export default IntroductionBanner;
