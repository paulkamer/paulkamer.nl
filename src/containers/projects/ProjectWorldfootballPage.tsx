import React from 'react';
import { Link } from 'react-router-dom';

const ProjectWorldfootballPage = () => {
  return (
    <section>
      <nav>
        <Link to="/">Home</Link> > <Link to="/projects/">Projects</Link> > Worldfootball
      </nav>

      <h1>Worldfootball</h1>

      <h3>Technology</h3>
        <ul>
          <li>Ruby, Ruby On Rails</li>
          <li>React: Redux, Jest, server-side rendering</li>
          <li>AWS (EC2, S3, ElasticSearch)</li>
          <li>Docker, docker-compose, docker-machine</li>
          <li>Redis, Resque</li>
        </ul>
    </section>
  );
}

export default ProjectWorldfootballPage;
