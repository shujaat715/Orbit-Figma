import React from 'react';
import './Confidence.css';

const Confidence = ({ testimonials = [
  {
    name: "John Smith",
    role: "Designer",
    image: "https://dashboard.codeparrot.ai/api/assets/Z4qGP644F0YMkTZG",
    quote: "Introducing Nexer to my current employer was super simple and it was great to be able to help both companies... and be paid for it"
  },
  {
    name: "Alison Anderson",
    role: "Tech lead",
    image: "https://dashboard.codeparrot.ai/api/assets/Z4qGP644F0YMkTZH",
    quote: "I knew Nexer could help my current employer, so I introduced them. I would have done it anyway, but by using orbit my friend got a discount as well"
  }
] }) => {
  return (
    <div className="confidence-section">
      <h1 className="confidence-title">
        You have 6 colleagues who have earned over £4000 in the last month for their introductions
      </h1>
      
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <img 
              src={testimonial.image} 
              alt={testimonial.name}
              className="testimonial-image"
            />
            <div className="testimonial-content">
              <div className="testimonial-header">
                {testimonial.name} - {testimonial.role}
              </div>
              <p className="testimonial-quote">"{testimonial.quote}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Confidence;

