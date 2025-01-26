// src/Pages/LandingPage.js
import React from 'react';
import IntroductionHero from '../components/IntroductionHero';
import BenefitsSection from '../components/BenefitsSection';
import Confidence from '../components/Confidence';
import OrbitReputation from '../components/OrbitReputation';
import IntroductionHH from '../components/IntroductionHH';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div>
      <IntroductionHero />
      <BenefitsSection />
      <Confidence />
      <OrbitReputation />
      <IntroductionHH />
      <Footer />
    </div>
  );
};

export default LandingPage;
