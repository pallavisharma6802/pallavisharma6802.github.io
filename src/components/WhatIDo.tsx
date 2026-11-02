import { whatIDo } from "@/lib/data";

const icons: Record<string, React.ReactNode> = {
  agents: (
    <>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="12" cy="18" r="2.5" />
      <path d="M8 7.5 10.5 16M16 7.5 13.5 16M8.5 6h7" strokeLinecap="round" />
    </>
  ),
  forecast: <path d="M3 18 9 11l4 4 8-9M15 6h6v6" strokeLinecap="round" strokeLinejoin="round" />,
  health: (
    <path
      d="M12 20s-7-4.4-9.5-9A5.5 5.5 0 0 1 12 5.5 5.5 5.5 0 0 1 21.5 11c-2.5 4.6-9.5 9-9.5 9ZM4 12h3l1.5-3L10 15l2-5 1.5 2H20"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  stack: (
    <>
      <path d="M12 3 3 8l9 5 9-5-9-5Z" strokeLinejoin="round" />
      <path d="M3 13l9 5 9-5M3 18l9 5 9-5" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
};

export default function WhatIDo() {
  return (
    <section className="py-16 sm:py-20 border-t border-line">
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <h2 className="font-calligraphic text-3xl sm:text-4xl text-ink mb-10">What I Do</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {whatIDo.map((item, i) => (
            <div
              key={item.title}
              className="reveal rounded-2xl p-6 flex gap-4 items-start"
              style={{ background: i % 2 === 0 ? "var(--bg-raised)" : "var(--blush)", animationDelay: `${i * 0.05}s` }}
            >
              <svg viewBox="0 0 24 24" className="h-9 w-9 shrink-0" fill="none" stroke="var(--accent)" strokeWidth="1.6">
                {icons[item.icon]}
              </svg>
              <div>
                <h3 className="font-display text-lg text-ink">{item.title}</h3>
                <p className="mt-1.5 text-sm text-ink-soft leading-relaxed">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
