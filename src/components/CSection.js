import React from 'react';
import './CSection.css';

const CSection = ({ testimonials = [
  {
    id: 1,
    name: "John Smith",
    role: "Designer",
    image: "https://dashboard.codeparrot.ai/api/image/Z5C5uwa3lv04CQGZ/screensh.png",
    quote: "Introducing Nexer to my current employer was super simple and it was great to be able to help both companies... and be paid for it"
  },
  {
    id: 2,
    name: "Alison Anderson",
    role: "Tech lead",
    image: "https://dashboard.codeparrot.ai/api/image/Z5C5uwa3lv04CQGZ/screensh-2.png",
    quote: "I knew Nexer could help my current employer, so I introduced them. I would have done it anyway, but by using orbit my friend got a discount as well"
  }
] }) => {
  return (
    <div className="c-section">
      <h1 className="c-title">
        You have 6 colleagues who have earned over £4000 in the last month for their introductions
      </h1>
      <div className="testimonials-container">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial">
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

export default CSection;

