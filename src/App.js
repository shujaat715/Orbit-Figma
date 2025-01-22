import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Email from "./Pages/Email";
import Login from "./Pages/Login";
import LandingPage from "./Pages/LandingPage";
import DashboardIntroductions from "./Pages/Dashboard-Introductions";
import DashboardNewIntroduction from "./Pages/DashboardNewIntroductions";
import NewIntroduction from "./Pages/NewIntroduction";
import LandingPage2 from "./Pages/LandingPage2";
import LandingPage3 from "./Pages/LandingPage3";
import "./App.css";
import LandingPage4 from "./Pages/LandingPage4";
import LandingPage5 from "./Pages/LandingPage5";
const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/email" element={<Email />} />
          <Route path="/login" element={<Login />} />
          {/* Landing Page */}
          <Route path="/landing" element={<LandingPage />} />{" "}
          {/* Use LandingPage component here */}
          <Route path="/landing" element={<LandingPage />} />
          {/*  Dashboard-New-Introduction*/}
          <Route
            path="/dashboard-new-introductions"
            element={
              <DashboardNewIntroduction/>
            }
          />
          {/* Dashboard-Introduction */}
          <Route
            path="/dashboard-introductions"
            element={
              <DashboardIntroductions/>
            }
            NewIntroductionNexer
          />
          {/* NewIntroductionNexer */}
          <Route
            path="/new-introductions"
            element={
              <NewIntroduction/>
            }
            />

             {/*  LandingPage2 */}
          <Route
            path="/landing-page2"
            element={
              <LandingPage2/>
            }
            />

              {/*  LandingPage3 */}
          <Route
            path="/landing-page3"
            element={
              <LandingPage3/>
            }
            />
              {/*  LandingPage4 */}
          <Route
            path="/landing-page4"
            element={
              <LandingPage4/>
            }
            />
              {/*  LandingPage5 */}
          <Route
            path="/landing-page5"
            element={
              <LandingPage5/>
            }
            />
          <Route
            path="*"
            element={
              <div>
                <h1>Welcome to the App</h1>
                <p>Select a page from the navigation menu.</p>
              </div>
            }
          />
         
        </Routes>
      </div>
    </Router>
  );
};

export default App;
