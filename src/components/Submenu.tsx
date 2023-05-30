import React from "react";
import { Link } from "react-router-dom";

import "./Submenu.scss";

const Submenu: React.FC = () => {
  return (
    <div className="submenu">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/jobs/">Jobs</Link>
        </li>
      </ul>
    </div>
  );
};

export default Submenu;
