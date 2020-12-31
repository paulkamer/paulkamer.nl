export enum Discipline {
  "Back-end",
  "Front-end",
  "Databases",
  "Cloud",
  "Hosting",
  "Search / Queues",
  "Testing",
  "Misc",
}

type Disciplines = {
  discipline: Discipline;
  skills: string[];
};

export type SkillsListType = Disciplines[];

export const skills: SkillsListType = [
  {
    discipline: Discipline["Back-end"],
    skills: ["Ruby", "Node.js", "C# .NET", "PHP", "Python"],
  },
  {
    discipline: Discipline["Front-end"],
    skills: ["React", "Vue.js", "Angular", "Nuxt.js", "RxJS", "Riot.js"],
  },
  {
    discipline: Discipline.Databases,
    skills: ["PostgreSQL", "Redis", "MySQL", "DynamoDB", "Oracle"],
  },
  {
    discipline: Discipline["Search / Queues"],
    skills: ["Elasticsearch", "Resque", "RabbitMQ", "Celery"],
  },
  {
    discipline: Discipline.Cloud,
    skills: [
      "EC2",
      "S3",
      "CloudFront",
      "API Gateway",
      "CloudFormation",
      "Lambda",
      "Step Functions",
      "Amplify",
      "Cognito",
      "Serverless Framework",
    ],
  },
  {
    discipline: Discipline.Hosting,
    skills: ["Heroku", "DigitalOcean", "Cloudflare", "Akamai"],
  },
  {
    discipline: Discipline.Testing,
    skills: [
      "Jest",
      "Mocha",
      "Ava",
      "Enzyme",
      "Sinon",
      "Chai",
      "IstanbulJS",
      "Selenium",
      "Ruby minitest",
      "RSpec",
    ],
  },
  {
    discipline: Discipline.Misc,
    skills: [
      "Git",
      "Docker",
      "SQL",
      "Nginx",
      "Apache",
      "JMeter",
      "UML",
      "ArchiMate",
    ],
  },
];
