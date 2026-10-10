import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronLeft, Gauge, Pause, Play, Settings2, SkipForward } from "lucide-react";
import Navbar from "@/components/layout/navbar/Navbar";
import { SpeedControl } from "./components/SpeedControl";
import { CodePanel } from "./components/CodePanel";
import { SortingSetupModal, type SortingPreset } from "./components/SortingSetupModal";

type Algorithm = "bubble-sort" | "merge-sort";
type Step = { values: number[]; active: number[]; message: string; kind: "compare" | "swap" | "write" | "done" };

const descriptions: Record<Algorithm, { title: string; description: string; complexity: string; code: string }> = {
  "bubble-sort": {
    title: "Bubble Sort",
    description: "Compare adjacent values and swap them when they are out of order. After each pass, the largest remaining value settles at the end.",
    complexity: "O(n²) time · O(1) space",
    code: `function bubbleSort(values: number[]) {\n  const result = [...values];\n  for (let end = result.length - 1; end > 0; end--) {\n    for (let i = 0; i < end; i++) {\n      if (result[i] > result[i + 1]) {\n        [result[i], result[i + 1]] = [result[i + 1], result[i]];\n      }\n    }\n  }\n  return result;\n}`,
  },
  "merge-sort": {
    title: "Merge Sort",
    description: "Split the array into smaller halves, sort each half, then merge them by repeatedly choosing the smallest next value.",
    complexity: "O(n log n) time · O(n) space",
    code: `function mergeSort(values: number[]): number[] {\n  if (values.length <= 1) return values;\n  const middle = Math.floor(values.length / 2);\n  const left = mergeSort(values.slice(0, middle));\n  const right = mergeSort(values.slice(middle));\n  return merge(left, right);\n}`,
  },
};

const presets: Record<Algorithm, SortingPreset[]> = {
  "bubble-sort": [
    { name: "Nearly sorted", description: "A few adjacent values need to move into place.", values: [12, 18, 15, 24, 29, 27, 35] },
    { name: "Reversed order", description: "See Bubble Sort move values across the array one swap at a time.", values: [72, 61, 49, 37, 25, 13] },
    { name: "Mixed values", description: "A varied array with several swaps across multiple passes.", values: [42, 17, 68, 23, 9, 54, 31] },
  ],
  "merge-sort": [
    { name: "Two sorted halves", description: "Watch Merge Sort combine two already ordered sections.", values: [8, 19, 27, 3, 14, 22, 31] },
    { name: "Reversed order", description: "Follow the divide and merge steps on descending values.", values: [72, 61, 49, 37, 25, 13] },
    { name: "Mixed values", description: "See the array split into smaller parts and merge back in order.", values: [42, 17, 68, 23, 9, 54, 31] },
  ],
};

function buildSteps(input: number[], algorithm: Algorithm): Step[] {
  const values = [...input];
  const steps: Step[] = [];
  if (algorithm === "bubble-sort") {
    for (let end = values.length - 1; end > 0; end--) {
      for (let i = 0; i < end; i++) {
        const pair = [i, i + 1];
        steps.push({ values: [...values], active: pair, kind: "compare", message: `Compare ${values[i]} and ${values[i + 1]}.` });
        if (values[i] > values[i + 1]) {
          [values[i], values[i + 1]] = [values[i + 1], values[i]];
          steps.push({ values: [...values], active: pair, kind: "swap", message: `Swap them: ${values[i]} moves left and ${values[i + 1]} moves right.` });
        }
      }
    }
  } else {
    function mergeSort(start: number, end: number): void {
      if (end - start < 2) return;
      const middle = Math.floor((start + end) / 2);
      mergeSort(start, middle);
      mergeSort(middle, end);
      const merged: number[] = [];
      let left = start;
      let right = middle;
      while (left < middle && right < end) {
        steps.push({ values: [...values], active: [left, right], kind: "compare", message: `Compare ${values[left]} and ${values[right]} while merging this range.` });
        if (values[left] <= values[right]) merged.push(values[left++]);
        else merged.push(values[right++]);
      }
      while (left < middle) merged.push(values[left++]);
      while (right < end) merged.push(values[right++]);
      merged.forEach((value, offset) => {
        values[start + offset] = value;
        steps.push({ values: [...values], active: [start + offset], kind: "write", message: `Write ${value} into position ${start + offset + 1} of the merged range.` });
      });
    }
    mergeSort(0, values.length);
  }
  steps.push({ values: [...values], active: [], kind: "done", message: "The array is sorted." });
  return steps;
}

function randomValues(size: number) {
  return Array.from({ length: size }, () => Math.floor(Math.random() * 90) + 10);
}

export function SortingVisualizerPage() {
  const { algorithm: routeAlgorithm } = useParams();
  const algorithm: Algorithm = routeAlgorithm === "merge-sort" ? "merge-sort" : "bubble-sort";
  const info = descriptions[algorithm];
  const [size, setSize] = useState(18);
  const [speed, setSpeed] = useState(50);
  const [values, setValues] = useState<number[]>([]);
  const [stepIndex, setStepIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [showSetup, setShowSetup] = useState(true);
  const steps = useMemo(() => buildSteps(values, algorithm), [values, algorithm]);
  const step = steps[stepIndex];

  useEffect(() => {
    if (!playing) return;
    const timer = window.setTimeout(() => {
      if (stepIndex >= steps.length - 1) setPlaying(false);
      else setStepIndex((current) => current + 1);
    }, Math.max(35, 1050 - speed * 9));
    return () => window.clearTimeout(timer);
  }, [playing, speed, stepIndex, steps.length]);

  function reset(nextValues = randomValues(size)) {
    setPlaying(false);
    setValues(nextValues);
    setStepIndex(0);
  }

  function start(valuesToSort: number[]) {
    setPlaying(false);
    setValues(valuesToSort);
    setStepIndex(0);
    setShowSetup(false);
  }

  return <div className="min-h-screen bg-background text-foreground"><Navbar /><main className="mx-auto w-full max-w-7xl px-4 py-7 sm:px-6">
    <Link to="/algorithms" className="inline-flex items-center gap-1 text-sm text-text-secondary hover:text-foreground"><ChevronLeft className="size-4" /> Algorithms</Link>
    <header className="mt-5 flex flex-wrap items-start justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Sorting algorithm</p><h1 className="mt-2 text-3xl font-bold tracking-tight">{info.title} visualizer</h1><p className="mt-2 max-w-2xl text-text-secondary">{info.description}</p><p className="mt-2 text-xs font-medium text-muted">{info.complexity}</p></div><label className="flex items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2 text-sm text-text-secondary"><Gauge className="size-4 text-secondary" /> Speed <span className="font-mono text-primary">{speed}%</span><input aria-label="Animation speed" className="w-24 accent-primary" type="range" min="1" max="100" value={speed} onChange={(event) => setSpeed(Number(event.target.value))} /></label></header>
    <section className="mt-6 overflow-hidden rounded-2xl border border-border bg-surface shadow-sm"><div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-5 py-4"><div><h2 className="font-semibold">Visualization</h2><p aria-live="polite" className="mt-1 text-sm text-text-secondary">{step?.message}</p></div><div className="flex items-center gap-2"><button type="button" onClick={() => setPlaying((current) => !current)} disabled={stepIndex === steps.length - 1} className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-background disabled:opacity-40">{playing ? <Pause className="size-4" /> : <Play className="size-4" />}{playing ? "Pause" : "Play"}</button><button type="button" aria-label="Next step" onClick={() => { setPlaying(false); setStepIndex((current) => Math.min(current + 1, steps.length - 1)); }} disabled={stepIndex === steps.length - 1} className="rounded-lg border border-border p-2 text-text-secondary hover:text-foreground disabled:opacity-40"><SkipForward className="size-4" /></button><button type="button" onClick={() => setShowSetup(true)} className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm text-text-secondary hover:text-foreground"><Settings2 className="size-4" /> Configure array</button></div></div>
      <div className="flex min-h-[20rem] items-end justify-center gap-1 overflow-x-auto px-4 pb-8 pt-7 sm:gap-2 sm:px-8">{step.values.map((value, index) => <div key={index} className="flex min-w-0 flex-1 flex-col items-center justify-end gap-2" style={{ maxWidth: "3rem" }}><span className="text-[10px] font-mono text-text-secondary sm:text-xs">{value}</span><div className={`w-full rounded-t-md transition-all duration-200 ${step.active.includes(index) ? step.kind === "swap" ? "bg-danger" : "bg-secondary" : step.kind === "done" ? "bg-primary" : "bg-primary/45"}`} style={{ height: `${Math.max(12, value * 2.1)}px` }} /></div>)}</div>
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border px-5 py-3 text-xs text-muted"><span>Step {stepIndex + 1} of {steps.length}</span><label className="flex items-center gap-2">Array size <input className="w-28 accent-primary" type="range" min="6" max="32" value={size} onChange={(event) => { const nextSize = Number(event.target.value); setSize(nextSize); reset(randomValues(nextSize)); }} /><span className="w-5 font-mono">{size}</span></label><button type="button" onClick={() => reset(randomValues(size))} className="underline decoration-border underline-offset-4 hover:text-foreground">Generate random array</button></div>
    </section><div className="mt-5"><CodePanel title={`${info.title} code`} code={info.code} /></div>
  </main>{showSetup && <SortingSetupModal title={info.title} description={info.description} presets={presets[algorithm]} onStart={start} onClose={() => setShowSetup(false)} />}</div>;
}
