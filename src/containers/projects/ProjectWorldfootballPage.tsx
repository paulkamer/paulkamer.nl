import React from 'react';

import { Breadcrumbtrail } from '../../components/Breadcrumbtrail'

const ProjectWorldfootballPage = () => {
  return (
    <section>
      <Breadcrumbtrail trail={[{ to: '/projects/', label: 'Projects' }, { label: 'Worldfootball' }]} />

      <h1>Worldfootball</h1>

      <h3>Technology</h3>
        <ul>
          <li>Ruby, Ruby On Rails</li>
          <li>React: Redux, Jest, server-side rendering</li>
          <li>AWS (EC2, S3, ElasticSearch)</li>
          <li>Docker, docker-compose, docker-machine</li>
          <li>Redis, Resque</li>
        </ul>
    </section>
  );
}

export default ProjectWorldfootballPage;
