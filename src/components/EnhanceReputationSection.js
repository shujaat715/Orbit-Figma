import React from 'react';
import './EnhanceReputationSection.css';

const EnhanceReputationSection = () => {
  return (
    <section className="enhance-reputation">
      <h1 className="enhance-reputation__title">
        Use introductions to enhance your professional reputation
      </h1>
      <p className="enhance-reputation__subtitle">
        When you make an introduction, you're solving a problem for your network by connecting them to trusted expertise.
        {'\n\n'}
        Your recommendation gives them access to services they might not have found otherwise. And thanks to you, at a reduced cost.
      </p>
      
      <div className="enhance-reputation__cards">
        <div className="enhance-reputation__card">
          <h2 className="enhance-reputation__card-title">
            It's About Trust and Integrity
          </h2>
          <p className="enhance-reputation__card-text">
            Relationships matter. That's why we ensure every introduction is handled professionally and transparently.
            {'\n\n'}
            Nexer only works with clients where there's a genuine need, so your network benefits from a valuable service, not a sales pitch.
          </p>
        </div>

        <div className="enhance-reputation__card">
          <h2 className="enhance-reputation__card-title">
            Recognition for Your Effort
          </h2>
          <p className="enhance-reputation__card-text">
            Introductions take thought and trust. By connecting people to a solution, you're doing more than sharing a name—you're leveraging your reputation to create opportunities.
            {'\n\n'}
            Thank-you payments reflect the role you've played in making that connection happen.
          </p>
        </div>

        <div className="enhance-reputation__card">
          <h2 className="enhance-reputation__card-title">
            Introductions are Common Practice
          </h2>
          <p className="enhance-reputation__card-text">
            Commissions for introductions are widely accepted in many industries as a way to recognise and reward people for creating opportunities.
            {'\n\n'}
            If you've ever recommended a great product or service, this is the same idea—with a little extra appreciation.
          </p>
        </div>
      </div>
    </section>
  );
};

EnhanceReputationSection.defaultProps = {
  title: 'Use introductions to enhance your professional reputation',
  subtitle: "When you make an introduction, you're solving a problem for your network by connecting them to trusted expertise.",
  cards: [
    {
      title: "It's About Trust and Integrity",
      text: "Relationships matter. That's why we ensure every introduction is handled professionally and transparently."
    },
    {
      title: 'Recognition for Your Effort',
      text: "Introductions take thought and trust. By connecting people to a solution, you're doing more than sharing a name—you're leveraging your reputation to create opportunities."
    },
    {
      title: 'Introductions are Common Practice',
      text: 'Commissions for introductions are widely accepted in many industries as a way to recognise and reward people for creating opportunities.'
    }
  ]
};

export default EnhanceReputationSection;
