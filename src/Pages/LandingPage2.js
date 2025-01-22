import React from "react";
import MainMenu from "../components/MainMenu";
import IntroSection from "../components/IntroSection";
import HowItWorks from "../components/HowItWorks";
import FAQSection from "../components/FAQSection";
import ConfidenceSection from "../components/ConfidenceSection";
import CallToAction from "../components/CallToAction";
import "../components/global.css";

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
        <MainMenu />
        <IntroSection />
        <HowItWorks />
        <FAQSection />
      </div>

      <div className="full-width-section">
        <div style={{ width: "100%", maxWidth: "1440px", padding: "0 20px" }}>
          <ConfidenceSection
            testimonials={[
              {
                image:
                  "https://dashboard.codeparrot.ai/api/image/Z5Cdm73EVBdKOl37/screensh.png",
                name: "John Smith - Designer",
                text: "Introducing Nexer to my current employer was super simple and it was great to be able to help both companies... and be paid for it",
              },
              {
                image:
                  "https://dashboard.codeparrot.ai/api/image/Z5Cdm73EVBdKOl37/screensh-2.png",
                name: "Alison Anderson - Tech lead",
                text: "I knew Nexer could help my current employer, so I introduced them. I would have done it anyway, but by using orbit my friend got a discount as well",
              },
            ]}
          />
        </div>
      </div>

      <div className="content-wrapper" style={{ paddingBottom: "60px" }}>
        <CallToAction />
      </div>
    </div>
  );
};

export default LandingPage2;
