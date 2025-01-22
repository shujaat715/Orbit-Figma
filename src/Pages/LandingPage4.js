// src/Pages/LandingPage4.js
import React from 'react';
import MainM from '../components/MainM';
import ReferralCard from '../components/ReferralCard';
import Intro1 from '../components/Intro1';
import Intro2 from '../components/Intro2';
import Intro3 from '../components/Intro3';
import FAQ from '../components/FAQ';
import CSection from '../components/CSection';
import IntroductionBanner from '../components/IntroductionBanner';

const LandingPage4 = () => {
  return (
    <div>
      <MainM/>
      <ReferralCard />
      <Intro1 />
      <Intro2 />
      <Intro3 />
      <FAQ />
      <CSection/>
      <IntroductionBanner />
    </div>
  );
};

export default LandingPage4;
