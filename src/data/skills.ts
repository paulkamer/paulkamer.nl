export enum Discipline {
  Backend,
  Frontend,
  Databases,
  Cloud,
  Hosting,
  SearchQueues,
  Testing,
  Misc,
}

type Skill = {
  name: string;
  rating: number;
};

export type Disciplines = {
  discipline: Discipline;
  skills: Skill[];
};

export type SkillsListType = Disciplines[];

export const skills: SkillsListType = [
  {
    discipline: Discipline.Backend,
    skills: [
      { name: "Ruby", rating: 4 },
      { name: "Node.js", rating: 4 },
      { name: "C# .NET", rating: 2 },
      { name: "PHP", rating: 4 },
      { name: "Python", rating: 2 },
    ],
  },
  {
    discipline: Discipline.Frontend,
    skills: [
      { name: "Vue.js", rating: 5 },
      { name: "React", rating: 4 },
      { name: "Angular", rating: 3 },
      { name: "Riot.js", rating: 3 },
    ],
  },
  {
    discipline: Discipline.Databases,
    skills: [
      { name: "PostgreSQL", rating: 4 },
      { name: "Redis", rating: 4 },
      { name: "MySQL", rating: 4 },
      { name: "DynamoDB", rating: 3 },
      { name: "Oracle", rating: 2 },
    ],
  },
  {
    discipline: Discipline.SearchQueues,
    skills: [
      { name: "Elasticsearch", rating: 3 },
      { name: "RabbitMQ", rating: 3 },
      { name: "Resque (Ruby)", rating: 4 },
      { name: "Celery (Python)", rating: 3 },
    ],
  },
  {
    discipline: Discipline.Cloud,
    skills: [
      { name: "EC2", rating: 4 },
      { name: "S3", rating: 4 },
      { name: "CloudFront", rating: 3 },
      { name: "API Gateway", rating: 3 },
      { name: "CloudFormation", rating: 3 },
      { name: "Lambda", rating: 4 },
      { name: "Step Functions", rating: 3 },
      { name: "Amplify", rating: 3 },
      { name: "Cognito", rating: 3 },
      { name: "Serverless Framework", rating: 3 },
    ],
  },
  {
    discipline: Discipline.Hosting,
    skills: [
      { name: "Heroku", rating: 5 },
      { name: "DigitalOcean", rating: 3 },
      { name: "Cloudflare", rating: 4 },
      { name: "Akamai", rating: 2 },
    ],
  },
  {
    discipline: Discipline.Testing,
    skills: [
      { name: "Jest", rating: 4 },
      { name: "Mocha", rating: 4 },
      { name: "Ava", rating: 3 },
      { name: "Enzyme", rating: 3 },
      { name: "Sinon", rating: 4 },
      { name: "Chai", rating: 4 },
      { name: "Cypress", rating: 3 },
      { name: "Selenium", rating: 3 },
      { name: "Ruby minitest", rating: 3 },
      { name: "RSpec", rating: 3 },
    ],
  },
  {
    discipline: Discipline.Misc,
    skills: [
      { name: "Git", rating: 5 },
      { name: "Docker", rating: 4 },
      { name: "SQL", rating: 4 },
      { name: "Nginx", rating: 3 },
      { name: "Apache", rating: 3 },
      { name: "JMeter", rating: 3 },
      { name: "UML", rating: 4 },
      { name: "ArchiMate", rating: 2 },
    ],
  },
];
