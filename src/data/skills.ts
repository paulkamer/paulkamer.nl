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
      { name: "C# .NET", rating: 4 },
      { name: "TypeScript", rating: 4 },
      { name: "Python", rating: 4 },
      { name: "Ruby", rating: 3 },
    ],
  },
  {
    discipline: Discipline.Frontend,
    skills: [
      { name: "React", rating: 5 },
      { name: "Vue.js", rating: 3 },
      { name: "Angular", rating: 2 },
      { name: "CSS/Sass/Less", rating: 4 },
    ],
  },
  {
    discipline: Discipline.Databases,
    skills: [
      { name: "PostgreSQL", rating: 4 },
      { name: "Redis", rating: 4 },
      { name: "MySQL/MariaDB", rating: 4 },
    ],
  },
  {
    discipline: Discipline.SearchQueues,
    skills: [
      { name: "Resque (Ruby)", rating: 4 },
      { name: "Elasticsearch", rating: 3 },
      { name: "RabbitMQ", rating: 3 },
    ],
  },
  {
    discipline: Discipline.Cloud,
    skills: [
      { name: "Azure AKS", rating: 4 },
      { name: "Azure Web Apps", rating: 3 },
      { name: "Azure ARM templates", rating: 4 },
      { name: "AWS EC2", rating: 4 },
      { name: "AWS S3", rating: 4 },
      { name: "AWS CloudFront", rating: 3 },
      { name: "AWS CloudFormation", rating: 3 },
      { name: "AWS Lambda + Step Functions", rating: 4 },
      { name: "Serverless Framework", rating: 3 },
      { name: "Cloudflare", rating: 4 },
    ],
  },
  {
    discipline: Discipline.Hosting,
    skills: [
      { name: "Heroku", rating: 5 },
      { name: "DigitalOcean", rating: 3 },
    ],
  },
  {
    discipline: Discipline.Testing,
    skills: [
      { name: "Jest", rating: 4 },
      { name: "Mocha", rating: 4 },
      { name: "Enzyme", rating: 3 },
      { name: "Sinon", rating: 4 },
      { name: "Chai", rating: 4 },
      { name: "Ruby minitest", rating: 3 },
      { name: "RSpec", rating: 3 },
    ],
  },
  {
    discipline: Discipline.Misc,
    skills: [
      { name: "Docker", rating: 5 },
      { name: "Git", rating: 5 },
      { name: "SQL", rating: 4 },
      { name: "UML", rating: 4 },
      { name: "Nginx", rating: 3 },
      { name: "Apache", rating: 3 },
      { name: "JMeter", rating: 3 },
      { name: "ArchiMate", rating: 2 },
    ],
  },
];
