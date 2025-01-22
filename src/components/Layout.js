import React from 'react';
import Header from './Header';
import IntroSection_BenefitsSection from './IntroSection_BenefitsSection';
import StepsSection from './StepsSection';
import EnhanceReputationSection from './EnhanceReputationSection';
import TestimonialsSection from './TestimonialsSection';
import FinalCTASection from './FinalCTASection';

const Layout = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#F5F5F5',
      gap: '40px',
      padding: '20px'
    }}>
      <Header />
      <main style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        maxWidth: '1348px',
        margin: '0 auto',
        width: '100%'
      }}>
        <IntroSection_BenefitsSection />
        <StepsSection />
        <EnhanceReputationSection />
        <TestimonialsSection />
        <FinalCTASection />
      </main>
    </div>
  );
};

export default Layout;
