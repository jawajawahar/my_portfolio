import type { SocialLink } from "@/types";
import { SITE } from "@/lib/constants";

// TODO: swap in real GitHub/LinkedIn URLs.
export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/", icon: "linkedin" },
  { label: "Email", href: `mailto:${SITE.email}`, icon: "email" },
];
