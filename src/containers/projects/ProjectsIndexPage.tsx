import React from 'react';
import { Link } from 'react-router-dom';

import { Breadcrumbtrail } from '../../components/Breadcrumbtrail'
import IntroArticle from '../../components/IntroArticle';

const ProjectsIndexPage = () => {
  return (
    <section>
      <Breadcrumbtrail trail={[{ label: 'Projects' }]} />
      <h1>Projects</h1>

      <IntroArticle
        title="ClinicalTrials.gov monitor"
        articleText={
          <article>
            <p>A service to receive notifications about updated clinical trials on ClinicalTrials.gov.</p>
            <p>For a full description, click <Link to="/projects/trialsmonitor/">here</Link>.</p>
          </article>
        }
        imageUrl="/images/projects/trialsmonitor/trialsmonitor.png"
        imageLinkTo="/projects/trialsmonitor/"
      />

      <IntroArticle
        title="Worldfootball"
        articleText={
          <article>
            <p>A football results and statistics website, written in React and Ruby.</p>
            <p>Read <Link to="/projects/worldfootball/">more</Link>.</p>
          </article>
        }
        imageUrl="/images/projects/worldfootball/football.png"
        imageLinkTo="/projects/worldfootball/"
      />

      <IntroArticle
        title="Compound interest calculator"
        articleText={
          <article>
            <p>A mini project to play around with <a href="https://riot.js.org/" target="_blank" rel="noopener noreferrer">Riot.js</a>.</p>
            <p>
              View <a href="https://github.com/paulkamer/compound-interest-calculator" target="_blank" rel="noopener noreferrer">source</a> & <a href="https://codesandbox.io/embed/compound-interest-calculator-4d5kf?fontsize=14&view=preview" target="_blank" rel="noopener noreferrer">demo</a>
            </p>
          </article>
        }
        imageUrl="/images/projects/calculator.png"
        imageLinkUrl="https://github.com/paulkamer/compound-interest-calculator"
        imageLinkTarget="_blank"
      />

      <IntroArticle
        title="Air-Attack"
        articleText={
          <article>
            <p>
              Air-Attack was military aviation-related hobby website that I ran for several years.*<br/>
            </p>

            <h3>Technology</h3>
            <ul>
              <li>Front-end: PHP, Symfony 2, Apache</li>
              <li>Back-end: Python, Django</li>
              <li>Infrastructure: Amazon EC2</li>
              <li>DB & Search: MySQL, ElasticSearch</li>
            </ul>
          </article>
        }
        imageUrl="/images/projects/airattack.png"
      />

      <footer className="footnotes">*The domain has since been taken over by spammers it seems.</footer>
    </section>
  );
}

export default ProjectsIndexPage;
