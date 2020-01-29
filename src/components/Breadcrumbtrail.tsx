import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Breadcrumbtrail.scss';

type BreadCrumb = {
  label: string;
  to?: string;
}

export interface BreadcrumbtrailProps { trail: BreadCrumb[]; }

export class Breadcrumbtrail extends Component<BreadcrumbtrailProps> {
  render() {
    return (
      <nav className="breadcrumbtrail">
        <ul>
          <li><Link to="/">Home</Link></li>
          {
            this.props.trail.map((crumb, index) =>
              <li key={`breadcrumb_${index}`}>{crumb.to ? <Link to={crumb.to}>{crumb.label}</Link> : crumb.label}</li>
            )
          }
        </ul>
      </nav>
    );
  }
}
