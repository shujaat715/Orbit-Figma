import React from "react";
import MainM from "../components/MainM";
import IntroSection from "../components/IntroSection";
import HowItWorks from "../components/HowItWorks";
import FAQSection from "../components/FAQSection";
import "../components/global.css";
import Confidence from "../components/Confidence";
import IntroductionH1 from "../components/IntroductionH1";
const LandingPage2 = () => {
  return (
    <div className="LandingPage2">
      <style jsx>{`
        .LandingPage2 {
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: #fff;
          overflow-x: hidden;
        }

        .content-wrapper {
          width: 100%;
          max-width: 1348px;
          display: flex;
          flex-direction: column;
          gap: 40px;
          padding: 35px 30px;
        }

        .full-width-section {
          width: 100vw;
          display: flex;
          justify-content: center;
          background-color: #083155;
          margin: 40px 0;
          padding: 68px 0;
        }

        @media (max-width: 768px) {
          .content-wrapper {
            padding: 20px 15px;
            gap: 24px;
          }

          .full-width-section {
            padding: 40px 0;
          }
        }
      `}</style>

      <div className="content-wrapper">
        <MainM />
        <IntroSection />
        <HowItWorks />
        <FAQSection />
        <Confidence/>
        <IntroductionH1/>
      </div>

      <div> </div>
    </div>
    
  );
};

export default LandingPage2;
