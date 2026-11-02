export default function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-5xl px-6 sm:px-10 pt-14 pb-10">
      <h1 className="font-calligraphic text-4xl sm:text-5xl text-ink">{title}</h1>
      {subtitle && <p className="mt-3 text-ink-soft max-w-xl">{subtitle}</p>}
    </div>
  );
}
