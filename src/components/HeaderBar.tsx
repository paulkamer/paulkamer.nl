import React from 'react';
import { Link } from 'react-router-dom';

import Submenu from './Submenu';

import './HeaderBar.scss';

const HeaderBar = () => {
  return (
    <header className="HeaderBar">
      <div className="HeaderBar__name">
        <Link to="/">
            <img className="HeaderBar__avatar" alt="avatar" src="/avatar192.jpg" />
          </Link>
          <Link to="/">
            <h1>Paul Kamer</h1>
          </Link>
      </div>

      <div className="HeaderBar__submenu">
        <Submenu />
      </div>
    </header>
  );
}

export default HeaderBar;
