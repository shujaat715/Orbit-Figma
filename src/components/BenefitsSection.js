import React from 'react';
import './BenefitsSection.css';

const BenefitsSection = ({ 
  title = "Everyone benefits from your introductions",
  subtitle = "With your introduction, your network receive an exclusive discount, making it even easier for them to access Nexer's services.",
  description = "You strengthen your network and earn a well-deserved thank-you.",
  steps = [
    {
      icon: "https://dashboard.codeparrot.ai/api/assets/Z4qCLhgaGNOSvOeV",
      text: "Look out for people or companies you know that could benefit from Nexer's services"
    },
    {
      icon: "https://dashboard.codeparrot.ai/api/assets/Z4qCLhgaGNOSvOeW",
      text: "Log them in Orbit - it only takes a minute. Then make the introduction in the way that feels best to you—email, LinkedIn, or even a quick call."
    },
    {
      icon: "https://dashboard.codeparrot.ai/api/assets/Z4qCLhgaGNOSvOeX",
      text: "That's it. Nexer will take it from here. If they become a client, they'll get a discount thanks to you, and you'll earn a thank-you payment! It's a win-win!"
    }
  ]
}) => {
  return (
    <div className="benefits-section">
      <div className="background-image">
        <img src="https://dashboard.codeparrot.ai/api/assets/Z4qCLhgaGNOSvOeY" alt="background" />
      </div>
      
      <div className="content-container">
        <h1 className="title">{title}</h1>
        <div className="subtitle-container">
          <p className="subtitle">{subtitle}</p>
          <p className="description">{description}</p>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <img src={step.icon} alt={`Step ${index + 1}`} className="step-icon" />
              <p className="step-text">{step.text}</p>
            </div>
          ))}
        </div>

        <button className="cta-button">
          Make a introduction now
        </button>
      </div>
    </div>
  );
};

export default BenefitsSection;

