import React from "react";
import { Link } from "react-router-dom";

import { BreadCrumbtrail } from "../../components/Breadcrumbtrail";
import IntroArticle from "../../components/IntroArticle";

const ProjectsIndexPage = () => {
  return (
    <section>
      <BreadCrumbtrail trail={[{ label: "Side projects" }]} />
      <h1>Side projects</h1>

      <IntroArticle
        title="ClinicalTrials.gov monitor"
        articleText={
          <article>
            <p>
              A service to receive notifications about updated clinical trials
              on ClinicalTrials.gov.
            </p>
            <p>
              <Link to="/projects/trialsmonitor/">Description</Link> |{" "}
              <a
                href="https://github.com/paulkamer/trialmonitor"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source code
              </a>
            </p>
          </article>
        }
        imageUrl="/images/projects/trialsmonitor/trialsmonitor.png"
        url="/projects/trialsmonitor/"
      />

      <IntroArticle
        title="WWII Quotes Twitter Bot"
        articleText={
          <article>
            <p>A twitter bot that tweets famous WW2-related quotes.</p>
            <p>
              <Link to="/projects/ww2quotesbot/">Description</Link> |{" "}
              <a
                href="https://github.com/paulkamer/ww2quotesbot"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source code
              </a>
            </p>
          </article>
        }
        imageUrl="/images/projects/twitter-icon.svg"
        url="/projects/ww2quotesbot/"
      />

      <IntroArticle
        title="Worldfootball"
        articleText={
          <article>
            <p>
              A football results and statistics website, written in React and
              Ruby.
            </p>
            <p>
              <Link to="/projects/worldfootball/">Description</Link>
            </p>
          </article>
        }
        imageUrl="/images/projects/worldfootball/football.png"
        url="/projects/worldfootball/"
      />

      <IntroArticle
        title="Air-Attack"
        articleText={
          <article>
            <p>
              Air-Attack was military aviation-related hobby website that I ran
              for several years.
              <br />
            </p>

            <h3>Technology</h3>
            <ul>
              <li>Front-end: PHP, Symfony 2, Apache</li>
              <li>Back-end: Python, Django, RabbitMQ, Celery</li>
              <li>Infrastructure: Amazon EC2, Supervisor, Puppet</li>
              <li>DB & Search: MySQL, ElasticSearch</li>
            </ul>
          </article>
        }
        imageUrl="/images/projects/airattack.png"
      />
    </section>
  );
};

export default ProjectsIndexPage;
