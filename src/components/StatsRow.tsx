const stats = [
  { value: "14+", label: "Projects Shipped" },
  { value: "6", label: "Roles" },
  { value: "3+", label: "Years Experience" },
  { value: "2026", label: "MS Data Science" },
];

export default function StatsRow() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 sm:px-10 py-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center sm:text-left">
            <div className="font-display font-semibold text-3xl sm:text-4xl" style={{ color: "var(--accent)" }}>
              {s.value}
            </div>
            <div className="mt-1 text-xs text-ink-faint uppercase tracking-wide font-mono">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
