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

        <p className="intro">A personal project to receive alerts when clinical trials are updated on clinicaltrials.gov.</p>
        <p>
          The clinicaltrials.gov is a website provided by the U.S. National Library of Medicine. It is a database of privately and publicly funded clinical studies conducted around the world.
        </p>
        <p>
          Unfortunately, looking up a particular trail and to determine what it's last changes are takes quite a bit of effort. Personally, I monitor a few dozen trials on a weekly basis, and wanted to automate this process.
        </p>
        <p>
          Luckily, clinicaltrials.gov provides an API, so I've built a "clinicaltrails monitor" to receive automatic updates of the trials that I'm interested in. An AWS Lambda function is executed several times per day to
          check if certain trials (stored in an AWS DynamoDB table) have been updated. The function then determines a diff of the changes last made to the trial record, and emails a summary of all the changes that were found to me.
        </p>

        <p>This project is still very much work in progress, but the basic functionality is implemented:</p>
        <ul>
          <li>A DynamoDB table holds a list of clinical trails that I'm interested in</li>
          <li>
            Periodically, a Lambda function is executed to check for updated trials:
            <ol>
              <li>When an update is detected, it fetches the latest version of the trial</li>
              <li>Then, the diff with the previous version is determined</li>
              <li>The trial in the DynamoDB table is updated</li>
              <li>A summary email is sent</li>
            </ol>
          </li>
        </ul>

        <p>In the future I intend to make this a public service.</p>

        <h3>Technology</h3>
        <ul>
          <li>AWS Lambda</li>
          <li>NodeJS</li>
          <li>Serverless Framework in combination with AWS CloudFormation</li>
          <li>AWS DynamoDB</li>
        </ul>
      </article>
      <hr/>
      <article>
        <h2>worldfootball</h2>

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
