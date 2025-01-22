import React, { useState } from 'react';
import './Form.css';

const Form = ({ style }) => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    company: '',
    details: '',
    termsAgreed: false,
    ndaAgreed: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="form-container" style={style}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name of the person you're introducing to Nexer</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Their role / position</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Which company do they work at</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Details on what they need help with</label>
          <textarea
            name="details"
            value={formData.details}
            onChange={handleInputChange}
            placeholder="Type of work. eg: Engineering, design, product management Opportunity size. eg: 1 team, £x  Location. eg. London, Manchester"
          />
        </div>

        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              name="termsAgreed"
              checked={formData.termsAgreed}
              onChange={handleInputChange}
            />
            <span>I agree with the terms & conditions of this introduction</span>
          </label>
        </div>

        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              name="ndaAgreed"
              checked={formData.ndaAgreed}
              onChange={handleInputChange}
            />
            <span>I agree with the non-disclosure agreement for this introduction</span>
          </label>
        </div>

        <button type="submit" className="submit-button">
          Register introduction
        </button>
      </form>
    </div>
  );
};

Form.defaultProps = {
  style: {
    backgroundColor: '#083155',
    padding: '20px',
    borderRadius: '8px',
    boxSizing: 'border-box'
  }
};

export default Form;

