import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Email from "./Pages/Email";
import Login from "./Pages/Login";
import LandingPage from "./Pages/LandingPage";
import DashboardIntroductions from "./Pages/Dashboard-Introductions";
import DashboardNewIntroduction from "./Pages/DashboardNewIntroductions";
import NewIntroduction from "./Pages/NewIntroduction";
import LandingPage2 from "./Pages/LandingPage2";
import LandingPage3 from "./Pages/LandingPage3";
import LandingPage4 from "./Pages/LandingPage4";
import LandingPage5 from "./Pages/LandingPage5";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Navigation Menu */}
        {/* <nav className="navigation-menu"> 
          <ul>
            <li><Link to="/email">Email</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/landing">Landing Page</Link></li>
            <li><Link to="/dashboard-introductions">Dashboard Introductions</Link></li>
            <li><Link to="/dashboard-new-introductions">Dashboard New Introduction</Link></li>
            <li><Link to="/new-introductions">New Introduction</Link></li>
            <li><Link to="/landing-page2">Landing Page 2</Link></li>
            <li><Link to="/landing-page3">Landing Page 3</Link></li>
            <li><Link to="/landing-page4">Landing Page 4</Link></li>
            <li><Link to="/landing-page5">Landing Page 5</Link></li>
          </ul>
        </nav>*/}

        {/* Routes */}
        <Routes>
        <Route path="*" element={<LandingPage />} />
          <Route path="/email" element={<Email />} />
          <Route path="/login" element={<Login />} />
         
          <Route
            path="/dashboard-new-introductions"
            element={<DashboardNewIntroduction />}
          />
          <Route
            path="/dashboard-introductions"
            element={<DashboardIntroductions />}
          />
          <Route path="/new-introductions" element={<NewIntroduction />} />
          <Route path="/landing-page2" element={<LandingPage2 />} />
          <Route path="/landing-page3" element={<LandingPage3 />} />
          <Route path="/landing-page4" element={<LandingPage4 />} />
          <Route path="/landing-page5" element={<LandingPage5 />} />
          {/* <Route 
            path="*"
            element={
              <div>
                <h1>Welcome to the App</h1>
                <p>type this link on brouser url: http://localhost:3001/landing.</p>
              </div>
            }
          />*/}
         </Routes> 
      </div>
    </Router>
  );
};

export default App;
