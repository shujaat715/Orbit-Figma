// src/Pages/LandingPage.js
import React from 'react';
import IntroductionHero from '../components/IntroductionHero';
import BenefitsSection from '../components/BenefitsSection';
import Confidence from '../components/Confidence';
import OrbitReputation from '../components/OrbitReputation';
import IntroductionH from '../components/IntroductionH';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div>
      <IntroductionHero />
      <BenefitsSection />
      <Confidence />
      <OrbitReputation />
      <IntroductionH />
      <Footer />
    </div>
  );
};

export default LandingPage;
