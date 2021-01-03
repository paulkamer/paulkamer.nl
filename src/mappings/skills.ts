import { Discipline } from "../data/skills";

type DisciplineMappingType = {
  [K in Discipline]: string;
};

export const DisciplineMapping: Partial<DisciplineMappingType> = {
  [Discipline.Frontend]: "Front-end",
  [Discipline.Backend]: "Back-end",
  [Discipline.SearchQueues]: "Search / Queues",
};
