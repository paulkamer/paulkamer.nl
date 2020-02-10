import React from 'react';
import { Link } from 'react-router-dom';

import JobsList from '../components/JobsList';

import './Home.scss';

const Home = () => {
  const skills = [
    {
      discipline: 'Back-end',
      skills: ['Ruby','Node.js','PHP']
    },
    {
      discipline: 'Databases',
      skills: ['PostgreSQL', 'Redis', 'MySQL','Oracle']
    },
    {
      discipline: 'Search / Queues',
      skills: ['Elasticsearch', 'Resque', 'RabbitMQ']
    },
    {
      discipline: 'Infrastructure',
      skills: ['Heroku', 'Cloudflare', 'Cloud (AWS)', 'Serverless', 'Docker']
    },
    {
      discipline: 'Front-end',
      skills: ['Vue.js','Nuxt.js','React', 'Riot.js'],
    },
    {
      discipline: 'Unit testing',
      skills: ['Mocha', 'Jest', 'Enzyme', 'Sinon', 'Chai', 'minitest (Ruby)'],
    },
    {
      discipline: 'Misc',
      skills: ['Git', 'SQL', 'Nginx', 'Apache', 'JMeter','UML','ArchiMate']
    }
  ];

  return (
    <article className="home-page">
      <section id="bio" className="bio">
        <h2>About me</h2>
        <p>I'm an experienced full-stack web developer, more inclined towards back-end development, from The Hague in The Netherlands.</p>
        <p>
          I've worked in the sports data industry for over 8 years. The last 4 years I worked as a Tech Lead
          for <a href="https://start.me" target="_blank" rel="noopener noreferrer">start.me</a>, an online start page/bookmark manager service.
        </p>

        <p>My main interests & experience are: Ruby, Node, PHP, PostgreSQL, JS (vanilla, Vue & React), cloud & serverless.</p>
        <p>Download my CV: <a href="/docs/cv.pdf">Dutch</a> | <a href="/docs/cv_en.pdf">English</a></p>
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

      <section id="jobs">
        <JobsList />
      </section>

      <section className="projects">
        <h2 >Projects</h2>
        For an impression of personal projects I've worked on, see the <Link to="/projects/">Projects page</Link>.
      </section>
    </article>
  );
}

export default Home;
