import React from "react";

import "./FooterBar.scss";

const FooterBar: React.FC = () => {
  return (
    <footer className="footerbar">
      <a
        href="https://github.com/paulkamer/"
        className="footerbar__icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://unpkg.com/simple-icons@latest/icons/github.svg"
          alt="Github"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/paulkamer/"
        className="footerbar__icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://unpkg.com/simple-icons@latest/icons/linkedin.svg"
          alt="LinkedIn"
        />
      </a>
      <a
        href="mailto:paulkamer@gmail.com"
        className="footerbar__icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/images/mail.svg" alt="email" />
      </a>{" "}
      {"\u2013"} last updated Dec 2020
    </footer>
  );
};

export default FooterBar;
