import React from 'react';

import './SkillsList.scss';

const SkillsList = () => {
  const skills = [
    {
      discipline: 'Back-end',
      skills: ['Ruby','Node.js','PHP', 'Python']
    },
    {
      discipline: 'Front-end',
      skills: ['Vue.js', 'Nuxt.js','React', 'Angular', 'RxJS', 'Riot.js'],
    },
    {
      discipline: 'Databases',
      skills: ['PostgreSQL', 'Redis', 'MySQL', 'DynamoDB', 'Oracle']
    },
    {
      discipline: 'Search / Queues',
      skills: ['Elasticsearch', 'Resque', 'RabbitMQ', 'Celery']
    },
    {
      discipline: 'AWS / Cloud',
      skills: ['EC2', 'S3', 'CloudFront', 'API Gateway', 'CloudFormation', 'Lambda', 'Step Functions', 'Amplify', 'Cognito', 'Serverless Framework']
    },
    {
      discipline: 'Hosting / CDN',
      skills: ['Heroku', 'DigitalOcean', 'Cloudflare', 'Akamai']
    },
    {
      discipline: 'Unit/e2e testing',
      skills: ['Mocha', 'Jest', 'Enzyme', 'Sinon', 'Chai', 'Ruby minitest', 'Protractor', 'Selenium'],
    },
    {
      discipline: 'Misc',
      skills: ['Git', 'Docker', 'SQL', 'Nginx', 'Apache', 'JMeter','UML','ArchiMate']
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
