import React from "react";

type Job = {
  company: string;
  tenure: string;
  url: string;
  logo_url: string;
  text: React.ReactElement;
};

export const JobsList: Job[] = [
  {
    company: "Netcompany",
    tenure: "May 2020 - current",
    logo_url: "/images/logo-netcompany.png",
    url: "/jobs/netcompany",
    text: (
      <section>
        <p>
          Netcompany provides end to end services from advisory over development
          and implementation to operation of large IT solutions to large
          enterprises and governments. It is an international company with
          offices in 6 countries, with over 2.500 employees.
        </p>
        <p>My curreny role at Netcompany is Managing Architect.</p>
      </section>
    ),
  },
  {
    company: "start.me",
    tenure: "dec 2015 - April 2020",
    logo_url: "/images/logo-startme.png",
    url: "/jobs/startme",
    text: (
      <section>
        <p>
          start.me is an online start page/bookmark manager for both personal
          and professional use.
        </p>
        <p>
          As a Senior Web Developer, and later Tech Lead, I've worked on
          numerous front-end, back-end and infrastructure-related projects.
        </p>
      </section>
    ),
  },
  {
    company: "Global Sports Media / Perform Group",
    tenure: "jan 2010 - nov 2015",
    logo_url: "/images/logo-perform.svg",
    url: "/jobs/gsm_perform",
    text: (
      <section>
        <p>
          Global Sports Media (GSM) collects and syndicates sports statistics
          via a REST API, FTP push service and hosted (white-label) websites and
          widgets.
        </p>
        <p>
          After being fully acquired by Perform Group, I've worked as a Software
          Architect on, amongst other things, a project to introduce a new
          sports data collection platform.
        </p>
      </section>
    ),
  },
  {
    company: "Sport-Track / MyLaps",
    tenure: "may 2007 - dec 2009",
    logo_url: "/images/logo-mylaps.svg",
    url: "https://www.mylaps.com",
    text: (
      <section>
        <p>
          Sport-Track developed a GPS-based live tracking and tracing system for
          sporting events.
        </p>
        <p>
          As a web developer I worked on a back-end portal written in PHP, which
          was backed by an Oracle database. Using this portal, organisers could
          manage their sporting events. It also served as a registration portal
          for participants.
        </p>
      </section>
    ),
  },
];
