import React from 'react';
import { Link } from 'react-router-dom';

import './HeaderBar.scss';

const HeaderBar = () => {
  return (
    <header className="HeaderBar">
      <div className="HeaderBar__container">
        <div className="HeaderBar__name">
          <Link to="/">
              <img className="HeaderBar avatar" alt="avatar" src="/avatar192.jpg" />
            </Link>
            <Link to="/">
              <h1>Paul Kamer</h1>
            </Link>
        </div>

        <div className="HeaderBar__menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects/">Projects</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default HeaderBar;
