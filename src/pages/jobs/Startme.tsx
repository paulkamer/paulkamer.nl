import React from 'react';
import { Link } from 'react-router-dom';

import { BreadCrumbtrail } from '../../components/Breadcrumbtrail';

const StartmePage: React.FC = () => {
  return (
    <section>
      <BreadCrumbtrail trail={[{ to: '/jobs/', label: 'Jobs' }, { label: 'start.me' }]} />

      <h1>start.me | dec 2015 - April 2020</h1>
      <p>
        <a href="https://start.me" target="_blank" rel="noopener noreferrer">start.me</a> is an online start page/bookmark manager for both personal and professional use.<br/>
        I previously worked for the founder of start.me already, at Global Sports Media (see <Link to="/jobs/">jobs</Link>).</p>

      <p>start.me has over two million monthly active users, who have stored tens of millions of bookmarks. For the RSS widget that we offer, we keep track of 150.000+ RSS feeds.
      </p>

      <p>
        As Tech Lead for start.me I was responsible for the following:
      </p>

      <ul>
        <li>Architect & develop new features/solutions</li>
        <li>Develop and maintain the Ruby on Rails-based API</li>
        <li>Performance monitoring & fine-tuning (both server-side and client-side)</li>
        <li>Platform maintenance</li>
        <li>Front-end development</li>
      </ul>

      <h2>Technology stack</h2>

      <p>The technology stack comprises of the following:</p>
      <ul>
        <li>PaaS: Heroku</li>
        <li>CDN: Cloudflare, AWS CloudFront, Cloudinary</li>
        <li>Monitoring: New Relic, Bugsnag</li>
        <li>CI/CD: Heroku CI & Heroku Pipelines</li>
        <li>API/backend: Ruby on Rails, Node.js</li>
        <li>Background jobs: Redis/Resque, Ruby</li>
        <li>Front end: Vue.js, Service Worker, SASS, Webpack, Babel, ESLint, Stylelint</li>
        <li>Testing: Jest, Sinon, Selenium, JMeter, minitest (Ruby)</li>
        <li>Database: PostgreSQL, Redis</li>
      </ul>

      <h2>Positions</h2>
      <h3>Tech Lead | oct 2017 - April 2020</h3>

      <p>Some of the projects I worked on as Tech Lead:</p>
      <ul>
        <li>Complete rebuild of the jQuery-based front-end with Vue.js</li>
        <li>Integration with Chargebee for recurring payments (Ruby)</li>
        <li>Separate service for serving favicons (Node.js)</li>
        <li>Onboarding module to generate a personalised start page (Ruby)</li>
        <li>platform maintenance; optimizations (scaling, costs)</li>
        <li>Extensive front-end rendering performance optimisations</li>
        <li>Proof of Concept Nuxt.js for server-side rendering (SSR)</li>
        <li>Integration with OpenWeatherMap for weather widget</li>
        <li>Helped to specify and ‘architect’ new features</li>
      </ul>

      <h3>Web developer (Ruby) | dec 2015 - sept 2017</h3>
      <p>Some of the projects I worked on:</p>
      <ul>
        <li>Integration with PayPal and Stripe</li>
        <li>Back- & front-end performance improvements</li>
        <li>Upgrade of Rails platform</li>
        <li>Implementation various premium widgets</li>
        <li>worldfootball.com, see <Link to="/projects/worldfootball/">project description</Link></li>
      </ul>
    </section>
  )
}

export default StartmePage;
