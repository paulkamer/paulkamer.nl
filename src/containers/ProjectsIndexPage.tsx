import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsIndexPage = () => {
  return (
    <section>
      <nav>
        <Link to="/">Home</Link> > Projects
      </nav>

      <h1>Projects</h1>

      <article>
        <h2>ClinicalTrials.gov monitor</h2>

        <p>
          A service to receive notifications about updated clinical trials on ClinicalTrials.gov.<br/>
          For a full description, click <Link to="/projects/trialmonitor/">here</Link>.
        </p>
      </article>

      <article>
        <h2>worldfootball</h2>

        <p>For further details, click <Link to="/projects/worldfootball/">here</Link>.</p>
      </article>

      <article>
        <h2>Air-Attack</h2>

        <p className="intro">Air-Attack.com was military aviation-related hobby website that I ran for several years.</p>

        <h3>Technology</h3>
        <ul>
          <li>Python, Django</li>
          <li>PHP, Symfony 2</li>
          <li>MySQL</li>
          <li>ElasticSearch</li>
          <li>Apache</li>
        </ul>
      </article>
    </section>
  );
}

export default ProjectsIndexPage;
