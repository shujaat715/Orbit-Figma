import React from 'react';
import styles from './ConfidenceSection.css';

const ConfidenceSection = ({ testimonials }) => {
  return (
    <div className={styles.confidenceSection}>
      <h1 className={styles.CStitle}>
        You have 6 colleagues who have earned over £4000 in the last month for their introductions
      </h1>
      
      <div className={styles.testimonialContainer}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonial}>
            <img 
              src={testimonial.image}
              alt={testimonial.name}
              className={styles.testimonialImage}
            />
            <div className={styles.testimonialContent}>
              <p className={styles.testimonialText}>
                <span className={styles.testimonialName}>{testimonial.name}</span>
                <br />
                {testimonial.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



export default ConfidenceSection;
