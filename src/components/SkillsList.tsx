import React from "react";

import { Discipline, SkillsListType } from "../data/skills";
import "./SkillsList.scss";

interface SkillsListProps {
  skills: SkillsListType;
}

const SkillsList: React.FC<SkillsListProps> = (props) => {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <ul className="skills__skillslist">
        {props.skills.map((discipline, index) => {
          return (
            <li key={`sk_${index}`} className="skillsgroup">
              <span className="skillsgroup__discipline">
                {Discipline[discipline.discipline]}:
              </span>
              <ul className="skillsgroup__skillslist">
                {discipline.skills.map((skill, si) => (
                  <li key={`${index}_${si}`} className="skillsgroup__skill">
                    {skill}
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default SkillsList;
