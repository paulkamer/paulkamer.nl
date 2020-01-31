import React from 'react';
import { Link } from 'react-router-dom';

import { Breadcrumbtrail } from '../components/Breadcrumbtrail'

const ProjectsIndexPage = () => {
  return (
    <section>
      <Breadcrumbtrail trail={[{ label: 'Projects' }]} />
      <h1>Projects</h1>

      <article>
        <h2>ClinicalTrials.gov monitor</h2>

        <p>
          A service to receive notifications about updated clinical trials on ClinicalTrials.gov.<br/>
          For a full description, click <Link to="/projects/trialmonitor/">here</Link>.
        </p>
      </article>

      <article>
        <h2>Worldfootball</h2>

        <p>
          A football results and statistics website, written in React and Ruby. Read <Link to="/projects/worldfootball/">more</Link>.
        </p>
      </article>

      <article>
        <h2>Air-Attack</h2>

        <p>
          Air-Attack was military aviation-related hobby website that I ran for several years.*<br/>
        </p>

        <h3>Technology</h3>
        <ul>
          <li>Front-end: PHP, Symfony 2, Apache</li>
          <li>Back-end: Python, Django</li>
          <li>Infrastructure: Amazon EC2</li>
          <li>DB & Search: MySQL, ElasticSearch</li>
        </ul>
      </article>

      <footer className="footnotes">*The domain has since been taken over by spammers it seems.</footer>
    </section>
  );
}

export default ProjectsIndexPage;
