type DescriptionVisualizerProps = {
  title: string;
  desc: string;
  category?: string;
};

export function DescriptionVisualizer({
  title,
  desc,
}: DescriptionVisualizerProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold tracking-tight text-secondary">{title}</h2>
      <p className="mt-1 max-w-2xl leading-relaxed text-text-secondary">{desc}</p>
    </section>
  );
}
