import React from 'react';
import PropTypes from 'prop-types';

const FAQSection = ({ 
  mainTitle = "Use Orbit to enhance your professional reputation",
  mainDescription = "When you make an introduction, you're solving a problem for your network by connecting them to trusted expertise.\n\nYour recommendation gives them access to services they might not have found otherwise. And thanks to you, at a reduced cost.",
  benefits = [
    {
      title: "It's About Trust and Integrity",
      description: "Relationships matter. That's why we ensure every introduction is handled professionally and transparently.\n\nNexer only works with clients where there's a genuine need, so your network benefits from a valuable service, not a sales pitch."
    },
    {
      title: "Recognition for Your Effort",
      description: "Introductions take thought and trust. By connecting people to a solution, you're doing more than sharing a name—you're leveraging your reputation to create opportunities.\n\nThank-you payments reflect the role you've played in making that connection happen."
    },
    {
      title: "Introductions are Common Practice",
      description: "Commissions for introductions are widely accepted in many industries as a way to recognise and reward people for creating opportunities.\n\nIf you've ever recommended a great product or service, this is the same idea—with a little extra appreciation."
    }
  ]
}) => {
  return (
    <div className="faq-section">
      <h1 className="title">{mainTitle}</h1>
      <p className="subtitle">{mainDescription}</p>
      
      <div className="benefits-container">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-card">
            <h2 className="benefit-title">{benefit.title}</h2>
            <p className="benefit-text">{benefit.description}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .faq-section {
          width: 100%;
          max-width: 1348px;
          padding: 42px 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .title {
          font-family: Raleway, sans-serif;
          font-weight: 700;
          font-size: 42px;
          line-height: 1.17;
          color: #000000;
          text-align: center;
          margin-bottom: 31px;
          max-width: 1001px;
        }

        .subtitle {
          font-family: Inter, sans-serif;
          font-weight: 400;
          font-size: 18px;
          line-height: 1.56;
          color: #083155;
          text-align: center;
          max-width: 1144px;
          margin-bottom: 55px;
          white-space: pre-wrap;
        }

        .benefits-container {
          display: flex;
          justify-content: space-between;
          gap: 40px;
          width: 100%;
          padding: 0 32px;
        }

        .benefit-card {
          flex: 1;
          max-width: 417px;
          min-width: 300px;
        }

        .benefit-title {
          font-family: Raleway, sans-serif;
          font-weight: 700;
          font-size: 20px;
          line-height: 1.2;
          color: #083155;
          margin-bottom: 22px;
        }

        .benefit-text {
          font-family: Raleway, sans-serif;
          font-weight: 400;
          font-size: 18px;
          line-height: 1.5;
          color: #083155;
          white-space: pre-wrap;
        }

        @media (max-width: 1200px) {
          .benefits-container {
            padding: 0;
            gap: 30px;
          }
        }

        @media (max-width: 1024px) {
          .benefits-container {
            flex-direction: column;
            align-items: center;
          }

          .benefit-card {
            max-width: 100%;
          }
        }

        @media (max-width: 768px) {
          .faq-section {
            padding: 30px 15px;
          }

          .title {
            font-size: 32px;
            margin-bottom: 24px;
          }

          .subtitle {
            font-size: 16px;
            margin-bottom: 40px;
          }

          .benefit-title {
            font-size: 18px;
            margin-bottom: 16px;
          }

          .benefit-text {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
};

FAQSection.propTypes = {
  mainTitle: PropTypes.string,
  mainDescription: PropTypes.string,
  benefits: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  )
};

export default FAQSection;
