import React from "react";
import "./Header.css";

const Header = () => {
  const logoSrc =
    "https://dashboard.codeparrot.ai/api/image/Z5D1DnhIZI-ZK8bk/orbit-lo.png";
  const logoAlt = "Orbit Logo";
  const navLinks = [
    { text: "How it works", href: "#how-it-works" },
    { text: "FAQs", href: "#faqs" },
    { text: "Get in touch", href: "#contact" },
  ];
  return (
    <nav className="header">
      <div className="header-container">
        <img
          src={logoSrc}
          alt={logoAlt}
          className="header-logo"
          width={107}
          height={39}
        />

        <div className="nav-group">
          <div className="nav-links">
            {navLinks.map((link, index) => (
              <a key={index} href={link.href}>
                {link.text}
              </a>
            ))}
          </div>

          <button className="Lintro-button">Make introduction</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
