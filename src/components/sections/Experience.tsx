import { SectionContainer } from "@/components/ui/SectionContainer";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <SectionContainer id="experience">
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Experience</h2>
      <ol className="mt-10 space-y-10">
        {experience.map((item) => (
          <li key={item.id} className="border-l border-border pl-6">
            <p className="font-mono text-xs text-accent-2">
              {item.startDate} — {item.endDate ?? "Present"}
            </p>
            <h3 className="mt-1 text-lg font-medium">{item.role}</h3>
            <p className="text-sm text-muted">
              {item.organization}
              {item.location ? ` · ${item.location}` : ""}
            </p>
            <p className="mt-3 max-w-2xl text-sm text-muted">{item.summary}</p>
            {item.highlights && item.highlights.length > 0 && (
              <ul className="mt-3 max-w-2xl space-y-1.5 text-sm text-muted">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span className="text-accent">▹</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </SectionContainer>
  );
}
