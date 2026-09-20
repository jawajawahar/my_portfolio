import type { ExperienceItem } from "@/types";

// TODO: replace with real roles, dates, and highlights.
export const experience: ExperienceItem[] = [
  {
    id: "junior-devops-engineer",
    role: "Junior DevOps Engineer",
    organization: "TODO: company name",
    location: "Sri Lanka",
    startDate: "2025",
    summary: "Maintaining CI/CD pipelines and Kubernetes infrastructure for production workloads.",
    highlights: [
      "Built GitLab CI/CD pipelines with automated testing and deployment gates",
      "Managed containerized workloads on Kubernetes with ArgoCD-driven GitOps",
      "Provisioned and version-controlled AWS infrastructure with Terraform",
    ],
  },
  {
    id: "software-engineering-intern",
    role: "Software Engineering Intern",
    organization: "TODO: company name",
    location: "Sri Lanka",
    startDate: "2024",
    endDate: "2025",
    summary: "Developed full-stack features across the MERN and Spring Boot stacks.",
    highlights: [
      "Built RESTful APIs consumed by a React frontend",
      "Implemented JWT-based authentication and role-based access control",
    ],
  },
];
