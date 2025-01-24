import React from "react";
import "./StepsSection.css";

const StepsSection = () => {
  const backgroundColor = "#ffffff";

  const steps = [
    {
      icon: "https://dashboard.codeparrot.ai/api/image/Z5D1DnhIZI-ZK8bk/healthic.png",
      text: "Look out for people or companies you know that could benefit from Nexer's services",
    },
    {
      icon: "https://dashboard.codeparrot.ai/api/image/Z5D1DnhIZI-ZK8bk/intro.png",
      text: "Choose how you'll introduce them: email, LinkedIn, or a quick call. We'll even provide tips to make it simple.",
    },
    {
      icon: "https://dashboard.codeparrot.ai/api/image/Z5D1DnhIZI-ZK8bk/mdi-pres.png",
      text: "That's it, Nexer will take it from here.\n\nIt's a win-win!",
    },
  ];

  return (
    <section className="steps-section" style={{ backgroundColor }}>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step-card">
            <div className="icon-container">
              <img
                src={step.icon}
                alt={`Step ${index + 1}`}
                className="Sstep-icon"
                width={index === 0 ? "81" : index === 1 ? "80" : "80"}
                height={index === 0 ? "81" : index === 1 ? "80" : "80"}
              />
            </div>
            <p className="Sstep-text">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StepsSection;
