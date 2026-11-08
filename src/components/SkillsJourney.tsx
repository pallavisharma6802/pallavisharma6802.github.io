"use client";

import { useId, useState } from "react";
import { projects, skills } from "@/lib/data";
import type { SkillGroup } from "@/lib/types";

const evaluation = ["LLM Evaluation", "Mechanistic Interpretability", "Langfuse", "LangSmith"];
const stages = [
  {
    title: "Data & problem framing",
    note: "Quality, coverage, assumptions",
    description: "Start with the decision the system needs to support. Examine data quality, coverage, sampling, and leakage; build reproducible pipelines and choose evaluation criteria that reflect the intended use.",
    groups: ["Data & Analytics"],
    projects: ["spending-forecast", "fraud-detection-mlops"],
  },
  {
    title: "Modeling & adaptation",
    note: "Baselines, training, retention",
    description: "Establish a baseline before adding complexity. Choose features, architectures, and adaptation methods around the data and task, then measure generalization and what a model retains as it learns.",
    groups: ["Machine Learning & Statistics", "Deep Learning & Adaptation"],
    projects: ["critic-guided-continual-learning", "tissue-motion-forecasting"],
  },
  {
    title: "Agents & evaluation",
    note: "Retrieval, tools, failure modes",
    description: "Design retrieval and tool workflows with explicit checks for grounding and failure. Evaluate individual components and the full system, including cases that require escalation or expose weaknesses in a proposed defense.",
    groups: ["Agents & Retrieval", "Evaluation & Efficient Inference"],
    projects: ["doit-kb-agent", "trust-under-pressure", "multi-cloud-agent"],
  },
  {
    title: "Inference & optimization",
    note: "Quality, latency, memory, cost",
    description: "Compare serving approaches and compression methods against an explicit quality baseline. Weigh response time, throughput, memory, and cost against the workload and the outcome users need.",
    groups: ["Evaluation & Efficient Inference"],
    projects: ["llm-serving-tradeoffs", "edge-ai-sentiment"],
  },
  {
    title: "Deployment & operations",
    note: "Delivery, monitoring, iteration",
    description: "Connect models to APIs and applications, automate deployment, and monitor behavior after release. Track experiments and model versions so performance changes can be investigated and improvements reproduced.",
    groups: ["Applications & MLOps", "Cloud Platforms"],
    projects: ["fraud-detection-mlops", "llm-sentinel"],
  },
];

function groupsForStage(index: number): SkillGroup[] {
  return skills.filter((group) => stages[index].groups.includes(group.label)).map((group) => ({
    ...group,
    items: group.items.filter((item) => group.label !== "Evaluation & Efficient Inference" ||
      (index === 2 ? evaluation.includes(item.name) : !evaluation.includes(item.name))),
  }));
}

export default function SkillsJourney() {
  const [active, setActive] = useState(0);
  const [query, setQuery] = useState("");
  const id = useId();
  const normalized = query.trim().toLowerCase();
  const matchingStages = stages.map((stage, index) => ({
    ...stage,
    index,
    groups: groupsForStage(index).map((group) => ({
      ...group,
      items: group.items.filter((item) => !normalized ||
        `${group.label} ${item.subgroup ?? ""} ${item.name}`.toLowerCase().includes(normalized)),
    })).filter((group) => group.items.length > 0),
  }));
  const panels = normalized ? matchingStages.filter((stage) => stage.groups.length > 0) : [matchingStages[active]];
  const selectStage = (index: number) => { setActive(index); setQuery(""); };

  return (
    <section aria-labelledby={`${id}-title`}>
      <div className="flex flex-wrap items-end justify-between gap-6 mb-8">
        <div className="max-w-xl">
          <p className="font-hand text-xl text-secondary mb-2">Follow the thread</p>
          <h2 id={`${id}-title`} className="font-calligraphic text-3xl sm:text-4xl text-ink">From a question to a working product.</h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">Across 4+ years in ML and data science, my work has spanned data pipelines, model development, agent systems, and deployment. These are the decisions, methods, and tools I bring to each part of that work.</p>
        </div>
        <div className="w-full sm:max-w-xs">
          <label htmlFor={`${id}-search`} className="block font-mono text-xs text-ink-soft mb-2">Find a skill</label>
          <input id={`${id}-search`} type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search Neo4j, PyTorch, AWS…" className="w-full min-h-12 rounded-xl border border-line px-4 text-base text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current" style={{ background: "var(--bg-raised)" }} />
        </div>
      </div>

      <div className="sm:hidden mb-5">
        <label htmlFor={`${id}-stage`} className="block text-sm text-ink-soft mb-2">Area of work</label>
        <select id={`${id}-stage`} value={active} onChange={(event) => selectStage(Number(event.target.value))} className="w-full min-h-12 rounded-xl border border-line px-3 text-base text-ink" style={{ background: "var(--bg-raised)" }}>
          {stages.map((stage, index) => <option key={stage.title} value={index}>{stage.title}</option>)}
        </select>
      </div>
      <nav className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-6" aria-label="Areas of engineering work">
        {stages.map((stage, index) => (
          <button key={stage.title} type="button" aria-pressed={!normalized && active === index} aria-controls={`${id}-panels`} onClick={() => selectStage(index)} className="rounded-2xl border p-4 text-left cursor-pointer transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current hover:border-current" style={{ background: !normalized && active === index ? "var(--accent-soft)" : "var(--bg-raised)", borderColor: !normalized && active === index ? "var(--accent)" : "var(--line)", color: "var(--ink)" }}>
            <span className="block font-display text-lg leading-tight">{stage.title}</span>
            <span className="block mt-2 text-xs leading-relaxed text-ink-soft">{stage.note}</span>
          </button>
        ))}
      </nav>

      <div id={`${id}-panels`} className="space-y-6">
        <p role="status" className="sr-only">{normalized ? (panels.length ? `Showing results for ${query}` : `No skills match ${query}`) : stages[active].title}</p>
        {panels.map((stage) => (
          <div key={stage.title} className="rounded-3xl border border-line overflow-hidden bg-raised">
            <div className="grid md:grid-cols-[1.2fr_1fr]">
              <div className="min-w-0 p-4 sm:p-7">
                <h3 className="font-display text-2xl text-ink">{stage.title}</h3>
                <p className="text-sm text-ink-soft leading-relaxed mt-3 mb-6">{stage.description}</p>
                {stage.groups.map((group) => (
                  <div key={group.label} className="mt-6">
                    <h4 className="font-mono text-[11px] uppercase tracking-wide text-ink-soft mb-3">{group.label === "Evaluation & Efficient Inference" ? (stage.index === 2 ? "Evaluation & observability" : "Inference & optimization") : group.label}</h4>
                    {[...new Set(group.items.map((item) => item.subgroup ?? ""))].map((subgroup) => (
                      <div key={subgroup} className="mt-4 first:mt-0">
                        {subgroup && <h5 className="text-sm font-medium text-ink mb-2">{subgroup}</h5>}
                        <ul className="flex flex-wrap gap-2">
                          {group.items.filter((item) => (item.subgroup ?? "") === subgroup).map((item) => <li key={item.name} className="rounded-lg border border-line px-3 py-2 text-xs text-ink" style={{ background: "var(--bg)" }}>{item.name}</li>)}
                        </ul>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <aside aria-label={`Selected work: ${stage.title}`} className="min-w-0 p-4 sm:p-7 border-t md:border-t-0 md:border-l border-line" style={{ background: "var(--bg)" }}>
                <p className="font-mono text-xs uppercase tracking-wide text-ink-soft">Selected work</p>
                <div className="mt-4 space-y-4">
                  {stage.projects.map((slug) => projects.find((project) => project.slug === slug)).map((project) => project && (
                    <a key={project.slug} href={project.repoUrl} target="_blank" rel="noreferrer" className="block rounded-2xl border border-line p-4 hover:border-current transition-colors text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">
                      <h4 className="font-display text-lg leading-snug">{project.title} <span aria-hidden="true">↗</span></h4>
                      <p className="mt-2 text-xs leading-relaxed text-ink-soft">{project.metrics[0]}</p>
                      <span className="block mt-3 font-mono text-[10px] uppercase tracking-wide">View project →</span>
                    </a>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        ))}
        {panels.length === 0 && <p className="rounded-2xl border border-line p-6 text-sm text-ink-soft">No skills match “{query}”. Try another search or select an area above.</p>}
      </div>
    </section>
  );
}
