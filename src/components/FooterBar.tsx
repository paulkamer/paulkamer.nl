import React from 'react';

import './FooterBar.scss';
import { lastUpdated } from '../data/last_updated';

const FooterBar: React.FC = () => {
  return (
    <footer className="footerbar">
      <div className="footerbar__section">
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
        </a>
      </div>
      <div className="footerbar__section">
        last updated{' '}
        {lastUpdated.toLocaleDateString('en-us', {
          year: 'numeric',
          month: 'long'
        })}
      </div>
    </footer>
  );
};

export default FooterBar;
