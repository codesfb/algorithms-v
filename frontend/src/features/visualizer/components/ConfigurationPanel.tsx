import { RotateCcw, Settings2 } from "lucide-react";

export type VisualizerConfiguration = {
  dataSize: number;
  generateRandomData: boolean;
};

type ConfigurationPanelProps = {
  value: VisualizerConfiguration;
  onChange: (value: VisualizerConfiguration) => void;
  onReset: () => void;
};

export function ConfigurationPanel({ value, onChange, onReset }: ConfigurationPanelProps) {
  return (
    <section className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
      <div className="flex items-center gap-2 text-foreground">
        <Settings2 className="size-4 text-secondary" aria-hidden="true" />
        <h2 className="font-semibold">Configuration</h2>
      </div>
      <div className="mt-5 space-y-5">
        <label className="block text-sm font-medium text-text-secondary" htmlFor="data-size">
          Data size
          <div className="mt-2 flex items-center gap-3">
            <input
              id="data-size"
              className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-surface-active accent-primary"
              type="range"
              min="5"
              max="100"
              value={value.dataSize}
              onChange={(event) => onChange({ ...value, dataSize: Number(event.target.value) })}
            />
            <output className="w-8 text-right font-mono text-sm text-primary">{value.dataSize}</output>
          </div>
        </label>
        <label className="flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-border px-3 py-3 text-sm text-text-secondary">
          Generate random data
          <input
            className="size-4 accent-primary"
            type="checkbox"
            checked={value.generateRandomData}
            onChange={(event) => onChange({ ...value, generateRandomData: event.target.checked })}
          />
        </label>
        <button
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-border px-3 py-2.5 text-sm font-medium text-text-secondary transition-colors hover:border-primary/50 hover:bg-surface-hover hover:text-foreground"
          type="button"
          onClick={onReset}
        >
          <RotateCcw className="size-4" aria-hidden="true" /> Reset visualization
        </button>
      </div>
    </section>
  );
}
