import { facts } from "@/lib/data";
import { Sparkle } from "./Blobs";

export default function AboutFacts() {
  return (
    <section className="py-16 sm:py-20 border-t border-line bg-raised relative overflow-hidden">
      <Sparkle className="hidden sm:block absolute top-10 right-16 w-5" />
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <h2 className="font-calligraphic text-3xl sm:text-4xl text-ink mb-2">A bit more about me</h2>
        <p className="font-hand text-xl text-secondary mb-10">a few things worth knowing</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {facts.map((f, i) => (
            <div
              key={f}
              className="reveal rounded-2xl border border-line bg-[var(--bg)] p-5 text-sm text-ink-soft leading-relaxed"
              style={{ animationDelay: `${i * 0.04}s` }}
            >
              {f}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
