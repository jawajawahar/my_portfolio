import { SectionContainer } from "@/components/ui/SectionContainer";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { SITE } from "@/lib/constants";

export function Hero() {
  return (
    <div className="relative">
      <AuroraBackground variant="hero" />
      <SectionContainer id="top" className="flex min-h-screen flex-col justify-center pt-16">
        <p className="font-mono text-sm text-accent-2">{SITE.role}</p>
        <h1 className="mt-4 max-w-4xl bg-[image:var(--accent-gradient)] bg-clip-text text-5xl font-semibold tracking-tight text-transparent sm:text-7xl">
          {SITE.name}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted">{SITE.tagline}</p>
      </SectionContainer>
    </div>
  );
}
