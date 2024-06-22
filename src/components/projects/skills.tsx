"use client";

import Skill from "./skill";
import { SkillSet } from "./skillData";

export default function Skills() {
  return (
    <ul className="flex w-full max-w-3xl flex-wrap gap-2">
      {SkillSet.map((skill) => (
        <Skill key={"skill-" + skill.id} {...skill} />
      ))}
    </ul>
  );
}
