"use client";

import { useLens } from "@/context/LensContext";
import { profile } from "@/lib/data";

export default function Contact() {
  const { lens } = useLens();
  const accentVar = lens === "healthcare" ? "var(--healthcare-accent)" : "var(--accent)";

  return (
    <section id="contact" className="py-28 sm:py-36 border-t border-line">
      <div className="mx-auto max-w-4xl px-6 sm:px-10 text-center">
        <div className="font-mono text-xs uppercase tracking-[0.2em] mb-4" style={{ color: accentVar }}>
          Get in touch
        </div>
        <h2 className="font-calligraphic text-4xl sm:text-6xl text-ink leading-tight">
          Actively looking for full-time
          <br />
          AI / ML / Data Science roles.
        </h2>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-mono text-sm text-white transition-transform hover:-translate-y-0.5"
            style={{ background: accentVar }}
          >
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-sm text-ink-soft hover:text-ink border-b border-line hover:border-ink pb-1 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-sm text-ink-soft hover:text-ink border-b border-line hover:border-ink pb-1 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
