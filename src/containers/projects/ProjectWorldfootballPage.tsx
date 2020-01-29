import React from 'react';

import { Breadcrumbtrail } from '../../components/Breadcrumbtrail'
import { Screenshots } from '../../components/Screenshots'

const wfScreenshots = [
  {
    url: '/images/projects/worldfootball/homepage.png',
    alt: 'Homepage',
    title: 'Worldfootball.com homepage',
  },
  {
    url: '/images/projects/worldfootball/leaguetable.png',
    alt: 'League table',
    title: 'Worldfootball.com League table',
  },
  {
    url: '/images/projects/worldfootball/teampage.png',
    alt: 'Team page',
    title: 'Worldfootball.com team page',
  },
]

const ProjectWorldfootballPage = () => {
  return (
    <section>
      <Breadcrumbtrail trail={[{ to: '/projects/', label: 'Projects' }, { label: 'Worldfootball' }]} />

      <h1>Worldfootball</h1>

      <h3>Screenshots</h3>
      <Screenshots screenshots={wfScreenshots}/>

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
