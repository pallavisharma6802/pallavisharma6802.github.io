"use client";

import { useLens } from "@/context/LensContext";
import { narrative, profile } from "@/lib/data";

export default function Hero() {
  const { lens } = useLens();
  const copy = narrative[lens];
  const accentVar = lens === "healthcare" ? "var(--healthcare-accent)" : "var(--accent)";

  return (
    <section id="top" className="relative pt-20 pb-24 sm:pt-28 sm:pb-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="reveal font-mono text-xs uppercase tracking-[0.2em] mb-6" style={{ color: accentVar }}>
          {copy.kicker}
        </div>

        <h1 className="reveal font-calligraphic text-[2.6rem] leading-[1.12] sm:text-[3.8rem] sm:leading-[1.08] lg:text-[4.4rem] max-w-4xl text-ink">
          {copy.hook}
        </h1>

        <p className="reveal mt-8 max-w-2xl text-base sm:text-lg leading-relaxed text-ink-soft" style={{ animationDelay: "0.1s" }}>
          {copy.body}
        </p>

        <div className="reveal mt-10 flex flex-wrap items-center gap-5" style={{ animationDelay: "0.2s" }}>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono text-xs uppercase tracking-wide text-white transition-transform hover:-translate-y-0.5"
            style={{ background: accentVar }}
          >
            See the work
            <span aria-hidden>&rarr;</span>
          </a>
          <a
            href="#contact"
            className="font-mono text-xs uppercase tracking-wide text-ink-soft hover:text-ink border-b border-line hover:border-ink pb-1 transition-colors"
          >
            {profile.email}
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 sm:px-10 mt-16">
        <div className="h-px w-full bg-line" />
        <div className="mt-6 flex flex-wrap gap-x-10 gap-y-3 font-mono text-xs uppercase tracking-wide text-ink-faint">
          <span>{profile.credential}</span>
          <span>{profile.location}</span>
          <span>Open to full-time AI/ML/Data Science roles</span>
        </div>
      </div>
    </section>
  );
}
