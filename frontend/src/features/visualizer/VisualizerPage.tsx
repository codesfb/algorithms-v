import { useState } from "react";
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

export function VisualizerPage() {
  const [speed, setSpeed] = useState(50);
  const [configuration, setConfiguration] = useState(defaultConfiguration);

  function resetVisualizer() {
    setSpeed(50);
    setConfiguration(defaultConfiguration);
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="mx-auto w-full max-w-7xl space-y-5 px-4 py-8 sm:px-6 lg:py-10">
        <DescriptionVisualizer
          title="Example page"
          desc="Thats how it gonna be"
        />

        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <VisualizerCanvas />
          <aside className="space-y-5" aria-label="Visualization controls">
            <SpeedControl value={speed} onChange={setSpeed} />
            <ConfigurationPanel value={configuration} onChange={setConfiguration} onReset={resetVisualizer} />
          </aside>
        </div>

        <CodePanel />
      </main>
    </div>
  );
}
