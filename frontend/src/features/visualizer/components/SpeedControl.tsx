import { Gauge } from "lucide-react";

type SpeedControlProps = {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
};

export function SpeedControl({ value, onChange, min = 1, max = 100 }: SpeedControlProps) {
  return (
    <section className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 text-foreground">
            <Gauge className="size-4 text-secondary" aria-hidden="true" />
            <h2 className="font-semibold">Speed</h2>
          </div>
          <p className="mt-1 text-sm text-muted">Adjust animation pace.</p>
        </div>
        <output className="rounded-lg bg-primary/15 px-2 py-1 text-sm font-semibold text-primary">{value}%</output>
      </div>
      <label className="sr-only" htmlFor="visualizer-speed">Visualization speed</label>
      <input
        id="visualizer-speed"
        className="mt-6 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-surface-active accent-primary"
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      />
      <div className="mt-2 flex justify-between text-xs text-muted"><span>Slow</span><span>Fast</span></div>
    </section>
  );
}
