"use client";

import Skill from "./skill";
import { SkillSet } from "./skillData";

export default function Skills() {
  return (
    <ul className="flex w-full flex-wrap gap-2">
      {SkillSet.map((skill) => (
        <Skill key={"skill-" + skill.id} {...skill} />
      ))}
    </ul>
  );
}
