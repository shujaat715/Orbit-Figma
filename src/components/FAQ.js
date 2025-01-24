import React from 'react';
import './FAQ.css';

const FAQ = ({
  title = "Orbit enhances your professional reputation",
  description = "When you make an introduction, you're solving a problem for your network by connecting them to trusted expertise./ Your recommendation gives them access to services they might not have found otherwise. And thanks to you, at a reduced cost.",
  sections = [
    {
      title: "It's About Trust and Integrity",
      content: "Relationships matter. That's why we ensure every introduction is handled professionally and transparently. Nexer only works with clients where there's a genuine need, so your network benefits from a valuable service, not a sales pitch."
    },
    {
      title: "Recognition for Your Effort",
      content: "Introductions take thought and trust. By connecting people to a solution, you're doing more than sharing a name—you're leveraging your reputation to create opportunities. Thank-you payments reflect the role you've played in making that connection happen."
    },
    {
      title: "Introductions are Common Practice",
      content: "Commissions for introductions are widely accepted in many industries as a way to recognise and reward people for creating opportunities. If you've ever recommended a great product or service, this is the same idea—with a little extra appreciation."
    }
  ]
}) => {
  return (
    <div className="faq">
      <h1 className="Forbit-title">{title}</h1>
      <p className="faq">{description}</p>
      
      <div className="Forbit-sections">
        {sections.map((section, index) => (
          <div key={index} className="Forbit-section">
            <h2 className="Fsection-title">{section.title}</h2>
            <p className="section-content">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

