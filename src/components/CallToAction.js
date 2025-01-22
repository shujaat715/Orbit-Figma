import React from 'react';
import styles from './CallToAction.css';

const CallToAction = ({ heading, buttonText }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        {heading}
      </h1>
      <button className={styles.button}>
        {buttonText}
      </button>
    </div>
  );
};

CallToAction.defaultProps = {
  heading: "Ready to introduce people who need Nexer's help?",
  buttonText: "Make an introduction now"
};

export default CallToAction;

