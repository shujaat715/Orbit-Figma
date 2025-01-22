import React from "react";
import "./IntroSteps.css";

const IntroSteps = () => {
  const steps = [
    {
      number: "1",
      text: "Look out for people or companies you know that could benefit from Nexer's services",
    },
    {
      number: "2",
      text: "Choose how to introduce them: email, LinkedIn, or a quick call. We'll even provide tips to make it simple.",
    },
    {
      number: "3",
      text: "That's it, Nexer will take it from here.\n\nIt's a win-win!",
    },
  ];
  return (
    <div className="intro-container">
      {steps.map((step, index) => (
        <div key={index} className="step-row">
          <div className="step-number">{step.number}</div>
          <div className="step-text">{step.text}</div>
        </div>
      ))}
    </div>
  );
};

export default IntroSteps;