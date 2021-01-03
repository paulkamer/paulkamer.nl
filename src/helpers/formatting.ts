import { Discipline } from "../data/skills";
import { Mappings } from "../mappings";

export const formatDisciplineName = (discipline: Discipline): string => {
  return (
    Mappings.Skills.DisciplineMapping[discipline] ?? Discipline[discipline]
  );
};
