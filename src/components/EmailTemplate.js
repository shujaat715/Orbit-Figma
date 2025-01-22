import React from 'react';
import './EmailTemplate.css';

const EmailTemplate = ({ 
  recipientName = "Jacob",
  senderName = "Steve",
  companyName = "Nexer",
  currentCompany = "Acme inc",
  referralBonus = "$5,000",
  discountRate = "10%",
  referralLink = "https://tinyurl.com/orbit-referr"
}) => {
  return (
    <div className="email-container">
      <div className="logo-container">
        <img src="https://dashboard.codeparrot.ai/api/image/Z4_sUMFg4WXPOX17/nexer-1.png" alt="Nexer Logo" className="logo" />
      </div>
      
      <div className="email-content">
        <p>Hi {recipientName},</p>
        <p>It's {senderName} from {companyName}.</p>
        <p>I'm getting in touch to let you know about our referral program.</p>
        <p>I've seen that you're working at {currentCompany} now, and have a lot of connections across financial services.</p>
        <p>This is an area we're trying to grow in, so if you know someone who could benefit from our expertise, I'd love if you could introduce them.</p>
        <p>To make it extra-beneficial to them, anyone you introduce will get a discount on our usual rates of up to {discountRate}.</p>
        <p>And as a thank-you, you'll receive {referralBonus} for every introduction that turns into a partnership.</p>
        <p>Making an introduction is easy—just log it on Orbit, the platform we're using to manage referrals. {referralLink}</p>
        <p>Thanks so much for thinking about this</p>
        <p>Cheers,<br/>{senderName}<br/>Sales director, {companyName}</p>
      </div>

      <button className="E-button">Click here to find out more</button>

      <footer className="Efooter">
        <div className="social-icons">
          <a href="#" className="social-icon">
            <img src="https://dashboard.codeparrot.ai/api/image/Z4_sUMFg4WXPOX17/twitter.png" alt="Twitter" width="18" height="18" />
          </a>
          <a href="#" className="social-icon">
            <img src="https://dashboard.codeparrot.ai/api/image/Z4_sUMFg4WXPOX17/facebook.png" alt="Facebook" width="18" height="18" />
          </a>
          <a href="#" className="social-icon">
            <img src="https://dashboard.codeparrot.ai/api/image/Z4_sUMFg4WXPOX17/instagra.png" alt="Instagram" width="18" height="18" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default EmailTemplate;

