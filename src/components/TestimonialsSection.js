import React from "react";
import "./TestimonialsSection.css";

const TestimonialsSection = () => {
  const testimonials = [
    {
      image:
        "https://dashboard.codeparrot.ai/api/image/Z5D1DnhIZI-ZK8bk/screensh.png",
      name: "John Smith - Designer",
      quote:
        "Introducing Nexer to my current employer was super simple and it was great to be able to help both companies... and be paid for it",
    },
    {
      image:
        "https://dashboard.codeparrot.ai/api/image/Z5D1DnhIZI-ZK8bk/screensh-2.png",
      name: "Alison Anderson - Tech lead",
      quote:
        "I knew Nexer could help my current employer, so I introduced them. I would have done it anyway, but by using orbit my friend got a discount as well",
    },
  ];
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-heading">
        You have 6 colleagues who have earned over £4000 in the last month for
        their introductions
      </h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="testimonial-image"
            />
            <div className="testimonial-content">
              <p className="testimonial-name">{testimonial.name}</p>
              <p className="testimonial-quote">"{testimonial.quote}"</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
