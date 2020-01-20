import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
  return (
    <section>
      <nav>
        <Link to="/">Home</Link> > Projects
      </nav>
      <h1>Projects</h1>

      <article>
        <h2>worldfootball.com (offline)</h2>
        <p>...explanation...</p>

        <h3>Technology</h3>
        <ul>
          <li>Ruby, Ruby On Rails</li>
          <li>React: Redux, Jest, server-side rendering</li>
          <li>AWS (EC2, S3, ElasticSearch)</li>
          <li>Docker, docker-compose, docker-machine</li>
          <li>Redis, Resque</li>
        </ul>
      </article>

      <article>
        <h2>ClinicalTrials.gov monitor (WIP)</h2>

        <p>
          A personal project to get alerts when clinical trials are updated on clinicaltrials.gov.<br/>
          The clinicaltrials.gov is not very user friendly when having to look up a certain trail and determining the last changes.
          They do, however, provide an API, so I'm building a "clinicaltrails monitor". <br/>
          It periodically checks if a list of trials that I'm interested in have changed. It then determines a diff of the changes last made to the record, and emails the result to me.
        </p>

        <p>This project is still very much work in progress, but the basic functionality is implemented:</p>
        <ul>
          <li>A DynamoDB table holds a list of clinical trails to monitor</li>
          <li>
            A Lambda function periodically runs to check for updated trials:
            <ol>
              <li>When an update is detected, it fetches the latest version of the trial</li>
              <li>Then the diff with the previous version is determined</li>
              <li>The trial in the DynamoDB table is updated</li>
              <li>An email is sent that contains a summary of the changes</li>
            </ol>
          </li>
          <li></li>
        </ul>


        <h3>Technology</h3>
        <ul>
          <li>NodeJS, AWS Lambda</li>
          <li>Serverless Framework / CloudFormation</li>
          <li>AWS DynamoDB, SES</li>
        </ul>
      </article>

      <article>
        <h2>Air-Attack.com (offline)</h2>

        <h3>Technology</h3>
        <ul>
          <li>Python, Django</li>
          <li>PHP, Symfony 2</li>
          <li>MySQL</li>
          <li>ElasticSearch</li>
          <li>Apache</li>
        </ul>

        <p>explanation, screenshots.</p>
      </article>
    </section>
  );
}

export default ProjectsPage;
