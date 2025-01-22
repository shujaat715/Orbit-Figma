import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './IntroductionForm.css';

const IntroductionForm = ({ defaultName, defaultRole, defaultCompany, defaultDetails }) => {
  const [formData, setFormData] = useState({
    name: defaultName,
    role: defaultRole,
    company: defaultCompany,
    details: defaultDetails,
    termsAgreed: false,
    ndaAgreed: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form className="introduction-form" onSubmit={handleSubmit}>
      <h1 className="form-title">New Introduction to Nexer</h1>
      
      <div className="form-group">
        <label htmlFor="name">Name of the person you're introducing to Nexer</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="role">Their role / position</label>
        <input
          type="text"
          id="role"
          name="role"
          value={formData.role}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="company">Which company do they work at</label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="details">Details on what they need help with</label>
        <textarea
          id="details"
          name="details"
          value={formData.details}
          onChange={handleInputChange}
          placeholder="Type of work. eg: Engineering, design, product management Opportunity size. eg: 1 team, £x  Location. eg. London, Manchester"
        />
      </div>

      <div className="checkbox-group">
        <div className="checkbox-item">
          <input
            type="checkbox"
            id="terms"
            name="termsAgreed"
            checked={formData.termsAgreed}
            onChange={handleInputChange}
          />
          <label htmlFor="terms">I agree with the terms & conditions of this introduction</label>
        </div>
        
        <div className="checkbox-item">
          <input
            type="checkbox"
            id="nda"
            name="ndaAgreed"
            checked={formData.ndaAgreed}
            onChange={handleInputChange}
          />
          <label htmlFor="nda">I agree with the non-disclosure agreement for this introduction</label>
        </div>
      </div>

      <button 
        type="submit" 
        className="submit-button"
        disabled={!formData.termsAgreed || !formData.ndaAgreed}
      >
        Log introduction
      </button>
    </form>
  );
};

IntroductionForm.propTypes = {
  defaultName: PropTypes.string,
  defaultRole: PropTypes.string,
  defaultCompany: PropTypes.string,
  defaultDetails: PropTypes.string
};

IntroductionForm.defaultProps = {
  defaultName: '',
  defaultRole: '',
  defaultCompany: '',
  defaultDetails: ''
};

export default IntroductionForm;

