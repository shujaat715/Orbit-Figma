import React from "react";
import styles from "./MainMenu.css";
const MainMenu = () => {
  let logo =
    "https://dashboard.codeparrot.ai/api/image/Z5Cdm73EVBdKOl37/orbit-lo.png";
  let links = [
    { text: "How it works", href: "#how-it-works" },
    { text: "FAQs", href: "#faqs" },
    { text: "Get in touch", href: "#contact" },
  ];
  return (
    <nav className={styles.mainMenu}>
      <img
        src={logo}
        alt="Orbit Logo"
        className={styles.logo}
        width={107}
        height={39}
      />{" "}
      <div className={styles.menuGroup}>
        <div className={styles.links}>
          {links.map((link, index) => (
            <a key={index} href={link.href}>
              {link.text}
            </a>
          ))}
        </div>{" "}
        <button className={styles.introButton}>Make introduction</button>
      </div>
    </nav>
  );
};
export default MainMenu;