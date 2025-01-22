import React from 'react';
import styles from './IntroSection.css';

const IntroSection = ({ userName = 'Jacob', company = 'ACME' }) => {
  return (
    <div className={styles.introContainer}>
      <div className={styles.logoSection}>
        <img src="https://dashboard.codeparrot.ai/api/image/Z5Cdm73EVBdKOl37/nexer-1.png" alt="Nexer Logo" className={styles.logo} />
      </div>
      
      <div className={styles.contentSection}>
        <div className={styles.introText}>
          <p className={styles.welcomeText}>
            Hey {userName} - Because of your role at {company} and network across financial services we 
            think you might know people at companies that would benefit from Nexer's services.
          </p>
        </div>

        <div className={styles.benefitsSection}>
          <div className={styles.benefitColumn}>
            <h2 className={styles.benefitTitle}>
              Help your network with exclusive discounts
            </h2>
            <p className={styles.benefitDescription}>
              Your referral earns a 10% discount for their first 6 months.
            </p>
          </div>

          <div className={styles.benefitColumn}>
            <h2 className={styles.benefitTitle}>
              Earn up to £5000
            </h2>
            <p className={styles.benefitDescription}>
              If you're introduction results in a partnership you will earn a thank you payment of £5000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;

