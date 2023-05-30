import React from "react";

import JobsList from "../components/JobsList";
import CertificationsList from "../components/CertificationsList";

const Home: React.FC = () => {
  return (
    <article className="home-page">
      <section id="bio" className="bio">
        <h2>About me</h2>
        <p>
          I am a software architect with a background in full-stack development, specializing in C# .NET, Python, and TypeScript.
          I'm passionate about creating robust and scalable software solutions. I possess expertise in cloud technology, particularly Azure, as well as a strong focus on backend development.</p>

        <p>
          Throughout my career, I have actively mentored and provided guidance to fellow developers and acted as team lead for several projects. I am adept at analyzing business requirements and translating them into technical solutions, aligning with industry best practices and standards.
        </p>
        <p>
          Download my CV: <a href="/docs/cv.pdf">Dutch</a> |{" "}
          <a href="/docs/cv_en.pdf">English</a>
        </p>
      </section>

      <section id="jobs">
        <JobsList />
      </section>

      <section id="certificates">
        <CertificationsList />
      </section>
    </article>
  );
};

export default Home;
