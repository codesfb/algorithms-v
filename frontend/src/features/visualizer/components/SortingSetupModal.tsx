import { useState } from "react";
import { ArrowLeft, Play, Plus, Sparkles, X } from "lucide-react";

export type SortingPreset = { name: string; description: string; values: number[] };
type Stage = "choose" | "presets" | "custom";

type SortingSetupModalProps = {
  title: string;
  description: string;
  presets: SortingPreset[];
  onStart: (values: number[]) => void;
  onClose: () => void;
};

export function SortingSetupModal({ title, description, presets, onStart, onClose }: SortingSetupModalProps) {
  const [stage, setStage] = useState<Stage>("choose");
  const [values, setValues] = useState<number[]>([]);
  const [draft, setDraft] = useState("");

  function addValue() {
    const value = Number(draft);
    if (!draft.trim() || !Number.isFinite(value) || values.length >= 24) return;
    setValues((current) => [...current, value]);
    setDraft("");
  }

  return <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/55 px-4 py-6 backdrop-blur-sm" role="presentation">
    <section role="dialog" aria-modal="true" aria-labelledby="sorting-setup-title" className="relative my-auto max-h-[calc(100vh-3rem)] w-full max-w-3xl overflow-y-auto rounded-3xl border border-border bg-background p-6 shadow-2xl shadow-black/40 sm:p-8">
      <button type="button" onClick={onClose} aria-label="Close setup" className="absolute right-5 top-5 rounded-lg p-2 text-muted transition hover:bg-surface-hover hover:text-foreground"><X className="size-5" /></button>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Sorting · {title}</p>
      <h2 id="sorting-setup-title" className="mt-3 pr-10 text-3xl font-bold tracking-tight">{stage === "choose" ? `Set up ${title}` : stage === "presets" ? "Choose an example" : "Build your array"}</h2>
      <p className="mt-3 max-w-2xl leading-relaxed text-text-secondary">{stage === "custom" ? "Add numbers in the order you want the algorithm to receive them." : description}</p>

      {stage === "choose" && <section className="mt-8 grid gap-4 sm:grid-cols-2">
        <button type="button" onClick={() => setStage("presets")} className="group rounded-2xl border border-primary/40 bg-surface p-6 text-left transition hover:-translate-y-1 hover:border-primary hover:bg-surface-hover"><span className="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary"><Sparkles /></span><h3 className="mt-5 text-lg font-bold">Start with an example</h3><p className="mt-2 text-sm leading-relaxed text-text-secondary">Choose a ready-made array and start exploring the sort.</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">Choose example <Play className="size-4" /></span></button>
        <button type="button" onClick={() => { setValues([]); setStage("custom"); }} className="group rounded-2xl border border-border bg-surface p-6 text-left transition hover:-translate-y-1 hover:border-secondary/70 hover:bg-surface-hover"><span className="flex size-11 items-center justify-center rounded-xl bg-secondary/10 text-secondary"><Plus /></span><h3 className="mt-5 text-lg font-bold">Build my array</h3><p className="mt-2 text-sm leading-relaxed text-text-secondary">Enter your own values and control the starting order.</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-secondary">Create array <Plus className="size-4" /></span></button>
      </section>}

      {stage === "presets" && <><div className="mt-7 flex items-center justify-between"><h3 className="font-semibold">Choose a scenario</h3><button type="button" onClick={() => setStage("choose")} className="inline-flex items-center gap-1 text-sm text-muted hover:text-foreground"><ArrowLeft className="size-4" /> Back</button></div><section className="mt-4 grid gap-4 sm:grid-cols-2">{presets.map((preset) => <button key={preset.name} type="button" onClick={() => onStart(preset.values)} className="rounded-2xl border border-border bg-surface p-5 text-left transition hover:border-primary/70 hover:bg-surface-hover"><h3 className="font-semibold">{preset.name}</h3><p className="mt-2 min-h-10 text-sm leading-relaxed text-text-secondary">{preset.description}</p><div className="mt-4 flex flex-wrap gap-1.5">{preset.values.map((value, index) => <span key={`${value}-${index}`} className="rounded-md bg-primary/15 px-2 py-1 font-mono text-xs text-primary">{value}</span>)}</div></button>)}</section></>}

      {stage === "custom" && <section className="mt-7 rounded-2xl border border-border bg-surface p-5 sm:p-6"><div className="flex items-center justify-between gap-3"><h3 className="font-semibold">Your values</h3><button type="button" onClick={() => setStage("choose")} className="inline-flex items-center gap-1 text-sm text-muted hover:text-foreground"><ArrowLeft className="size-4" /> Back</button></div><div className="mt-4 flex gap-2"><input value={draft} onChange={(event) => setDraft(event.target.value)} onKeyDown={(event) => event.key === "Enter" && addValue()} inputMode="decimal" placeholder="For example, 42" aria-label="Value to add" className="min-w-0 flex-1 rounded-xl border border-border bg-code-background px-4 py-3 outline-none transition focus:border-primary" /><button type="button" onClick={addValue} disabled={values.length >= 24} className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-3 font-semibold text-background transition hover:bg-primary-hover disabled:opacity-40"><Plus className="size-4" /> Add</button></div><div className="mt-4 flex min-h-14 flex-wrap gap-2 rounded-xl border border-dashed border-border p-3">{values.length ? values.map((value, index) => <button type="button" key={`${value}-${index}`} onClick={() => setValues((current) => current.filter((_, itemIndex) => itemIndex !== index))} title="Remove value" className="rounded-lg bg-primary/15 px-3 py-1.5 font-mono text-sm text-primary transition hover:bg-danger/20 hover:text-danger">{value} ×</button>) : <span className="self-center text-sm text-muted">Add at least one number to begin.</span>}</div><button type="button" disabled={!values.length} onClick={() => onStart(values)} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-secondary px-4 py-3 font-semibold text-background transition hover:bg-secondary-hover disabled:cursor-not-allowed disabled:opacity-40"><Play className="size-4" /> Visualize {title}</button></section>}
    </section>
  </div>;
}
