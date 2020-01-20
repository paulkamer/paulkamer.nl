import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

const Home = () => {
  const skills = [
    'Ruby','PostgreSQL','Node.js','Vue.js','Nuxt.js','React','Redis','Git',
    'Elasticsearch','RabbitMQ','Resque','ArchiMate','UML','Docker','CI/CD',
    'Nginx','PHP','MySQL','Oracle'
  ]

  return (
    <article>
      <h1>Home</h1>
      Download my CV: <a href="/docs/cv.pdf">Dutch</a> | <a href="/docs/cv_en.pdf">English</a>

      <section id="skills">
        <h2>Skills</h2>
        <ul className="skillslist">
          {skills.map((value, index) => {
            return <li key={index}>{value}</li>
          })}
        </ul>
      </section>

      <section>
        <h2 id="jobs">Jobs</h2>

        <article>
          <h3>start.me</h3>
        </article>

        <article>
          <h3>Global Sports Media / Perform Group</h3>
        </article>

        <article>
          <h3>Sport-Track / MyLaps</h3>
        </article>
      </section>

      <section>
        <h2 id="projects">Projects</h2>
        See <Link to="projects">Projects page</Link>
      </section>
    </article>
  );
}

export default Home;
