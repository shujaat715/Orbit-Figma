import React from "react";
import "./NexerPage.css";

const NexerPage = () => {
  return (
    <div className="nexer-container">
      {/* Header Section */}
      <header className="header">
        <div className="logo">ProBit</div>
        <nav className="navigation">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Login</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>NEXER</h1>
          <p>
            Hey Jacob, because of your role at ACME Industries, you’re eligible
            for exclusive discounts through Nexer.
          </p>
          <button className="cta-button">Start Earning From Your Network</button>
        </div>
        <div className="hero-boxes">
          <div className="hero-box">
            <p>Help your network & get them exclusive discounts</p>
          </div>
          <div className="hero-box">
            <p>Earn up to £5000*</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature">
          <h3>Look up people in your network</h3>
          <p>Identify who could benefit from Nexer’s services.</p>
        </div>
        <div className="feature">
          <h3>Choose how you’d like to make an introduction</h3>
          <p>Introduce people via email, call, or message.</p>
        </div>
        <div className="feature">
          <h3>Enjoy the rewards</h3>
          <p>Earn rewards when your introductions become customers.</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>Use introductions to enhance your professional reputation</h2>
        <div className="testimonial">
          <p>
            “It's about trust and integrity.” – John Doe, Business Advisor
          </p>
        </div>
        <div className="testimonial">
          <p>
            “Helping people find the right services has never been easier.” –
            Jane Smith, Consultant
          </p>
        </div>
        <div className="testimonial">
          <p>
            “Introductions are a common practice, and Nexer makes it
            rewarding.” – Chris Brown, Business Consultant
          </p>
        </div>
      </section>

      {/* Earnings Section */}
      <section className="earnings">
        <h3>
          You have 6 colleagues who have earned over £4000 in the last month
          for their introductions
        </h3>
        <div className="earner-list">
          <div className="earner">
            <p>James Peterson - Designer</p>
            <small>Earned £1200 last month</small>
          </div>
          <div className="earner">
            <p>Emma Williams - Recruiter</p>
            <small>Earned £1500 last month</small>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <h3>Ready to introduce people who need Nexer’s help?</h3>
        <button className="cta-button">Make an Introduction</button>
      </footer>
    </div>
  );
};

export default NexerPage;
