export type SkillCategory =
  | "languages"
  | "frontend"
  | "backend"
  | "databases"
  | "devops"
  | "cloud"
  | "ai-ml";

export interface Skill {
  name: string;
  category: SkillCategory;
  /** 1-100, optional — omit if you don't want to imply a precise level. */
  proficiency?: number;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tech: string[];
  image?: string;
  href?: string;
  repoUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location?: string;
  startDate: string;
  endDate?: string;
  summary: string;
  highlights?: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "email" | "twitter";
}
