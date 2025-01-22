import React from 'react';
import Sidebar from '../components/Sidebar';
import IntroductionForm from '../components/IntroductionForm';
import IntroductionGuide from '../components/IntroductionGuide';
import './DashboardNewIntroduction.css';

const DashboardNewIntroduction = () => {
  return (
    <div className="dashboard-new-introduction">
      <div className="sidebar-container">
        <Sidebar activeItem="new" />
      </div>

      <div className="main-content">
        <div className="form-section">
          <IntroductionForm />
        </div>

        <div className="instruction-section">
          <IntroductionGuide />
        </div>
      </div>
    </div>
  );
};

export default DashboardNewIntroduction;
