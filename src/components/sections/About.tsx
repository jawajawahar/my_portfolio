"use client";

import { SectionContainer } from "@/components/ui/SectionContainer";
import { VerticalMarquee } from "@/components/ui/VerticalMarquee";
import { FocusAreaMiniCard } from "@/components/ui/FocusAreaMiniCard";
import { useTypewriter } from "@/hooks/useTypewriter";
import { focusAreas } from "@/data/focusAreas";

const focusAreaLabels = focusAreas.map((area) => area.label);
const reversedFocusAreas = [...focusAreas].reverse();

export function About() {
  const { text, reducedMotion } = useTypewriter(focusAreaLabels);

  return (
    <SectionContainer id="about">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
        <div>
          <p className="font-mono text-sm text-accent-2">About</p>

          <h2 className="mt-3 min-h-[2.4em] text-3xl font-semibold tracking-tight sm:min-h-[1.2em] sm:text-4xl">
            I build as a{" "}
            <span className="inline-flex items-baseline bg-[image:var(--accent-gradient)] bg-clip-text text-transparent">
              {text}
              {!reducedMotion && (
                <span
                  aria-hidden
                  className="animate-caret-blink ml-1 inline-block h-[0.85em] w-[2px] translate-y-[0.05em] bg-current"
                />
              )}
            </span>
          </h2>

          <div className="mt-8 max-w-xl space-y-5 text-muted">
            <p>
              I&apos;m a Junior DevOps Engineer based in Sri Lanka, currently completing a BSc
              (Hons) in Information Technology. I care about the unglamorous parts of shipping
              software — reliable pipelines, reproducible infrastructure, and systems that stay
              boring in production.
            </p>
            <p>
              Most days I&apos;m somewhere between Kubernetes manifests, Terraform modules, and a
              training script — exploring how cloud-native tooling and AI/ML fit into the same
              workflow. Outside of infra, I still enjoy building full-stack products end to end.
            </p>
          </div>
        </div>

        <div className="grid h-80 grid-cols-2 gap-4 sm:h-96">
          <VerticalMarquee
            direction="up"
            durationSeconds={22}
            items={focusAreas.map((area) => (
              <FocusAreaMiniCard key={area.label} area={area} />
            ))}
          />
          <VerticalMarquee
            direction="down"
            durationSeconds={28}
            className="mt-10"
            items={reversedFocusAreas.map((area) => (
              <FocusAreaMiniCard key={area.label} area={area} />
            ))}
          />
        </div>
      </div>
    </SectionContainer>
  );
}
