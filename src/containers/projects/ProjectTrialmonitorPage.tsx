import React from 'react';
import { Link } from 'react-router-dom';

const ClinicaltrialsmonitorPage = () => {
  return (
    <section>
      <nav>
        <Link to="/">Home</Link> > <Link to="/projects/">Projects</Link> > ClinicalTrials monitor
      </nav>

      <h1>ClinicalTrials monitor</h1>

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
    </section>
  );
}

export default ClinicaltrialsmonitorPage;
