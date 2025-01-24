import React from "react";
import "./Intros3es.css";

const Intros3es = () => {
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
    <div className="intro3-container">
      {steps.map((step, index) => (
        <div key={index} className="step3-row">
          <div className="step3-number">{step.number}</div>
          <div className="step3-text">{step.text}</div>
        </div>
      ))}
    </div>
  );
};

export default Intros3es;