import { SectionContainer } from "@/components/ui/SectionContainer";
import { skills } from "@/data/skills";

export function Skills() {
  return (
    <SectionContainer id="skills">
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Skills</h2>
      <ul className="mt-8 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="rounded-[var(--radius-sm)] border border-border px-4 py-2 font-mono text-sm text-muted"
          >
            {skill.name}
          </li>
        ))}
      </ul>
    </SectionContainer>
  );
}
