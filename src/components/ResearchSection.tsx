"use client";

import { useLens } from "@/context/LensContext";
import { research } from "@/lib/data";

export default function ResearchSection() {
  const { lens } = useLens();
  const accentVar = lens === "healthcare" ? "var(--healthcare-accent)" : "var(--accent)";

  return (
    <section id="research" className="py-24 sm:py-32 border-t border-line bg-raised">
      <div className="mx-auto max-w-4xl px-6 sm:px-10">
        <div className="font-mono text-xs uppercase tracking-[0.2em] mb-4" style={{ color: accentVar }}>
          Graduate Research
        </div>
        <h2 className="font-display text-2xl sm:text-3xl text-ink leading-snug">{research.title}</h2>
        <p className="mt-6 text-base sm:text-lg leading-relaxed text-ink-soft">{research.body}</p>

        <div className="mt-10 rounded-2xl border p-6 flex gap-4" style={{ borderColor: accentVar, background: "var(--bg)" }}>
          <div className="font-mono text-xs uppercase tracking-wide shrink-0" style={{ color: accentVar }}>
            AI Safety
          </div>
          <p className="text-sm text-ink-soft leading-relaxed">{research.safety}</p>
        </div>
      </div>
    </section>
  );
}
