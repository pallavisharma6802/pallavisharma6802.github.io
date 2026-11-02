"use client";

import { Project } from "@/lib/types";
import { useLens } from "@/context/LensContext";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { lens } = useLens();
  const accentVar = lens === "healthcare" ? "var(--healthcare-accent)" : "var(--accent)";

  return (
    <article
      className="group reveal relative rounded-2xl border border-line bg-raised p-6 sm:p-7 flex flex-col h-full transition-shadow hover:shadow-[0_8px_30px_var(--shadow)]"
      style={{ animationDelay: `${Math.min(index * 0.06, 0.4)}s` }}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-xs text-ink-faint">{String(index + 1).padStart(2, "0")}</span>
        <span
          className="font-mono text-[10px] uppercase tracking-wide px-2.5 py-1 rounded-full border"
          style={{ borderColor: accentVar, color: accentVar }}
        >
          {project.lens === "both" ? "cross-domain" : project.lens}
        </span>
      </div>

      <h3 className="font-display text-xl sm:text-[1.35rem] mt-4 text-ink leading-snug">{project.title}</h3>

      {project.story && (
        <p className="mt-3 text-sm text-ink-soft leading-relaxed border-l-2 pl-3" style={{ borderColor: accentVar }}>
          {project.story}
        </p>
      )}

      <p className="mt-3 text-sm text-ink-soft leading-relaxed">{project.blurb}</p>

      {project.metrics.length > 0 && (
        <ul className="mt-5 space-y-1.5">
          {project.metrics.map((m) => (
            <li key={m} className="font-mono text-xs text-ink flex gap-2">
              <span style={{ color: accentVar }}>&#9656;</span>
              {m}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <span key={s} className="font-mono text-[10px] uppercase tracking-wide px-2 py-1 rounded-md bg-[var(--bg)] border border-line text-ink-faint">
            {s}
          </span>
        ))}
      </div>

      <div className="mt-6 pt-5 border-t border-line flex items-center gap-5 font-mono text-xs uppercase tracking-wide">
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-ink-soft hover:text-ink transition-colors"
        >
          <svg aria-hidden viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
            <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.5 7.5 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
          </svg>
          Source
        </a>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noreferrer" style={{ color: accentVar }} className="hover:opacity-80 transition-opacity">
            Live &rarr;
          </a>
        )}
      </div>
    </article>
  );
}
