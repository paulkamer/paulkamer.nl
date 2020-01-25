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
        <h2>ClinicalTrials.gov monitor (WIP)</h2>

        <p className="intro">A personal project to get alerts when clinical trials are updated on clinicaltrials.gov.</p>
        <p>
          The clinicaltrials.gov is not very user friendly. It takes quite a bit of effort to look up a particular trail and to determine what it's last changes are.<br/>
          clinicaltrials.gov does provide an API, so I've built a "clinicaltrails monitor" to receive automatic updates of trials that I'm interested in. <br/>
          It periodically checks if a list of trials that I'm interested in have changed. It then determines a diff of the changes last made to the record, and emails the result to me.
        </p>

        <p>This project is still very much work in progress, but the basic functionality is implemented:</p>
        <ul>
          <li>A DynamoDB table "trials" holds a list of clinical trails that I'm interested in</li>
          <li>
            Periodically, a Lambda function is executed to check for updated trials:
            <ol>
              <li>When an update is detected, it fetches the latest version of the trial</li>
              <li>Then, the diff with the previous version is determined</li>
              <li>The trial in the DynamoDB table is updated</li>
              <li>An email is sent that contains a summary of the changes</li>
            </ol>
          </li>
          <li>This Lambda function is also executed when a new record is inserted into the "trials" table</li>
        </ul>

        <p>In the future I intend to make this a public service.</p>

        <h3>Technology</h3>
        <ul>
          <li>AWS Lambda</li>
          <li>NodeJS</li>
          <li>Serverless Framework / CloudFormation</li>
          <li>AWS DynamoDB</li>
        </ul>
      </article>
      <hr/>
      <article>
        <h2>worldfootball</h2>
        <p className="intro">TODO</p>

        <h3>Technology</h3>
        <ul>
          <li>Ruby, Ruby On Rails</li>
          <li>React: Redux, Jest, server-side rendering</li>
          <li>AWS (EC2, S3, ElasticSearch)</li>
          <li>Docker, docker-compose, docker-machine</li>
          <li>Redis, Resque</li>
        </ul>
      </article>
      <hr/>
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

export default ProjectsPage;
