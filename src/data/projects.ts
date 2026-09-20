import type { Project } from "@/types";

// TODO: replace with real projects, repo/live links, and screenshots.
export const projects: Project[] = [
  {
    slug: "gitops-cluster-platform",
    title: "GitOps Cluster Platform",
    summary:
      "Declarative multi-environment Kubernetes platform with automated promotion pipelines and drift detection.",
    description: "",
    tech: ["Kubernetes", "ArgoCD", "Terraform", "GitLab CI/CD"],
    featured: true,
  },
  {
    slug: "cloud-cost-observability",
    title: "Cloud Cost & Observability Dashboard",
    summary:
      "Centralized dashboard tracking AWS spend, service health, and deployment frequency across environments.",
    description: "",
    tech: ["AWS", "Docker", "Node.js", "PostgreSQL"],
    featured: true,
  },
  {
    slug: "ml-inference-service",
    title: "Real-Time ML Inference Service",
    summary:
      "Containerized inference API serving a trained model behind an autoscaling gateway with request batching.",
    description: "",
    tech: ["Python", "Docker", "Kubernetes", "AWS"],
    featured: true,
  },
  {
    slug: "iac-module-library",
    title: "Reusable Terraform Module Library",
    summary: "Versioned, tested Terraform modules standardizing VPC, IAM, and cluster provisioning.",
    description: "",
    tech: ["Terraform", "AWS", "GitLab CI/CD"],
  },
  {
    slug: "hostel-management-system",
    title: "Hostel Management System",
    summary: "Role-based web app for room allocation, with separate admin and warden workflows.",
    description: "",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    slug: "portfolio-site",
    title: "This Portfolio",
    summary: "Animated Next.js site built with GSAP, Motion, and a data-driven content layer.",
    description: "",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP"],
  },
];
