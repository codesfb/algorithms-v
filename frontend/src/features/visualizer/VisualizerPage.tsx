import { useEffect, useRef, useState } from "react";
import { Gauge, Settings2 } from "lucide-react";
import Navbar from "@/components/layout/navbar/Navbar";
import { DescriptionVisualizer } from "./components/DescripitionVisualizer";
import { VisualizerCanvas } from "./components/VisualizerCanvas";
import { SpeedControl } from "./components/SpeedControl";
import { ConfigurationPanel, type VisualizerConfiguration } from "./components/ConfigurationPanel";
import { CodePanel } from "./components/CodePanel";

const defaultConfiguration: VisualizerConfiguration = {
  dataSize: 30,
  generateRandomData: true,
};

const exampleCode = `function bubbleSort(values: number[]) {
  const result = [...values];

  for (let end = result.length - 1; end > 0; end--) {
    for (let index = 0; index < end; index++) {
      if (result[index] > result[index + 1]) {
        [result[index], result[index + 1]] = [result[index + 1], result[index]];
      }
    }
  }

  return result;
}`;

export function VisualizerPage() {
  const [speed, setSpeed] = useState(50);
  const [configuration, setConfiguration] = useState(defaultConfiguration);
  const [activePanel, setActivePanel] = useState<"speed" | "configuration" | null>(null);
  const speedControlRef = useRef<HTMLDivElement>(null);
  const configurationButtonRef = useRef<HTMLButtonElement>(null);
  const configurationPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function closePanelOnOutsideClick(event: MouseEvent) {
      const target = event.target as Node;
      const clickedSpeedControl = speedControlRef.current?.contains(target);
      const clickedConfiguration = configurationButtonRef.current?.contains(target)
        || configurationPanelRef.current?.contains(target);

      if (!clickedSpeedControl && !clickedConfiguration) {
        setActivePanel(null);
      }
    }

    function closePanelOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setActivePanel(null);
    }

    document.addEventListener("mousedown", closePanelOnOutsideClick);
    document.addEventListener("keydown", closePanelOnEscape);
    return () => {
      document.removeEventListener("mousedown", closePanelOnOutsideClick);
      document.removeEventListener("keydown", closePanelOnEscape);
    };
  }, []);

  function resetVisualizer() {
    setSpeed(50);
    setConfiguration(defaultConfiguration);
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="mx-auto w-full max-w-[90rem] space-y-4 px-3 py-3 sm:px-4 sm:py-4 lg:px-6">
        <header className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-3">
          <div className="flex flex-wrap items-center gap-3">
            <DescriptionVisualizer title="Example page" desc="Thats how it gonna be" />
            <div ref={speedControlRef} className="relative">
              <button
                className="flex items-center gap-2 rounded-xl border border-border bg-surface/70 px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:border-primary/50 hover:bg-surface-hover hover:text-foreground"
                type="button"
                aria-expanded={activePanel === "speed"}
                aria-controls="speed-control-panel"
                onClick={() => setActivePanel(activePanel === "speed" ? null : "speed")}
              >
                <Gauge className="size-4 text-secondary" aria-hidden="true" />
                Speed <span className="font-mono text-primary">{speed}%</span>
              </button>
              {activePanel === "speed" && (
                <div id="speed-control-panel" role="dialog" aria-label="Speed settings" className="animate-panel-from-top absolute left-0 top-[calc(100%+0.5rem)] z-30 w-72">
                  <SpeedControl value={speed} onChange={setSpeed} />
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              ref={configurationButtonRef}
              className="flex items-center gap-2 rounded-xl border border-border bg-surface/70 px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:border-primary/50 hover:bg-surface-hover hover:text-foreground"
              type="button"
              aria-expanded={activePanel === "configuration"}
              aria-controls="configuration-panel"
              onClick={() => setActivePanel(activePanel === "configuration" ? null : "configuration")}
            >
              <Settings2 className="size-4 text-secondary" aria-hidden="true" />
              Configure
            </button>
          </div>
        </header>
        <div className="grid gap-4 lg:grid-cols-2">
          <VisualizerCanvas />
          <div className="relative">
            <CodePanel code={exampleCode} />
            {activePanel === "configuration" && (
              <div ref={configurationPanelRef} id="configuration-panel" role="dialog" aria-label="Visualization configuration" className="animate-panel-from-right absolute right-0 top-0 z-20 w-full sm:w-[22rem]">
                <ConfigurationPanel value={configuration} onChange={setConfiguration} onReset={resetVisualizer} />
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
