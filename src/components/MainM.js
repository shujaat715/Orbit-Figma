import React from "react";
import "./MainM.css";

const MainM = () => {
  const links = [
    { text: "How it works", href: "#" },
    { text: "FAQs", href: "#" },
    { text: "Get in touch", href: "#" },
  ];
  const logoSrc =
    "https://dashboard.codeparrot.ai/api/image/Z5C0WL3EVBdKOl4p/orbit-lo.png";
  const logoAlt = "Orbit Logo";
  return (
    <nav className="main-m">
      <div className="logo-container">
        <img src={logoSrc} alt={logoAlt} className="Morbit-logo" />
      </div>

      <div className="m-group">
        <div className="links">
          {links.map((link, index) => (
            <a key={index} href={link.href} className="m-link">
              {link.text}
            </a>
          ))}
        </div>

        <div className="intro-button-container">
          <button className="intro-button">Make introduction</button>
        </div>
      </div>
    </nav>
  );
};

export default MainM;
