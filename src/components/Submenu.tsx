import React from 'react';
import { Link } from 'react-router-dom';

import './Submenu.scss';

const Submenu = () => {
  return (
    <div className="submenu">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects/">Projects</Link></li>
      </ul>
    </div>
  );
}

export default Submenu;
