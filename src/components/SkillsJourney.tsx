"use client";

import { useId, useState } from "react";
import { projects, skills } from "@/lib/data";
import { Sparkle, Squiggle } from "./Blobs";

const stages = [
  { title: "Understand & prepare", note: "Start with the problem", description: "Turn raw data and domain context into something a model can learn from. In healthcare, that includes understanding clinical workflows and handling sensitive data responsibly.", groups: ["Data & Systems", "Clinical & Healthcare Domain", "Collaboration & Delivery"], projects: ["spending-forecast", "breast-cancer-optimization"] },
  { title: "Train & adapt", note: "Find the signal", description: "Build models for the task: computer vision for medical images, forecasting for changing systems, or language models adapted to a new domain.", groups: ["ML & Deep Learning"], projects: ["tissue-motion-forecasting", "critic-guided-continual-learning"] },
  { title: "Build & evaluate", note: "Make answers earn trust", description: "Connect models to tools and knowledge, then test their behavior. Grounding, evaluation, and human escalation matter as much as a convincing answer.", groups: ["LLMs & GenAI Engineering"], projects: ["doit-kb-agent", "trust-under-pressure", "procedural-intelligence"] },
  { title: "Optimize & serve", note: "Make it practical", description: "Explore the tradeoffs between model size, latency, throughput, and quality. Choose an inference approach that fits the hardware and the people using it.", groups: ["Inference & Optimization", "Full-Stack Engineering"], projects: ["llm-serving-tradeoffs", "edge-ai-sentiment"] },
  { title: "Deploy & observe", note: "Keep it working", description: "Ship the application, watch how it behaves, and respond when data or performance changes. Cloud infrastructure and observability close the loop.", groups: ["AWS", "Google Cloud", "Azure", "MLOps & Infra"], projects: ["fraud-detection-mlops", "llm-sentinel", "multi-cloud-agent"] },
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
      <div className="relative grid grid-cols-1 sm:grid-cols-5 gap-3 mb-6" aria-label="Product development stages">
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
          <div className="p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-wide text-ink-soft" role="status">Step 0{active + 1} / 05</p>
            <h3 className="font-display text-2xl mt-3 text-ink">{stage.title}</h3>
            <p className="text-sm text-ink-soft leading-relaxed mt-3 mb-6">{stage.description}</p>
            {skills.filter((group) => stage.groups.includes(group.label)).map((group) => (
              <div key={group.label} className="mt-5">
                <h4 className="font-mono text-[11px] uppercase tracking-wide text-ink-soft mb-2">{group.label}</h4>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => <li key={item.name} className="rounded-lg border border-line px-2.5 py-1.5 text-xs text-ink" style={{ background: "var(--bg)" }}>{item.name}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <aside aria-label="Projects using these skills" className="p-6 sm:p-8 border-t md:border-t-0 md:border-l border-line" style={{ background: "var(--bg)" }}>
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
      <div className="mt-6 flex items-start gap-4 rounded-2xl p-5" style={{ background: "var(--blush)" }}>
        <svg aria-hidden="true" viewBox="0 0 24 24" className="w-7 h-7 shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 21S3 15 3 8a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 7-9 13-9 13Z" /><path d="M4 12h4l2-4 3 8 2-4h5" /></svg>
        <div><h3 className="font-display text-lg text-ink">A healthcare thread throughout</h3><p className="mt-1 text-sm text-ink-soft leading-relaxed">Medical imaging, survival modeling, and clinical data pipelines connect domain knowledge with engineering. Explore the first three steps for clinical data, surgical vision, and procedural AI.</p></div>
      </div>
      <Squiggle className="w-24 mt-6 mx-auto" color="var(--secondary)" />
    </section>
  );
}
