import React from "react";

import { BreadCrumbtrail } from "../../components/Breadcrumbtrail";

import "./Trialmonitor.scss";

const TrialmonitorPage = () => {
  return (
    <section className="trialmonitor-page">
      <BreadCrumbtrail
        trail={[
          { to: "/projects/", label: "Projects" },
          { label: "ClinicalTrials monitor" },
        ]}
      />

      <h1>ClinicalTrials.gov monitor</h1>

      <p className="intro">
        A personal project to receive alerts when clinical trials are updated on
        clinicaltrials.gov.
      </p>
      <p>
        The{" "}
        <a
          href="https://clinicaltrials.gov/"
          target="_blank"
          rel="noopener noreferrer"
        >
          clinicaltrials.gov
        </a>{" "}
        is a website provided by the U.S. National Library of Medicine. It is a
        database of privately and publicly funded clinical studies conducted
        around the world.
      </p>

      <p>
        I monitor several dozen trials on a weekly basis, but find the
        clinicaltrials.gov website not very user-friendly. Keeping track of many
        trials, and determining what exactly has changed when one is updated,
        takes quite a bit of effort.
        <br />
        You can only view the changes for a single trial at a time, and it takes
        several clicks, much scrolling, and popup window before you get there.
        So I therefore wanted to automate this process.
      </p>

      <p>
        Luckily, they provide an{" "}
        <a
          href="https://clinicaltrials.gov/ct2/resources/download"
          target="_blank"
          rel="noopener noreferrer"
        >
          API
        </a>
        , so I've built a "clinicaltrials monitor" to receive automatic updates
        of the trials that I'm interested in. It's built using an AWS Step
        Functions workflow/StateMachine, which is executed several times per
        day, see the description below.
      </p>

      <p>In the future I intend to make this a publicly-available service.</p>

      <h2>Workflows</h2>
      <p>
        This project is still work in progress, but the following is
        implemented:
      </p>
      <ul>
        <li>A DynamoDB table holds a list of clinical trials to monitor</li>
        <li>
          An AWS Step Functions workflow is periodically executed to check for
          updated trials:
          <ul>
            <li>
              For each updated trial, a Lambda function is triggered, to:
              <ol>
                <li>
                  Fetch the full trial record and update the record in DynamoDB
                </li>
                <li>
                  Determine the diff between the previous and latest version of
                  the trial
                </li>
              </ol>
            </li>
            <li>
              Once all trial records have been updated, another Lambda function
              is triggered, to:
              <ol>
                <li>Format a summary of all detected changes</li>
                <li>Send the summary as an email</li>
              </ol>
            </li>
          </ul>
        </li>
        <li>
          A separate Step Functions periodically checks for newly added trials,
          using search keywords stored in another DynamoDB table.
        </li>
      </ul>

      <p>
        Check for updated trials:
        <img
          className="trialmonitor-page__stepfunctions"
          src="/images/projects/trialsmonitor/trial_monitor_step_functions.png"
          alt="Step Functions workflow for checking updated trials"
          title="Step Functions workflow for checking updated trials"
        />
      </p>
      <p>
        Check for new trials:
        <img
          className="trialmonitor-page__stepfunctions"
          src="/images/projects/trialsmonitor/workflow_newtrialschecker.png"
          alt="Step Functions workflow for new trials"
          title="Step Functions workflow for new trials"
        />
      </p>

      <h2>Frontend</h2>
      <p>
        A frontend website is available at{" "}
        <a
          href="https://trialsmonitor.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          trialsmonitor.com
        </a>{" "}
        (not publicly accessible for now).
        <br />
        The website is written in Angular + TypeScript, and uses AWS Amplify for
        deployment. Amplify is also used for user authentication, which is
        backed by an AWS Cognito User Pool
      </p>

      <h2>Technology</h2>
      <p>Backend workflows:</p>
      <ul>
        <li>
          <a
            href="https://aws.amazon.com/step-functions/"
            target="_blank"
            rel="noopener noreferrer"
          >
            AWS Step Functions
          </a>{" "}
          &{" "}
          <a
            href="https://aws.amazon.com/lambda/"
            target="_blank"
            rel="noopener noreferrer"
          >
            AWS Lambda
          </a>
          , written in{" "}
          <a
            href="https://nodejs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Node.js
          </a>
        </li>
        <li>
          <a
            href="https://serverless.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Serverless Framework
          </a>{" "}
          in combination with{" "}
          <a
            href="https://aws.amazon.com/cloudformation/"
            target="_blank"
            rel="noopener noreferrer"
          >
            AWS CloudFormation
          </a>
        </li>
        <li>
          <a
            href="https://aws.amazon.com/dynamodb/"
            target="_blank"
            rel="noopener noreferrer"
          >
            AWS DynamoDB
          </a>
        </li>
      </ul>
      <p>Frontend website:</p>
      <ul>
        <li>
          <a
            href="https://angular.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Angular (v9.x)
          </a>{" "}
          +{" "}
          <a
            href="https://www.typescriptlang.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            TypeScript
          </a>
        </li>
        <li>
          Deployment + authentication:{" "}
          <a
            href="https://aws.amazon.com/amplify/"
            target="_blank"
            rel="noopener noreferrer"
          >
            AWS Amplify
          </a>
        </li>
        <li>
          Authentication:{" "}
          <a
            href="https://aws.amazon.com/cognito/"
            target="_blank"
            rel="noopener noreferrer"
          >
            AWS Cognito
          </a>
        </li>
        <li>
          Hosting:{" "}
          <a
            href="https://aws.amazon.com/s3/"
            target="_blank"
            rel="noopener noreferrer"
          >
            AWS S3
          </a>{" "}
          +{" "}
          <a
            href="https://aws.amazon.com/cloudfront/"
            target="_blank"
            rel="noopener noreferrer"
          >
            AWS CloudFront
          </a>
        </li>
      </ul>
    </section>
  );
};

export default TrialmonitorPage;
