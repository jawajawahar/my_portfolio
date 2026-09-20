"use client";

import { motion } from "motion/react";
import { ExternalLink, FolderGit2 } from "lucide-react";
import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-[var(--radius-md)] border border-border bg-surface/60 p-6 transition-colors hover:border-border-strong"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,var(--accent)_0%,transparent_55%)] opacity-0 mix-blend-screen transition-opacity duration-300 group-hover:opacity-25" />

      <div className="relative z-10">
        {project.featured && (
          <span className="mb-3 inline-flex items-center rounded-full border border-accent-3/30 bg-accent-3/10 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-accent-3">
            Featured
          </span>
        )}

        <h3 className="text-lg font-medium text-foreground">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border px-2.5 py-1 font-mono text-xs text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>

        {(project.repoUrl || project.liveUrl) && (
          <div className="mt-5 flex items-center gap-4 text-sm text-muted">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
              >
                <FolderGit2 className="size-4" /> Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
              >
                <ExternalLink className="size-4" /> Live
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
