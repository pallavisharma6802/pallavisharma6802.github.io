"use client";

import { useState } from "react";
import { categories, projects } from "@/lib/data";
import { Project } from "@/lib/types";
import CategoryIcon, { categoryGradients } from "./CategoryIcon";

function ProjectTile({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="reveal rounded-2xl border border-line overflow-hidden bg-raised flex flex-col">
      <button onClick={() => setOpen((o) => !o)} className="relative w-full text-left cursor-pointer group p-5" style={{ background: categoryGradients[project.category] }}>
        <div className="flex items-start justify-between">
          <span className="font-mono text-[10px] uppercase tracking-wide text-white/80 bg-black/20 rounded-full px-2.5 py-1">
            {project.category}
          </span>
          <CategoryIcon category={project.category} className="h-8 w-8 opacity-90" />
        </div>
        <h3 className="mt-6 font-display text-lg sm:text-xl text-white leading-snug pr-6">{project.title}</h3>
        <p className="mt-2 text-xs text-white/75 leading-relaxed max-w-[90%]">{project.metrics[0] ?? project.blurb}</p>
        <span className="absolute bottom-4 right-4 text-white/80 text-sm font-mono transition-transform group-hover:translate-y-[-2px]">
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <div className="p-5 sm:p-6">
          {project.story && (
            <p className="text-sm text-ink-soft leading-relaxed border-l-2 pl-3 mb-3" style={{ borderColor: "var(--accent)" }}>
              {project.story}
            </p>
          )}
          <p className="text-sm text-ink-soft leading-relaxed">{project.description ? <strong className="font-medium text-ink">{project.blurb}</strong> : project.blurb}</p>
          {project.description && <div className="mt-3 space-y-3">{project.description.map((paragraph) => <p key={paragraph} className="text-sm text-ink-soft leading-relaxed">{paragraph}</p>)}</div>}

          {project.metrics.length > 0 && (
            <div className="mt-3 flex flex-col gap-1">
              {project.metrics.map((m) => (
                <span key={m} className="font-mono text-[11px] text-ink">
                  {m}
                </span>
              ))}
            </div>
          )}

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span key={s} className="font-mono text-[10px] uppercase tracking-wide px-2 py-1 rounded-md bg-[var(--bg)] border border-line text-ink-faint">
                {s}
              </span>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-line flex items-center gap-5 font-mono text-xs uppercase tracking-wide">
            <a href={project.repoUrl} target="_blank" rel="noreferrer" className="text-ink-soft hover:text-ink transition-colors">
              Source &rarr;
            </a>
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" style={{ color: "var(--accent)" }} className="hover:opacity-80 transition-opacity">
                Live &rarr;
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function WorkGrid() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className="font-mono text-xs uppercase tracking-wide px-3.5 py-1.5 rounded-full border transition-colors cursor-pointer"
            style={
              active === c
                ? { background: "var(--accent)", borderColor: "var(--accent)", color: "white" }
                : { borderColor: "var(--line)", color: "var(--ink-soft)" }
            }
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-start">
        {filtered.map((p) => (
          <ProjectTile key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}
