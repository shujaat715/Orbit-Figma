import React from 'react';
import Sidebar from '../components/Sidebar1';
import Summary from '../components/Summary';
import IntroductionList from '../components/IntroductionList';

const DashboardIntroductions = () => {
  const introductions = [
    {
      company: 'Nexer',
      contact: 'Jerome Bell @ Acme co.',
      date: '02/01/2025',
      fee: '£2,500',
      status: 'Paid'
    },
    {
      company: 'Nexer',
      contact: 'Jerome Bell @ Acme co.',
      date: '02/01/2025',
      fee: '£2,500',
      status: 'Paid'
    },
    {
      company: 'Nexer',
      contact: 'Jerome Bell @ Acme co.',
      date: '02/01/2025',
      fee: '£2,500',
      status: 'Paid'
    }
  ];

  return (
    <div style={{ display: 'flex', width: '100%', minHeight: '100vh', backgroundColor: '#F5F5F5' }}>
      <Sidebar activeItem="track" />

      <div style={{ flexGrow: 1, padding: '40px', backgroundColor: '#ffffff' }}>
        <Summary introductions={4} active={1} closed={1} />
        
        <div style={{ marginTop: '40px' }}>
          <h1 style={{ 
            fontFamily: 'Poppins', 
            fontWeight: 600, 
            fontSize: '32px', 
            color: '#083155',
            marginBottom: '30px'
          }}>
            All Introductions
          </h1>

          <div style={{ marginBottom: '20px' }}>
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: '1fr 2fr 1fr 1fr 1fr',
              gap: '20px',
              padding: '0 20px',
              marginBottom: '10px'
            }}>
              <span style={{ color: '#6B7280', fontSize: '14px', fontWeight: 500 }}>Company</span>
              <span style={{ color: '#6B7280', fontSize: '14px', fontWeight: 500 }}>Introduced to</span>
              <span style={{ color: '#6B7280', fontSize: '14px', fontWeight: 500 }}>Date</span>
              <span style={{ color: '#6B7280', fontSize: '14px', fontWeight: 500 }}>Introduction fee</span>
              <span style={{ color: '#6B7280', fontSize: '14px', fontWeight: 500 }}>Status</span>
            </div>
          </div>

          <IntroductionList introductions={introductions} />
        </div>
      </div>
    </div>
  );
};

export default DashboardIntroductions;
