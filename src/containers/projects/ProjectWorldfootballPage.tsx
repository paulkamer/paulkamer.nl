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

      <p>
        Worldfootball.com was a collaborative project between <a href="https://datasportsgroup.com/" target="_blank" rel="noopener noreferrer">DataSportsGroup</a> (DSG)
        and Arjen Robijn, the founder of start.me (see <a href="/#jobs">jobs</a>) for whom I work for.
      </p>

      <p>DSG covers over 400 football competitions worldwide, and for many top leagues they have detailed player profile and career statistics available.</p>

      <p>All the football data covered by DSG was available on worldfootball. Besides the website itself, worldfootball also powered a widgets/white-label platform.
        We offered embeddable fixture and league table widgets, which were used by hundreds of websites.
      </p>

      <p>
        I personally took care of the development of the entire platform: design of the database, development of the front-end, back-end and data
        synchronization processes, and the infrastructure at Heroku and later AWS. <br/>
        The UX/UI design was created by Arjen Robijn & <a href="http://pauldejong.info/" target="_blank" rel="noopener noreferrer">Paul de Jong</a>.
      </p>

      <p>Unfortunately, worldfootball had to be taken offline because start.me required all our time & focus.</p>

      <h3>Screenshots</h3>
      <Screenshots screenshots={wfScreenshots}/>

      <h3>Technology</h3>
        <p>
          Live results and post-match stats were synced from the DataSportsGroup API
          by <a href="https://github.com/resque/resque" target="_blank" rel="noopener noreferrer">Resque</a>-backed background jobs that were written
          in <a href="https://www.ruby-lang.org/en/" target="_blank" rel="noopener noreferrer">Ruby</a>.
        </p>
        <p>
          Worldfootball relied heavily on Cloudflare for edge-caching. We devised a mechanism to actively purge specific resources using Cloudflare's <a href="https://api.cloudflare.com/" target="_blank" rel="noopener noreferrer">API</a> when, for example, match results were updated.
        </p>
        <p>
          We used an <a href="https://www.elastic.co/" target="_blank" rel="noopener noreferrer">ElasticSearch</a> database for the search feature, which allowed visitors to look up competitions, teams, players and venues.
        </p>

        <h4>Technology</h4>
        <ul>
          <li>Front-end:
            <ul>
              <li>React (incl. Redux, Jest)</li>
              <li>Sass (SCSS)</li>
              <li>Babel, ESLint</li>
              <li>Served by Express.js with server-side rendering</li>
            </ul>
          </li>
          <li>Back-end:
            <ul>
              <li>API: Ruby on Rails</li>
              <li>Background jobs: Ruby, Redis, Resque</li>
              <li>Data management: ActiveAdmin</li>
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
