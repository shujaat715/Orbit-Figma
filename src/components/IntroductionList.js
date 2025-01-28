import React from 'react';
import './IntroductionList.css';

const IntroductionList = ({ introductions = [
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
]}) => {
  return (
    <div className="introduction-list">
      {introductions.map((intro, index) => (
        <div key={index} className="introduction-item">
          <div className="intro-company">{intro.company}</div>
          <div className="intro-contact">{intro.contact}</div>
          <div className="intro-date">{intro.date}</div>
          <div className="intro-fee">{intro.fee}</div>
          <div className="intro-status" style={{display:"flex",justifyContent:"end"}}>
            <span className="status-badge">{intro.status}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IntroductionList;

