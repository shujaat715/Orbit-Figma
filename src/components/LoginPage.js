import React, { useState } from 'react';
import './LoginPage.css';
import { Link } from "react-router-dom";

const LoginPage = ({ onSignIn = () => {}, onSignUp = () => {} }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignIn(email, password);
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-form-container">
          <h1 className="login-title">Login to Your Account</h1>
          <p className="login-subtitle">Login using social networks</p>
          
          <div className="social-buttons">
            <button className="social-button facebook">f</button>
            <button className="social-button google">G+</button>
            <button className="social-button linkedin">in</button>
          </div>

          <div className="Ldivider">OR</div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="input-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="login-input"
              />
            </div>
            
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="login-input"
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "👁️" : "👁️"}
              </button>
            </div>
            <Link to="/dashboard-new-introductions">
            <button type="submit" className="sign-in-button">
              Sign in
            </button>
            </Link>
          </form>
        </div>
      </div>

      <div className="login-right">
        <div className="right-content">
          <h2 className="new-here">New here?</h2>
          <p className="signup-text">Sign up to start helping your network</p>
          <button onClick={onSignUp} className="sign-up-button">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

