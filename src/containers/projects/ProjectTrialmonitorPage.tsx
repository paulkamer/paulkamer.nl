import React from 'react';

import { Breadcrumbtrail } from '../../components/Breadcrumbtrail'

const ClinicaltrialsmonitorPage = () => {
  return (
    <section>
      <Breadcrumbtrail trail={[{ to: '/projects/', label: 'Projects' }, { label: 'ClinicalTrials monitor' }]} />

      <h1>ClinicalTrials monitor</h1>

      <p className="intro">A personal project to receive alerts when clinical trials are updated on clinicaltrials.gov.</p>
        <p>
          The <a href="https://clinicaltrials.gov/" target="_blank" rel="noopener noreferrer">clinicaltrials.gov</a> is a website provided by the U.S. National Library of Medicine. It is a database of privately and publicly funded clinical studies conducted around the world.
        </p>
        <p>
          Unfortunately, looking up a particular trail and to determine what it's last changes are takes quite a bit of effort. Personally, I monitor a few dozen trials on a weekly basis, so wanted to automate this process.
        </p>
        <p>
          Luckily, clinicaltrials.gov provides an API, so I've built a "clinicaltrails monitor" to receive automatic updates of the trials that I'm interested in. An AWS Lambda function is executed several times per day to
          check if certain trials (stored in an AWS DynamoDB table) have been updated. Then, a diff of the changed trial records is determined, and a notification email is sent.
        </p>

        <p>This project is still work in progress, but the basic functionality is implemented:</p>
        <ul>
          <li>A DynamoDB table holds a list of clinical trails to monitor</li>
          <li>A Lambda function is periodically executed to check for updated trials</li>
          <li>
            For each updated trial, a follow-up Lambda function is triggered, to:
            <ol>
              <li>Fetch the full trial record and update the record in DynamoDB</li>
              <li>Determine the diff between the previous and latest version of the trial</li>
            </ol>
          </li>
          <li>
            Once all trial records have been updated, another Lambda function is triggered, to:
            <ol>
              <li>Format a summary of all detected changes</li>
              <li>Send the summary as an email</li>
            </ol>
          </li>
        </ul>

        <p/>
        <p>
          In the future I intend to make this a publicly-available service.
        </p>

        <h3>Technology</h3>
        <ul>
          <li><a href="https://aws.amazon.com/lambda/" target="_blank" rel="noopener noreferrer">AWS Lambda</a> functions, written in <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">Node.js</a></li>
          <li><a href="https://serverless.com" target="_blank" rel="noopener noreferrer">Serverless Framework</a> in combination with <a href="https://aws.amazon.com/cloudformation/" target="_blank" rel="noopener noreferrer">AWS CloudFormation</a></li>
          <li><a href="https://aws.amazon.com/dynamodb/" target="_blank" rel="noopener noreferrer">AWS DynamoDB</a></li>
        </ul>
    </section>
  );
}

export default ClinicaltrialsmonitorPage;
