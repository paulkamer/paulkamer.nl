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
    url: '/images/projects/worldfootball/teampage.png',
    alt: 'Team page',
    title: 'Worldfootball.com team page',
  },
  {
    url: '/images/projects/worldfootball/matchpage.png',
    alt: 'Match page',
    title: 'Match page (2018 World Cup Final)',
  },
  {
    url: '/images/projects/worldfootball/leaguetable.png',
    alt: 'League table',
    title: 'Worldfootball.com League table',
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
        <p>
          Live results and post-match stats were synced by <a href="https://github.com/resque/resque" target="_blank" rel="noopener noreferrer">Resque</a>-backed background jobs (written in Ruby) from the <a href="https://datasportsgroup.com/" target="_blank" rel="noopener noreferrer">datasportsgroup</a> API.<br/>
          - images S3
          - active cache invalidations using Cloudflare API
          - all data searchable, using ElasticSearch
          - widget generator/configurator
        </p>

        <h4>Technology</h4>
        <ul>
          <li>Front-end:
            <ul>
              <li>React (incl. Redux, Jest)</li>
              <li>Sass (SCSS)</li>
              <li>Babel, ESLint</li>
              <li>Pages are served by Express.js (including server-side rendering)</li>
            </ul>
          </li>
          <li>Back-end:
            <ul>
              <li>API: Ruby on Rails</li>
              <li>Background jobs: Ruby, Resque, Redis</li>
            </ul>
          </li>
          <li>Infrastructure:
            <ul>
              <li>AWS: EC2, S3, ElasticSearch</li>
              <li>Docker, docker-compose, docker-machine</li>
            </ul>
          </li>
        </ul>
    </section>
  );
}

export default ProjectWorldfootballPage;
