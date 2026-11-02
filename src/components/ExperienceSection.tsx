"use client";

import { useLens } from "@/context/LensContext";
import { experience } from "@/lib/data";

export default function ExperienceSection() {
  const { lens } = useLens();
  const accentVar = lens === "healthcare" ? "var(--healthcare-accent)" : "var(--accent)";
  const ordered = [...experience].sort((a, b) => {
    const score = (e: typeof a) => (e.lens === lens ? 0 : e.lens === "both" ? 1 : 2);
    return score(a) - score(b);
  });

  return (
    <section id="experience" className="py-24 sm:py-32 border-t border-line">
      <div className="mx-auto max-w-4xl px-6 sm:px-10">
        <div className="font-mono text-xs uppercase tracking-[0.2em] mb-4" style={{ color: accentVar }}>
          Experience
        </div>
        <h2 className="font-calligraphic text-4xl sm:text-5xl text-ink mb-14">Six roles, one throughline: verify before you trust.</h2>

        <ol className="relative">
          {ordered.map((e, i) => (
            <li key={e.role + e.org} className="reveal relative pl-8 pb-12 last:pb-0 border-l border-line" style={{ animationDelay: `${Math.min(i * 0.08, 0.4)}s` }}>
              <span
                className="absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full"
                style={{ background: e.lens === lens || e.lens === "both" ? accentVar : "var(--ink-faint)" }}
              />
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-display text-lg sm:text-xl text-ink">{e.role}</h3>
                <span className="font-mono text-xs text-ink-faint uppercase tracking-wide">{e.dates}</span>
              </div>
              <div className="text-sm text-ink-soft mt-1">{e.org} &middot; {e.location}</div>

              <ul className="mt-4 space-y-2">
                {e.bullets.map((b) => (
                  <li key={b} className="text-sm leading-relaxed text-ink-soft flex gap-2">
                    <span className="text-ink-faint mt-0.5">&mdash;</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
