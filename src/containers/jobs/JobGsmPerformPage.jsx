import React from 'react';

import { Breadcrumbtrail } from '../../components/Breadcrumbtrail';

const JobsGsmPerformPage = () => {
  return (
    <section>
      <Breadcrumbtrail trail={[{ to: '/jobs/', label: 'Jobs' }, { label: 'GSM / Perform' }]} />

      <h1>Global Sports Media / Perform Group | jan 2010 - nov 2015</h1>

      <p>Global Sports Media (GSM) collects and syndicates sports statistics, via a REST api, FTP push service and hosted (white-label) websites and widgets.</p>

      <p>
        In 2014, GSM was fully acquired by the British company Perform Group.
        At the same time, I was promoted to Software Architect. Perform then had around 120 developers and 10 software architects.<br/>
        Perform itself later merged with the US company "Stats", to form <a href="https://www.statsperform.com/" target="_blank" rel="noopener noreferrer">Stats Perform</a>. GSM was renamed to Opta Core, after it was merged with <a href="https://www.optasports.com/" target="_blank" rel="noopener noreferrer">Opta Sports</a>.
      </p>

      <p>
        At Perform, I worked in an international Scrum team, with colleagues from the UK, Italy, Austria,  Poland and Slovakia.
      </p>

      <h2>Technology stack</h2>

      <p>The technology stack comprised of the following:</p><br/>
      <ul>
        <li>LAMP: Linux, Apache, PHP, MySQL (master DB with > 8 followers)</li>
        <li>Symfony 1, Symfony 2, Doctrine, Dependency Injection</li>
        <li>RabbitMQ</li>
        <li>Redis</li>
        <li>Memcached</li>
        <li>Node.js</li>
        <li>Socket.io</li>
      </ul>

      <p>Which powered the following projects:</p><br/>

      <ul>
        <li>Sports data collection tools</li>
        <li>Real-time sports data ingestion service</li>
        <li>Opta Core API <a href="https://www.optasports.com/services/data-feeds/" target="_blank" rel="noopener noreferrer">optasports.com</a></li>
        <li>FTP push service</li>
        <li>Soccerway <a href="https://www.soccerway.com/" target="_blank" rel="noopener noreferrer">soccerway.com</a></li>
        <li>Scoresway (no longer publicly accessible)</li>
        <li>Client portal</li>
      </ul>

      <h2>Positions</h2>
      <h3>Software Architect | jul 2014 - nov 2015</h3>

      <p>Some of the projects I worked on as Software Architect include:</p><br/>
      <ul>
        <li>Merger of GSM with sister companies Opta Sports and RunningBall.</li>
        <li>Architecture & development of a new data collection and syndication platform for multiple American sports.</li>
        <li>Prepared and assisted with a data center migration</li>
      </ul>

      <h3>Senior web developer (PHP) | jan 2010 - jun 2014</h3>
      <p>Some of the projects I worked on:</p>
      <ul>
        <li>Developed new generation sports data collection and storage platform ()
          <ul><li>PHP, Symfony 1, MySQL</li></ul>
        </li>
        <li>Expanded data collection and storage tools for additional sports, like motorsports, cricket and golf</li>
        <li>
          Integration with live data stream of sister company RunningBall
          <ul><li>Node.js, RabbitMQ, Socket.io, Knockout.js, Backbone.js</li></ul>
        </li>
        <li>Maintain and expand REST API and FTP Push service</li>
        <li>Developed a new client portal
          <ul><li>PHP, Symfony 2, XML, XSD</li></ul>
        </li>
        <li>Maintained soccerway.com & scoresway.com</li>
        <li>Developed a database and REST API for Squash, for our client psaworldtour.com</li>
      </ul>
    </section>
  )
}

export default JobsGsmPerformPage;
