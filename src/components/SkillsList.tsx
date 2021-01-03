import React from "react";

import { Helpers } from "../helpers";
import { SkillsListType } from "../data/skills";
import "./SkillsList.scss";

interface SkillsListProps {
  skills: SkillsListType;
}

const SkillsList: React.FC<SkillsListProps> = (props) => (
  <section className="skills">
    <h2>Skills</h2>
    <ul className="skills__skillslist">
      {props.skills.map((skillsGroup, index) => (
        <li key={`sk_${index}`} className="skillsgroup">
          <span className="skillsgroup__discipline">
            {Helpers.Formatting.formatDisciplineName(skillsGroup.discipline)}:
          </span>

          <ul className="skillsgroup__skillslist">
            {skillsGroup.skills.map((skill, si) => (
              <li key={`${index}_${si}`} className="skillsgroup__skill">
                {skill.name}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </section>
);

export default SkillsList;
