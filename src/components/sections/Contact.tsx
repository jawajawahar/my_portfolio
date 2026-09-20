import { SectionContainer } from "@/components/ui/SectionContainer";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { SITE } from "@/lib/constants";

export function Contact() {
  return (
    <div className="relative">
      <AuroraBackground variant="subtle" />
      <SectionContainer id="contact">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Contact</h2>
        <p className="mt-6 max-w-2xl text-muted">
          Reach out at{" "}
          <a href={`mailto:${SITE.email}`} className="text-foreground underline underline-offset-4">
            {SITE.email}
          </a>
          .
        </p>
      </SectionContainer>
    </div>
  );
}
