import React from "react";

import { BreadCrumbtrail } from "../../components/Breadcrumbtrail";
import SkillsList from "../../components/SkillsList";
import { skills } from "../../data/skills";

const SkillsIndexPage = () => {
  return (
    <section>
      <BreadCrumbtrail trail={[{ label: "Skills" }]} />

      <SkillsList skills={skills} />
    </section>
  );
};

export default SkillsIndexPage;
