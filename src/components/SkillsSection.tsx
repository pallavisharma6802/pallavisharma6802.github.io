"use client";

import { useLens } from "@/context/LensContext";
import { skills } from "@/lib/data";

export default function SkillsSection() {
  const { lens } = useLens();
  const accentVar = lens === "healthcare" ? "var(--healthcare-accent)" : "var(--accent)";

  return (
    <section className="py-24 sm:py-32 border-t border-line bg-raised">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="font-mono text-xs uppercase tracking-[0.2em] mb-4" style={{ color: accentVar }}>
          Stack
        </div>
        <h2 className="font-calligraphic text-4xl sm:text-5xl text-ink mb-12">What I reach for.</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((group) => (
            <div key={group.label}>
              <h3 className="font-mono text-xs uppercase tracking-wide text-ink-faint mb-3">{group.label}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1.5 rounded-full border border-line text-ink-soft hover:text-ink hover:border-ink transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
