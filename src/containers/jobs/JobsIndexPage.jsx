import React from 'react';

import { Breadcrumbtrail } from '../../components/Breadcrumbtrail';
import JobsList from '../../components/JobsList';

const JobsIndexPage = () => {
  return (
    <section>
      <Breadcrumbtrail trail={[{ label: 'Jobs' }]} />

      <JobsList />
    </section>
  )
}

export default JobsIndexPage;
