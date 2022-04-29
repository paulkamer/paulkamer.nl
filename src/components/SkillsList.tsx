import React from 'react';

import { Helpers } from '../helpers';
import { SkillsListType } from '../data/skills';
import './SkillsList.scss';

interface SkillsListProps {
  skills: SkillsListType;
  variant: 'list' | 'expanded';
}

const SkillsList: React.FC<SkillsListProps> = (props) => {
  const classNames = ['skills', props.variant];

  return (
    <section className={classNames.join('--')}>
      <h2>Skills</h2>
      <ul className="skills__skillslist">
        {props.skills.map((skillsGroup, index) => (
          <li key={`sk_${index}`} className="skillsgroup">
            <span className="skillsgroup__discipline">
              {Helpers.Formatting.formatDisciplineName(skillsGroup.discipline)}
            </span>

            <ul className="skillsgroup__skillslist">
              {skillsGroup.skills.map((skill, si) => (
                <li key={`${index}_${si}`} className="skillsgroup__skill">
                  <span className="skil__name">{skill.name}</span>

                  {props.variant === 'expanded' && (
                    <span
                      className="skill__rating"
                      data-rating={skill.rating}
                    />
                  )}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SkillsList;
