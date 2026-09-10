
import { BarChart3 } from "lucide-react";

type VisualizerCanvasProps = {
  title?: string;
  message?: string;
  children?: React.ReactNode;
};

/** Container where an algorithm-specific renderer can be injected later. */
export function VisualizerCanvas({
  title = "Visualization",
  message = "Select an algorithm to begin the visualization.",
  children,
}: VisualizerCanvasProps) {
  return (
    <section className="flex min-h-[22rem] flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
      <header className="flex items-center justify-between border-b border-border px-5 py-4">
        <h2 className="text-base font-semibold text-foreground">{title}</h2>
        <span className="rounded-full bg-surface-active px-2.5 py-1 text-xs font-medium text-muted">Ready</span>
      </header>
      <div className="flex flex-1 items-center justify-center p-5">
        {children ?? (
          <div className="max-w-xs text-center">
            <div className="mx-auto flex size-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
              <BarChart3 className="size-6" aria-hidden="true" />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">{message}</p>
          </div>
        )}
      </div>
    </section>
  );
}
