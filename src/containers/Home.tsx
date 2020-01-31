import React from 'react';
import { Link } from 'react-router-dom';

import './Home.scss';

const Home = () => {
  const skills = [
    {
      discipline: 'Front-end',
      skills: ['Vue.js','Nuxt.js','React'],
    },
    {
      discipline: 'Back-end',
      skills: ['Ruby','Node.js','PHP','RabbitMQ','Resque']
    },
    {
      discipline: 'Databases',
      skills: ['PostgreSQL', 'Redis','Elasticsearch', 'MySQL','Oracle']
    },
    {
      discipline: 'Infrastructure',
      skills: ['Docker', 'Nginx', 'Apache', 'AWS', 'Serverless framework']
    },
    {
      discipline: 'Misc',
      skills: ['Git','UML','CI/CD','ArchiMate']
    }
  ];

  const jobs = [
    {
      company: 'start.me',
      tenure: 'dec 2016 - current',
      logo_url: '/images/logo-startme.png',
      website_url: 'https://start.me',
      text: <p>
        start.me is an online start page/bookmark manager for both individuals and organisations.<br/>
        As a Senior Web Developer and later Tech Lead, I've worked on numerous front-end, back-end and infrastructure-related projects.<br/>
      </p>
    },
    {
      company: 'Global Sports Media / Perform Group',
      tenure: 'jan 2010 - nov 2016',
      logo_url: '/images/logo-perform.svg',
      website_url: 'https://www.statsperform.com',
      text: <p>
        Global Sports Media (GSM) collects and syndicates sports statistics, via a REST API, FTP push service and hosted (white-label) websites and widgets.<br/>
        After being fully acquired by Perform Group, I've worked, amoung other things, as a Software Architect on a project to introduce a new sports data collection platform.
      </p>
    },
    {
      company: 'Sport-Track / MyLaps',
      tenure: 'may 2007 - dec 2009',
      logo_url: '/images/logo-mylaps.svg',
      website_url: 'https://www.mylaps.com',
      text: <p>As a web developer I worked on a back-end portal (PHP), which used an Oracle database. Using this portal, organisers could manage their sports events. Participants use it to register themselves for the purpose of the GPS-based live tracking and tracing system.</p>
    }
  ]

  return (
    <article>
      <p>
        Paul Kamer {'\u2022'} Full-stack web developer based in The Hague, Netherlands.<br/>
        Download my CV: <a href="/docs/cv.pdf">Dutch</a> | <a href="/docs/cv_en.pdf">English</a>
      </p>

      <section className="skills">
        <h2>Skills</h2>
        <ul className="skills__skillslist">
          {
            skills.map((discipline, index) => {
              return <li key={`sk_${index}`}>
                <span className="discipline">{discipline.discipline}:</span>
                <ul className="skills_sublist">
                  {
                    discipline.skills.map((skill, si) =>
                      <li key={`${index}_${si}`} className="skill">{skill}</li>
                    )
                  }
                </ul>
              </li>
            })
          }
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

      <section className="projects">
        <h2 >Projects</h2>
        For an impression of personal projects I worked on, see the <Link to="/projects/">Projects page</Link>.
      </section>
    </article>
  );
}

export default Home;
