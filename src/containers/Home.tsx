import React from 'react';
import { Link } from 'react-router-dom';

import './Home.scss';

const Home = () => {
  const skills = [
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
      skills: ['Heroku', 'Cloud (AWS)', 'Serverless', 'Docker']
    },
    {
      discipline: 'Front-end',
      skills: ['Vue.js','Nuxt.js','React', 'Riot.js'],
    },
    {
      discipline: 'Misc',
      skills: [ 'Nginx', 'Apache', 'Git','UML','CI/CD','ArchiMate']
    }
  ];

  const jobs = [
    {
      company: 'start.me',
      tenure: 'dec 2016 - current',
      logo_url: '/images/logo-startme.png',
      website_url: 'https://start.me',
      text: <section>
        <p>start.me is an online start page/bookmark manager for both individuals and organisations.</p>
        <p>As a Senior Web Developer, and later Tech Lead, I've worked on numerous front-end, back-end and infrastructure-related projects.</p>
      </section>
    },
    {
      company: 'Global Sports Media / Perform Group',
      tenure: 'jan 2010 - nov 2016',
      logo_url: '/images/logo-perform.svg',
      website_url: 'https://www.statsperform.com',
      text: <section>
        <p>Global Sports Media (GSM) collects and syndicates sports statistics via a REST API, FTP push service and hosted (white-label) websites and widgets.</p>
        <p>After being fully acquired by Perform Group, I've worked as a Software Architect on, amongst other thing, a project to introduce a new sports data collection platform.</p>
      </section>
    },
    {
      company: 'Sport-Track / MyLaps',
      tenure: 'may 2007 - dec 2009',
      logo_url: '/images/logo-mylaps.svg',
      website_url: 'https://www.mylaps.com',
      text: <section>
        <p>Sport-Track developed a GPS-based live tracking and tracing system for sporting events.</p>
        <p>
          As a web developer I worked on a back-end portal written in PHP, which was backed by an Oracle database.
          Using this portal, organisers could manage their sporting events. It also served as a registration portal for participants.
        </p>
      </section>
    }
  ]

  return (
    <article>
      <section id="bio" className="bio">
        <h2>Bio</h2>
        <p>I'm an experienced full-stack web developer, more inclined towards back-end development, from The Hague in The Netherlands.</p>
        <p>
          I've worked in the sports data industry for over 8 years. The last 4 years I worked as a Tech Lead
          for <a href="https://start.me" target="_blank" rel="noopener noreferrer">start.me</a>, an online start page/bookmark manager service.
        </p>

        <p>My main interests & experience are: Ruby, Node, PHP, PostgreSQL, JS (vanilla, Vue & React), cloud & serverless.</p>


        <p>
          Download my CV: <a href="/docs/cv.pdf">Dutch</a> | <a href="/docs/cv_en.pdf">English</a>
        </p>
      </section>

      <section id="skills" className="skills">
        <h2>Skills</h2>
        <ul className="skills__skillslist">
          {
            skills.map((discipline, index) => {
              return <li key={`sk_${index}`} className="skillsgroup">
                <span className="skillsgroup__discipline">{discipline.discipline}:</span>
                <ul className="skillsgroup__skillslist">
                  {
                    discipline.skills.map((skill, si) =>
                      <li key={`${index}_${si}`} className="skillsgroup__skill">{skill}</li>
                    )
                  }
                </ul>
              </li>
            })
          }
        </ul>
      </section>

      <section id="jobs" className="jobs">
        <h2>Jobs</h2>
        {
          jobs.map((job, index) => {
            return <article key={`job_${index}`} className="job">
              <h3>{job.company}<span className="job__tenure"> - {job.tenure}</span></h3>
              <section className="job__job-details">
                <div className="job__company-logo">
                  <a href={job.website_url} target="_blank" rel="noopener noreferrer"><img src={job.logo_url} alt={`${job.company} logo`} /></a>
                </div>
                {job.text}
              </section>
            </article>
          })
        }
      </section>

      <section className="projects">
        <h2 >Projects</h2>
        For an impression of personal projects I've worked on, see the <Link to="/projects/">Projects page</Link>.
      </section>
    </article>
  );
}

export default Home;
