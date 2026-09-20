import Link from "next/link";
import { ArrowUp, ExternalLink, Mail } from "lucide-react";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { SITE, NAV_LINKS } from "@/lib/constants";
import { socials } from "@/data/socials";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border">
      <AuroraBackground variant="subtle" />

      <div className="mx-auto w-full max-w-[1440px] px-6 pb-8 pt-20 sm:px-10 lg:px-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <p className="font-mono text-sm text-accent-2">{SITE.name}</p>
            <h2 className="mt-3 max-w-xs text-2xl font-semibold tracking-tight sm:text-3xl">
              Let&apos;s build something reliable together.
            </h2>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-6 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
            >
              <Mail className="size-4" />
              {SITE.email}
            </a>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-subtle">Navigate</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-subtle">Elsewhere</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {socials.map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    target={social.icon === "email" ? undefined : "_blank"}
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-foreground"
                  >
                    {social.label}
                    {social.icon !== "email" && <ExternalLink className="size-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 overflow-hidden">
          <p className="select-none whitespace-nowrap text-[18vw] font-semibold leading-none tracking-tight text-foreground/5 sm:text-[9rem]">
            {SITE.name.toUpperCase()}
          </p>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-subtle sm:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE.name}.
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            Back to top
            <ArrowUp className="size-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
