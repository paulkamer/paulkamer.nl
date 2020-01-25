import React from 'react';
import { Link } from 'react-router-dom';

import './HeaderBar.scss';

const HeaderBar = () => {
  return (
    <header className="HeaderBar">
        <Link to="/">
          <img className="HeaderBar avatar" alt="avatar" src="/avatar192.jpg" />
        </Link>
        <Link to="/">
          <h1>Paul Kamer</h1>
        </Link>
    </header>
  );
}

export default HeaderBar;
