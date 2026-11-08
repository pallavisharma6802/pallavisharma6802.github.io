"use client";

import { useId, useState } from "react";
import { projects, skills } from "@/lib/data";
import { Sparkle, Squiggle } from "./Blobs";

const stages = [
  { title: "Understand & prepare", note: "Start with the problem", description: "Turn raw data and domain context into something a model can learn from. In healthcare, that includes understanding clinical workflows and handling sensitive data responsibly.", groups: ["Data & Analytics", "Healthcare & Imaging"], projects: ["spending-forecast", "breast-cancer-optimization"] },
  { title: "Train & adapt", note: "Find the signal", description: "Build models for the task: computer vision for medical images, forecasting for changing systems, or language models adapted to a new domain.", groups: ["Machine Learning & Statistics", "Deep Learning & Adaptation"], projects: ["tissue-motion-forecasting", "critic-guided-continual-learning"] },
  { title: "Build & evaluate", note: "Make answers earn trust", description: "Connect models to tools and knowledge, then test their behavior. Grounding, evaluation, and human escalation matter as much as a convincing answer.", groups: ["Agents & Retrieval"], projects: ["doit-kb-agent", "trust-under-pressure", "procedural-intelligence"] },
  { title: "Optimize & serve", note: "Make it practical", description: "Explore the tradeoffs between model size, latency, throughput, and quality. Choose an inference approach that fits the hardware and the people using it.", groups: ["Evaluation & Efficient Inference"], projects: ["llm-serving-tradeoffs", "edge-ai-sentiment"] },
  { title: "Deploy & observe", note: "Keep it working", description: "Ship the application, watch how it behaves, and respond when data or performance changes. Cloud infrastructure and observability close the loop.", groups: ["Applications & MLOps", "Cloud Platforms"], projects: ["fraud-detection-mlops", "llm-sentinel", "multi-cloud-agent"] },
];

export default function SkillsJourney() {
  const [active, setActive] = useState(0);
  const id = useId();
  const stage = stages[active];
  return (
    <section aria-labelledby={`${id}-title`} className="mb-16">
      <div className="relative mb-8 max-w-2xl">
        <p className="font-hand text-xl text-secondary mb-2">Follow the thread</p>
        <h2 id={`${id}-title`} className="font-calligraphic text-3xl sm:text-4xl text-ink">From a question to a working product.</h2>
        <p className="mt-4 text-sm leading-relaxed text-ink-soft">Healthcare, agents, or production ML: the tools change with the problem. Explore each step to see what I use and where I’ve put it to work.</p>
        <Sparkle className="absolute -right-8 top-2 w-7 hidden sm:block" />
      </div>
      <div className="sm:hidden mb-5">
        <label htmlFor={`${id}-stage`} className="block text-sm text-ink-soft mb-2">Explore a step</label>
        <select id={`${id}-stage`} value={active} onChange={(event) => setActive(Number(event.target.value))} className="w-full min-h-12 rounded-xl border border-line px-3 text-base text-ink" style={{ background: "var(--bg-raised)" }}>
          {stages.map((item, index) => <option key={item.title} value={index}>0{index + 1} · {item.title}</option>)}
        </select>
      </div>
      <div className="relative hidden sm:grid sm:grid-cols-5 gap-3 mb-6" aria-label="Product development stages">
        <div className="absolute hidden sm:block left-8 right-8 top-7 border-t border-dashed border-line" aria-hidden="true" />
        {stages.map((item, index) => (
          <button key={item.title} type="button" aria-pressed={active === index} aria-controls={`${id}-panel`} onClick={() => setActive(index)} className="relative flex sm:flex-col items-center sm:items-start gap-3 p-4 rounded-2xl border text-left cursor-pointer transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current hover:border-current" style={{ background: active === index ? "var(--accent-soft)" : "var(--bg-raised)", borderColor: active === index ? "var(--accent)" : "var(--line)", color: "var(--ink)" }}>
            <span className="shrink-0 rounded-full w-8 h-8 flex items-center justify-center font-mono text-xs" style={{ background: active === index ? "var(--ink)" : "var(--bg)", color: active === index ? "var(--bg)" : "var(--ink)" }}>0{index + 1}</span>
            <span><span className="block font-display text-base leading-tight">{item.title}</span><span className="block mt-2 text-xs text-ink-soft">{item.note}</span></span>
          </button>
        ))}
      </div>
      <div id={`${id}-panel`} className="rounded-3xl border border-line overflow-hidden bg-raised">
        <div className="grid md:grid-cols-[1.15fr_1fr]">
          <div className="p-4 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-wide text-ink-soft" role="status">Step 0{active + 1} / 05</p>
            <h3 className="font-display text-2xl mt-3 text-ink">{stage.title}</h3>
            <p className="text-sm text-ink-soft leading-relaxed mt-3 mb-6">{stage.description}</p>
            {skills.filter((group) => stage.groups.includes(group.label)).map((group) => (
              <div key={group.label} className="mt-5">
                <h4 className="font-mono text-[11px] uppercase tracking-wide text-ink-soft mb-2">{group.label}</h4>
                <ul className="flex flex-wrap gap-2">
                  {group.items.slice(0, 6).map((item) => <li key={item.name} className="rounded-lg border border-line px-2.5 py-1.5 text-xs text-ink" style={{ background: "var(--bg)" }}>{item.name}</li>)}
                </ul>
              </div>
            ))}
            <a href="#toolkit" className="inline-block mt-6 text-sm text-ink underline underline-offset-4">Explore all skills →</a>
          </div>
          <aside aria-label="Projects using these skills" className="p-4 sm:p-8 border-t md:border-t-0 md:border-l border-line" style={{ background: "var(--bg)" }}>
            <p className="font-hand text-xl text-secondary">Where it comes to life</p>
            <div className="mt-4 space-y-4">
              {stage.projects.map((slug) => projects.find((project) => project.slug === slug)).map((project) => project && (
                <a key={project.slug} href={project.repoUrl} target="_blank" rel="noreferrer" className="block rounded-2xl border border-line p-4 hover:border-current transition-colors text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">
                  <span className="font-mono text-[10px] uppercase tracking-wide text-ink-soft">{project.category}</span>
                  <h4 className="font-display text-lg leading-snug mt-2">{project.title} <span aria-hidden="true">↗</span></h4>
                  <p className="mt-2 text-xs leading-relaxed text-ink-soft">{project.metrics[0]}</p>
                  <span className="block mt-3 font-mono text-[10px] uppercase tracking-wide">Explore the source →</span>
                </a>
              ))}
            </div>
          </aside>
        </div>
      </div>
      <Squiggle className="w-24 mt-6 mx-auto" color="var(--secondary)" />
    </section>
  );
}
