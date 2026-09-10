type DescriptionVisualizerProps = {
  title: string;
  desc: string;
  category?: string;
};

export function DescriptionVisualizer({
  title,
  desc,
  category = "Algorithm visualizer",
}: DescriptionVisualizerProps) {
  return (
    <section className="rounded-2xl border border-border bg-surface p-5 shadow-sm sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">{category}</p>
      <h1 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{title}</h1>
      <p className="mt-3 max-w-3xl leading-relaxed text-text-secondary">{desc}</p>
    </section>
  );
}
