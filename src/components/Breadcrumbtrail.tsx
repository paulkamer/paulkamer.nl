import React from 'react';
import { Link } from 'react-router-dom';

import './Breadcrumbtrail.scss';

type Breadcrumb = {
  label: string;
  to?: string;
};

export interface BreadcrumbtrailProps {
  trail: Breadcrumb[];
}

export const BreadCrumbtrail: React.FC<BreadcrumbtrailProps> = (props) => {
  return (
    <nav className="breadcrumbtrail">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {props.trail.map((crumb, index) => (
          <li key={`breadcrumb_${index}`}>
            {crumb.to ? <Link to={crumb.to}>{crumb.label}</Link> : crumb.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};
