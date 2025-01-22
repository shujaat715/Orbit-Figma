import React from 'react';
import './OrbitReputation.css';

const OrbitReputation = () => {
  return (
    <div className="orbit-container">
      <h1 className="orbit-title">
        Use Orbit to enhance your professional reputation
      </h1>
      
      <div className="orbit-description">
        <p>
          When you make an introduction, you're solving a problem for your network by connecting them to trusted expertise.
        </p>
        <p>
          Your recommendation gives them access to services they might not have found otherwise. And thanks to you, at a reduced cost.
        </p>
      </div>

      <div className="features-container">
        <div className="feature-card">
          <h2>It's About Trust and Integrity</h2>
          <p>
            Relationships matter. That's why we ensure every introduction is handled professionally and transparently.
          </p>
          <p>
            Nexer only works with clients where there's a genuine need, so your network benefits from a valuable service, not a sales pitch.
          </p>
        </div>

        <div className="feature-card">
          <h2>Recognition for Your Effort</h2>
          <p>
            Introductions take thought and trust. By connecting people to a solution, you're doing more than sharing a name—you're leveraging your reputation to create opportunities.
          </p>
          <p>
            Thank-you payments reflect the role you've played in making that connection happen.
          </p>
        </div>

        <div className="feature-card">
          <h2>Introductions are Common Practice</h2>
          <p>
            Commissions for introductions are widely accepted in many industries as a way to recognise and reward people for creating opportunities.
          </p>
          <p>
            If you've ever recommended a great product or service, this is the same idea—with a little extra appreciation.
          </p>
        </div>
      </div>
    </div>
  );
};

// Default props
OrbitReputation.defaultProps = {
  title: "Use Orbit to enhance your professional reputation",
  description: {
    part1: "When you make an introduction, you're solving a problem for your network by connecting them to trusted expertise.",
    part2: "Your recommendation gives them access to services they might not have found otherwise. And thanks to you, at a reduced cost."
  },
  features: [
    {
      title: "It's About Trust and Integrity",
      content: ["Relationships matter. That's why we ensure every introduction is handled professionally and transparently.",
                "Nexer only works with clients where there's a genuine need, so your network benefits from a valuable service, not a sales pitch."]
    },
    {
      title: "Recognition for Your Effort",
      content: ["Introductions take thought and trust. By connecting people to a solution, you're doing more than sharing a name—you're leveraging your reputation to create opportunities.",
                "Thank-you payments reflect the role you've played in making that connection happen."]
    },
    {
      title: "Introductions are Common Practice",
      content: ["Commissions for introductions are widely accepted in many industries as a way to recognise and reward people for creating opportunities.",
                "If you've ever recommended a great product or service, this is the same idea—with a little extra appreciation."]
    }
  ]
};

export default OrbitReputation;

