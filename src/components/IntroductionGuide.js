import React from "react";
import PropTypes from "prop-types";
import "./IntroductionGuide.css";

const IntroductionGuide = () => {
  const steps = [
    {
      title: "Log the introduction here",
      description:
        "Start by logging the introduction on this page. This helps track its progress and ensures payments are handled smoothly. The name of the person you're introducing stays private at this stage, so they won't be contacted directly.",
    },
    {
      title: "Chat with Nexer",
      description:
        "After you log the introduction, Nexer will be notified and will reach out to discuss the opportunity. They'll check if they're already connected on this opportunity and confirm if it's a good fit.",
    },
    {
      title: "Let the person you're introducing know",
      description:
        "It's always a nice touch to let the person you're introducing know why you think this opportunity is a great match for them. It makes the introduction feel thoughtful and personal.",
    },
    {
      title: "Make the introduction your way",
      description:
        "Email, LinkedIn, or a quick message—it's entirely up to you. Once you've logged the introduction, we'll provide a handy template to make this step even easier.",
    },
  ];
  const videoThumbnail =
    "https://dashboard.codeparrot.ai/api/image/Z5CFhMFg4WXPOX3G/screensh.png";
  const videoCaption =
    "Learn how to make an introduction with this 59 second video";
  return (
    <div className="introduction-guide">
      <h1 className="guide-title">Making your first introduction</h1>

      <div className="steps-container">
        <div className="timeline-line"></div>

        {steps.map((step, index) => (
          <div className="step" key={index}>
            <div className="step-number">{index + 1}</div>
            <div className="step-content">
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="video-section">
        <img
          src={videoThumbnail}
          alt="Introduction video thumbnail"
          className="video-thumbnail"
        />
        <p className="video-caption">{videoCaption}</p>
      </div>
    </div>
  );
};

IntroductionGuide.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  videoThumbnail: PropTypes.string,
  videoCaption: PropTypes.string,
};

export default IntroductionGuide;
