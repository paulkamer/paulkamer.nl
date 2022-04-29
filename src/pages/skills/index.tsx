import React from 'react';

import { BreadCrumbtrail } from '../../components/Breadcrumbtrail';
import SkillsList from '../../components/SkillsList';
import { skills } from '../../data/skills';

const SkillsIndexPage: React.FC = () => {
  return (
    <section>
      <BreadCrumbtrail trail={[{ label: 'Skills' }]} />

      <SkillsList skills={skills} variant={'expanded'} />
    </section>
  );
};

export default SkillsIndexPage;
