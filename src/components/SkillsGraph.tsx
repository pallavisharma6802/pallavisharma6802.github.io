"use client";

import { useId, useState } from "react";
import { skills } from "@/lib/data";

const areas = [
  { source: "Clinical & Healthcare Domain", label: "Healthcare & clinical ML", description: "Clinical data, survival analysis, and medical imaging techniques for healthcare problems." },
  { source: "Data & Systems", label: "Data pipelines & forecasting", description: "Ingest, transform, and analyze data; model trends and build reliable data systems." },
  { source: "ML & Deep Learning", label: "Model training & deep learning", description: "Train and evaluate models for images, language, and structured data." },
  { source: "LLMs & GenAI Engineering", label: "AI agents & language models", description: "Build tool-using agents, retrieve grounded information, and evaluate language model behavior." },
  { source: "Inference & Optimization", label: "Efficient inference & serving", description: "Reduce model size and inference cost, and scale workloads across available hardware." },
  { source: "Full-Stack Engineering", label: "Applications & APIs", description: "Turn models into usable products with interfaces, services, and APIs." },
  { source: "MLOps & Infra", label: "Deployment & MLOps", description: "Package, deploy, track, and maintain models and applications." },
  { source: "AWS", label: "Cloud · AWS", description: "AWS services for storage, model development, and application deployment." },
  { source: "Google Cloud", label: "Cloud · Google Cloud", description: "Google Cloud tools for analytics, data processing, and machine learning." },
  { source: "Azure", label: "Cloud · Azure", description: "Azure services for machine learning, language, and cloud infrastructure." },
  { source: "Collaboration & Delivery", label: "Collaboration & delivery", description: "Work with stakeholders and teams to scope, document, and deliver useful systems." },
];
const toolkit = areas.map((area) => ({ ...area, items: skills.find((group) => group.label === area.source)?.items ?? [] }));

export default function SkillsGraph() {
  const [active, setActive] = useState(0);
  const [query, setQuery] = useState("");
  const id = useId();
  const normalized = query.trim().toLowerCase();
  const matches = toolkit.map((group) => ({
    ...group,
    items: group.items.filter((item) =>
      `${group.label} ${group.source} ${item.name}`.toLowerCase().includes(normalized)
    ),
  }));
  const selected = matches[active];
  const visibleGroups = normalized ? matches.filter((group) => group.items.length) : [selected];
  const total = skills.reduce((sum, group) => sum + group.items.length, 0);
  const resultCount = matches.reduce((sum, group) => sum + group.items.length, 0);

  return (
    <div className="rounded-3xl border border-line overflow-hidden bg-raised">
      <div className="flex flex-wrap items-end justify-between gap-5 p-4 sm:p-8 border-b border-line">
        <div>
          <h4 className="font-display text-2xl text-ink">Explore my toolkit</h4>
          <p className="mt-2 text-sm text-ink-soft">{skills.length} areas · {total} skills. Select an area or search across all skills.</p>
        </div>
        <div className="w-full sm:w-64">
          <label htmlFor={`${id}-search`} className="block font-mono text-xs text-ink-soft mb-2">Find a skill</label>
          <input
            id={`${id}-search`}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try vLLM, PyTorch, or AWS"
            className="w-full text-base sm:text-sm rounded-xl border border-line px-4 py-3 text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
            style={{ background: "var(--bg)" }}
          />
        </div>
      </div>

      <div className="sm:hidden p-4 border-b border-line">
        <label htmlFor={`${id}-area`} className="block text-sm text-ink-soft mb-2">Browse a skill area</label>
        <select id={`${id}-area`} value={active} onChange={(event) => { setActive(Number(event.target.value)); setQuery(""); }} className="w-full min-h-12 rounded-xl border border-line px-3 text-base text-ink" style={{ background: "var(--bg)" }}>
          {toolkit.map((group, index) => <option key={group.label} value={index}>{group.label}</option>)}
        </select>
      </div>
      <div className="grid lg:grid-cols-[1fr_1fr]">
        <nav aria-label="Skill areas" className="relative hidden sm:block p-4 sm:p-8 lg:border-r border-b lg:border-b-0 border-line">
          <div className="mx-auto w-fit rounded-full px-5 py-2 font-mono text-xs mb-7" style={{ background: "var(--ink)", color: "var(--bg)" }}>My toolkit</div>
          <div className="absolute top-16 bottom-12 left-1/2 w-px bg-current opacity-15 pointer-events-none" aria-hidden="true" />
          <div className="relative grid grid-cols-2 gap-x-6 gap-y-3">
            {matches.map((group, index) => {
              const isActive = !normalized && active === index;
              return (
                <div key={group.label} className="relative flex items-center">
                  <span aria-hidden="true" className={`absolute h-px w-3 bg-current opacity-25 ${index % 2 ? "-left-3" : "-right-3"}`} />
                  <button
                    type="button"
                    aria-pressed={isActive}
                    aria-controls={`${id}-details`}
                    onClick={() => { setActive(index); setQuery(""); }}
                    className="relative w-full min-h-20 rounded-2xl border px-3 py-3 text-left transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current hover:border-current"
                    style={{
                      background: isActive ? "var(--accent-soft)" : "var(--bg)",
                      borderColor: isActive ? "var(--accent)" : "var(--line)",
                      color: "var(--ink)",
                    }}
                  >
                    <span className="block text-sm font-medium leading-snug">{group.label}</span>
                    <span className="block mt-1 text-xs text-ink-soft">{normalized ? `${group.items.length} matches` : `${group.items.length} skills`}</span>
                  </button>
                </div>
              );
            })}
          </div>
        </nav>

        <section id={`${id}-details`} aria-label="Skills in selected area" className="p-4 sm:p-8 min-w-0">
          <p role="status" className="font-mono text-xs text-ink-soft mb-6">
            {normalized ? `${resultCount} ${resultCount === 1 ? "skill" : "skills"} found` : "Selected area"}
          </p>
          {visibleGroups.map((group) => (
            <div key={group.label} className="mb-8 last:mb-0">
              <h4 className="font-display text-2xl text-ink mb-2">{group.label}</h4>
              <p className="mb-5 text-sm leading-relaxed text-ink-soft">{group.description}</p>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item.name} className="flex items-start gap-3 rounded-xl border border-line px-4 py-3" style={{ background: "var(--bg)" }}>
                    <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 rounded-full" style={{ background: "var(--accent)" }} />
                    <span className="text-sm text-ink leading-relaxed">{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {resultCount === 0 && <p className="text-sm text-ink-soft">No skills match “{query}”. Try another tool or area.</p>}
        </section>
      </div>
    </div>
  );
}
