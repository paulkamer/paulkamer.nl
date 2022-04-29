import React from 'react';

import IntroArticle from './IntroArticle';

import { JobsList as jobs } from '../data/jobs';

const JobsList: React.FC = () => {
  return (
    <section className="jobs">
      <h2>Jobs</h2>
      {jobs.map((job, index) => {
        return (
          <IntroArticle
            key={`job_${index}`}
            title={job.company}
            subTitle={` - ${job.tenure}`}
            articleText={job.text}
            url={job.url}
            externalUrlTarget="_blank"
            imageUrl={job.logo_url}
            imageAlt={job.company}
          />
        );
      })}
    </section>
  );
};

export default JobsList;
