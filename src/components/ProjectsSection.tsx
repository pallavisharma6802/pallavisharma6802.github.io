"use client";

import { useLens } from "@/context/LensContext";
import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const { lens } = useLens();
  const filtered = projects.filter((p) => p.lens === lens || p.lens === "both");
  const others = projects.filter((p) => p.lens !== lens && p.lens !== "both");

  return (
    <section id="work" className="py-24 sm:py-32 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="flex items-end justify-between gap-6 mb-12 flex-wrap">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-3">Selected Work</div>
            <h2 className="font-calligraphic text-4xl sm:text-5xl text-ink">
              {lens === "healthcare" ? "Clinical & biomedical systems" : "Agents, evaluation & infrastructure"}
            </h2>
          </div>
          <p className="max-w-sm text-sm text-ink-soft">
            {projects.length} projects, built end to end &mdash; code, eval, and (where it applies) a deployed app.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>

        {others.length > 0 && (
          <div className="mt-20">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint mb-8 border-t border-line pt-8">
              Also &mdash; {lens === "healthcare" ? "general ML & agents" : "healthcare & biomedical"}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 opacity-80">
              {others.map((p, i) => (
                <ProjectCard key={p.slug} project={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
