// src/Pages/LandingPage3.js
import React from 'react';
import MainM from '../components/MainM';
import ReferralCard from '../components/ReferralCard';
import IntroSteps from '../components/IntroSteps';
import FAQ from '../components/FAQ';
import CSection from '../components/CSection';
import IntroductionBanner from '../components/IntroductionBanner';

const LandingPage3 = () => {
  return (
    <div>
      <MainM/>
      <ReferralCard />
      <IntroSteps />
      <FAQ />
      <CSection/>
      <IntroductionBanner />
    </div>
  );
};

export default LandingPage3;
