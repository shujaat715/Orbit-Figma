import React from 'react';
import styles from './HowItWorks.css';

const HowItWorks = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.HWtitle}>How making an introduction works</h2>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <img 
              src="https://dashboard.codeparrot.ai/api/image/Z5Cdm73EVBdKOl37/healthic.png"
              alt="Magnifying glass"
              className={styles.icon}
              width={81}
              height={81}
            />
          </div>
          <div className={styles.textWrapper}>
            <p className={styles.cardText}>
              Look out for people or companies you know that could benefit from Nexer's services
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <img 
              src="https://dashboard.codeparrot.ai/api/image/Z5Cdm73EVBdKOl37/group-2.png"
              alt="Chat icon"
              className={styles.icon}
              width={62.8}
              height={66.38}
            />
          </div>
          <div className={styles.textWrapper}>
            <p className={styles.cardText}>
              Choose how to introduce them: email, LinkedIn, or a quick call. We'll even provide tips to make it simple.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <img 
              src="https://dashboard.codeparrot.ai/api/image/Z5Cdm73EVBdKOl37/vector.png"
              alt="Gift icon"
              className={styles.icon}
              width={85.9}
              height={81.43}
            />
          </div>
          <div className={styles.textWrapper}>
            <p className={styles.cardText}>
              That's it, Nexer will take it from here.{'\n\n'}
              If they become a client, you've helped them, they'll get a discount thanks to you, and you'll earn a thank-you payment!{'\n\n'}
              It's a win-win!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

HowItWorks.defaultProps = {
  title: 'How making an introduction works',
};

export default HowItWorks;
