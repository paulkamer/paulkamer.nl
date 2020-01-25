import React from 'react';
import { Link } from 'react-router-dom';

import './Home.scss';

const Home = () => {
  const skills = [
    'Ruby','PostgreSQL','Node.js','Vue.js','Nuxt.js','React','Redis','Git',
    'Elasticsearch','RabbitMQ','Resque','ArchiMate','UML','Docker','CI/CD',
    'Nginx','PHP','MySQL','Oracle'
  ]

  const jobs = [
    {
      company: 'start.me',
      tenure: 'dec 2016 - current',
      logo_url: '/images/logo-startme.png',
      website_url: 'https://start.me',
      text: <p>start.me is an online start page/bookmark manager for both individuals and organisations.</p>
    },
    {
      company: 'Global Sports Media / Perform Group',
      tenure: 'jan 2010 - nov 2016',
      logo_url: '/images/logo-perform.png',
      website_url: 'https://www.statsperform.com',
      text: <p>Global Sports Media (GSM) collects and syndicates sports statistics, via a REST api, FTP push service and hosted (white-label) websites and widgets.</p>
    },
    {
      company: 'Sport-Track / MyLaps',
      tenure: 'may 2007 - dec 2009',
      logo_url: '/images/logo-mylaps.svg',
      website_url: 'https://www.mylaps.com',
      text: <p>As a web developer I worked on a back-end portal (PHP), which used an Oracle database.
        Using this portal, organisers could manage their sports events.
        Participants use it to register themselves for the purpose of the GPS-based live tracking and tracing system.
      </p>
    }
  ]

  return (
    <article>
      Download my CV: <a href="/docs/cv.pdf">Dutch</a> | <a href="/docs/cv_en.pdf">English</a>

      <section className="skills">
        <h2>Skills</h2>
        <ul className="skills__skillslist">
          {skills.map((value, index) => {
            return <li key={index}>{value}</li>
          })}
        </ul>
      </section>

      <section className="jobs">
        <h2>Jobs</h2>
        {jobs.map((job, index) => {
          return <article key={`job_${index}`} className="job">
            <h3>{job.company}<span className="job__tenure"> - {job.tenure}</span></h3>
            <section className="job__job-details">
              <div className="job__company-logo">
                <a href={job.website_url} target="_blank" rel="noopener noreferrer"><img src={job.logo_url} alt={`${job.company} logo`} /></a>
              </div>
              {job.text}
            </section>
          </article>
        })}
      </section>

      <section>
        <h2 id="projects">Projects</h2>
        See <Link to="/projects/">Projects page</Link>
      </section>
    </article>
  );
}

export default Home;
