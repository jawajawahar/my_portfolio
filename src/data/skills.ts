import type { Skill } from "@/types";

// TODO: refine proficiency values when we build the Skills section.
export const skills: Skill[] = [
  { name: "TypeScript", category: "languages" },
  { name: "Java", category: "languages" },
  { name: "Python", category: "languages" },

  { name: "Next.js", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },

  { name: "Node.js", category: "backend" },
  { name: "Spring Boot", category: "backend" },

  { name: "PostgreSQL", category: "databases" },
  { name: "MongoDB", category: "databases" },

  { name: "Docker", category: "devops" },
  { name: "Kubernetes", category: "devops" },
  { name: "Terraform", category: "devops" },
  { name: "GitLab CI/CD", category: "devops" },
  { name: "ArgoCD", category: "devops" },

  { name: "AWS", category: "cloud" },

  { name: "Machine Learning", category: "ai-ml" },
];
