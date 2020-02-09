import React from 'react';

import { Breadcrumbtrail } from '../../components/Breadcrumbtrail'

import './ProjectTrialmonitorPage.scss';

const ProjectTrialmonitorPage = () => {
  return (
    <section className="trialmonitor-page">
      <Breadcrumbtrail trail={[{ to: '/projects/', label: 'Projects' }, { label: 'ClinicalTrials monitor' }]} />

      <h1>ClinicalTrials.gov monitor</h1>

      <p className="intro">A personal project to receive alerts when clinical trials are updated on clinicaltrials.gov.</p>
        <p>
          The <a href="https://clinicaltrials.gov/" target="_blank" rel="noopener noreferrer">clinicaltrials.gov</a> is a website
          provided by the U.S. National Library of Medicine. It is a database of privately and publicly funded clinical studies
          conducted around the world.
        </p>

        <p>
          I monitor several dozen trials on a weekly basis, but find the clinicaltrials.gov website not very user-friendly. Keeping track
          of many trials, and determining what exactly has changed when one is updated, takes quite a bit of effort.<br/>
          You can only view the changes for a single trial at a time, and it takes several clicks, much scrolling, and popup window before
          you get there. So I therefore wanted to automate this process.
        </p>

        <p>
          Luckily, they provide an <a href="https://clinicaltrials.gov/ct2/resources/download" target="_blank" rel="noopener noreferrer">API</a>,
          so I've built a "clinicaltrials monitor" to receive automatic updates of the trials that I'm interested in.
          It's built using an AWS Step Functions workflow/StateMachine, which is executed several times per day, see the description below.
        </p>

        <p>This project is still work in progress, but the basic functionality is implemented:</p>
        <ul>
          <li>A DynamoDB table holds a list of clinical trials to monitor</li>
          <li>A Step Functions workflow is periodically executed to check for updated trials</li>
          <li>
            For each updated trial, a Lambda function is triggered, to:
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

        <p>
          <img
            className="trialmonitor-page__stepfunctions"
            src="/images/projects/trialsmonitor/trial_monitor_step_functions.png"
            alt="AWS Step Functions"
            title="AWS Step Functions"
          />
        </p>

        <p>
          In the future I intend to make this a publicly-available service.
        </p>

        <h3>Technology</h3>
        <ul>
          <li><a href="https://aws.amazon.com/step-functions/" target="_blank" rel="noopener noreferrer">AWS Step Functions</a> & <a href="https://aws.amazon.com/lambda/" target="_blank" rel="noopener noreferrer">AWS Lambda</a>, written in <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">Node.js</a></li>
          <li><a href="https://serverless.com" target="_blank" rel="noopener noreferrer">Serverless Framework</a> in combination with <a href="https://aws.amazon.com/cloudformation/" target="_blank" rel="noopener noreferrer">AWS CloudFormation</a></li>
          <li><a href="https://aws.amazon.com/dynamodb/" target="_blank" rel="noopener noreferrer">AWS DynamoDB</a></li>
        </ul>
    </section>
  );
}

export default ProjectTrialmonitorPage;
