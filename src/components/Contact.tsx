import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 border-t border-line">
      <div className="mx-auto max-w-4xl px-6 sm:px-10 text-center">
        <h2 className="font-calligraphic text-4xl sm:text-5xl text-ink leading-tight">
          Let's talk.
        </h2>
        <p className="mt-4 text-ink-soft">Focused on ML and AI roles. The title matters less than the problem.</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-mono text-sm text-white transition-transform hover:-translate-y-0.5"
            style={{ background: "var(--accent)" }}
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
