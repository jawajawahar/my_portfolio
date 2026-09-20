import type { FocusArea } from "@/data/focusAreas";

export function FocusAreaMiniCard({ area }: { area: FocusArea }) {
  const Icon = area.icon;

  return (
    <div className="flex flex-col gap-3 rounded-[var(--radius-lg)] border border-border bg-surface/60 p-5 backdrop-blur-sm">
      <div className="inline-flex size-9 w-fit items-center justify-center rounded-[var(--radius-sm)] border border-border bg-background/60 text-accent-2">
        <Icon className="size-4" />
      </div>
      <div>
        <h3 className="text-sm font-medium text-foreground">{area.label}</h3>
        <p className="mt-1 text-xs leading-relaxed text-muted">{area.description}</p>
      </div>
      <ul className="flex flex-wrap gap-1.5">
        {area.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] text-muted"
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}
