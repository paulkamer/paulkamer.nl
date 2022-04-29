import React from "react";

import { BreadCrumbtrail } from "../../components/Breadcrumbtrail";

const Ww2TwitterBotPage: React.FC = () => {
  return (
    <section>
      <BreadCrumbtrail
        trail={[
          { to: "/projects/", label: "Projects" },
          { label: "WW2 Quotes Twitter Bot" },
        ]}
      />

      <h1>WW2 Quotes Twitter Bot</h1>

      <p>
        <a
          href="https://twitter.com/QuotesWw2"
          target="_blank"
          rel="noopener noreferrer"
        >
          @QuotesWw2
        </a>{" "}
        - A custom-built twitter bot that periodically tweets famous WWII-era
        quotes.
      </p>

      <ul>
        <li>AWS Lambda Function written in Node.js (TypeScript)</li>
        <li>
          The tweets/quotes are stored in a CSV file that is stored on AWS S3
          <ul>
            <li>
              Using the{" "}
              <a
                href="https://docs.aws.amazon.com/cli/latest/reference/s3api/select-object-content.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                selectObjectContent
              </a>{" "}
              API, a random tweet is selected from the CSV file using an SQL
              query.
            </li>
          </ul>
        </li>
        <li>
          The credentials to use the Twitter API are encrypted using AWS Key
          Management Service (KMS) and stored in the AWS Systems Manager (SSM)
          Parameter Store. They are fetched and decrypted at runtime.
        </li>
      </ul>

      <p>
        The source code is available at{" "}
        <a
          href="https://github.com/paulkamer/ww2quotesbot"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        .
      </p>

      <h2>Technology</h2>
      <ul>
        <li>Node.js, using TypeScript, Prettier + ESLint</li>
        <li>AWS KMS + SSM Parameter Store</li>
        <li>AWS Lambda</li>
        <li>AWS S3</li>
        <li>Deployed using AWS CloudFormation & AWS Lambda</li>
      </ul>
    </section>
  );
};

export default Ww2TwitterBotPage;
