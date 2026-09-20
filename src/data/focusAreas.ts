import { BrainCircuit, Cloud, Code2, GitBranch, type LucideIcon } from "lucide-react";

export interface FocusArea {
  label: string;
  icon: LucideIcon;
  description: string;
  tags: string[];
}

// Drives the About section's typewriter headline and its synced side card.
export const focusAreas: FocusArea[] = [
  {
    label: "DevOps Engineer",
    icon: GitBranch,
    description: "Automating build, test, and release so shipping is routine, not risky.",
    tags: ["GitLab CI/CD", "Docker", "ArgoCD"],
  },
  {
    label: "Cloud & Kubernetes",
    icon: Cloud,
    description: "Provisioning and running infrastructure that scales without hand-holding.",
    tags: ["AWS", "Kubernetes", "Terraform"],
  },
  {
    label: "AI/ML Enthusiast",
    icon: BrainCircuit,
    description: "Exploring how trained models get packaged, served, and monitored in production.",
    tags: ["Python", "Machine Learning"],
  },
  {
    label: "Full-Stack Builder",
    icon: Code2,
    description: "Still enjoy shipping a complete product end to end, UI to database.",
    tags: ["Next.js", "React", "Node.js"],
  },
];
