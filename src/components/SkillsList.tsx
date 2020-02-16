import React from 'react';

import './SkillsList.scss';

const SkillsList = () => {
  const skills = [
    {
      discipline: 'Back-end',
      skills: ['Ruby','Node.js','PHP']
    },
    {
      discipline: 'Databases',
      skills: ['PostgreSQL', 'Redis', 'MySQL','Oracle']
    },
    {
      discipline: 'Search / Queues',
      skills: ['Elasticsearch', 'Resque', 'RabbitMQ', 'Celery']
    },
    {
      discipline: 'Infrastructure',
      skills: ['Heroku', 'Cloudflare', 'Cloud (AWS)', 'Serverless', 'Docker', 'Puppet']
    },
    {
      discipline: 'Front-end',
      skills: ['Vue.js','Nuxt.js','React', 'Riot.js'],
    },
    {
      discipline: 'Unit testing',
      skills: ['Mocha', 'Jest', 'Enzyme', 'Sinon', 'Chai', 'minitest (Ruby)'],
    },
    {
      discipline: 'Misc',
      skills: ['Git', 'SQL', 'Nginx', 'Apache', 'JMeter','UML','ArchiMate']
    }
  ];

  return (
    <section className="skills">
      <h2>Skills</h2>
      <ul className="skills__skillslist">
        {
          skills.map((discipline, index) => {
            return <li key={`sk_${index}`} className="skillsgroup">
              <span className="skillsgroup__discipline">{discipline.discipline}:</span>
              <ul className="skillsgroup__skillslist">
                {
                  discipline.skills.map((skill, si) =>
                    <li key={`${index}_${si}`} className="skillsgroup__skill">{skill}</li>
                  )
                }
              </ul>
            </li>
          })
        }
      </ul>
    </section>
  );
}

export default SkillsList;
