import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/constants";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/70 backdrop-blur-md">
      <nav className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:px-16">
        <Link href="#top" className="font-mono text-sm font-medium tracking-tight">
          {SITE.name}
        </Link>
        <ul className="hidden items-center gap-8 text-sm text-muted md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition-colors hover:text-foreground">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
