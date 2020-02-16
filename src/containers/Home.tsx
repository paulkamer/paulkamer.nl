import React from 'react';
import { Link } from 'react-router-dom';

import SkillsList from '../components/SkillsList';
import JobsList from '../components/JobsList';

const Home = () => {

  return (
    <article className="home-page">
      <section id="bio" className="bio">
        <h2>About me</h2>
        <p>I'm an experienced full-stack web developer, more inclined towards back-end development, from The Hague in The Netherlands.</p>
        <p>
          I've worked in the sports data industry for over 8 years. The last 4 years I worked as a Tech Lead
          for <a href="https://start.me" target="_blank" rel="noopener noreferrer">start.me</a>, an online start page/bookmark manager service.
        </p>

        <p>My main interests & experience are: Ruby, Node, PHP, PostgreSQL, JS (vanilla, Vue & React), cloud & serverless.</p>
        <p>Download my CV: <a href="/docs/cv.pdf">Dutch</a> | <a href="/docs/cv_en.pdf">English</a></p>
      </section>

      <section id="skills">
        <SkillsList />
      </section>

      <section id="jobs">
        <JobsList />
      </section>

      <section className="projects">
        <h2 >Projects</h2>
        For an impression of personal projects I've worked on, see the <Link to="/projects/">Projects page</Link>.
      </section>
    </article>
  );
}

export default Home;
