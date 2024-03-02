import React from 'react';

import { BreadCrumbtrail } from '../../components/Breadcrumbtrail';
import JobsList from '../../components/JobsList';

const JobsIndexPage: React.FC = () => {
  return (
    <section>
      <BreadCrumbtrail trail={[{ label: 'Jobs' }]} />

      <JobsList />
    </section>
  );
};

export default JobsIndexPage;
