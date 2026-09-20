import { SITE } from "@/lib/constants";
import { socials } from "@/data/socials";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-4 px-6 py-10 text-sm text-muted sm:flex-row sm:justify-between sm:px-10 lg:px-16">
        <p>
          © {new Date().getFullYear()} {SITE.name}. Built with Next.js.
        </p>
        <ul className="flex items-center gap-6">
          {socials.map((social) => (
            <li key={social.href}>
              <a
                href={social.href}
                target={social.icon === "email" ? undefined : "_blank"}
                rel="noreferrer"
                className="transition-colors hover:text-foreground"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
