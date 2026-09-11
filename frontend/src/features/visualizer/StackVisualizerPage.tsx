import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ArrowDownToLine, ArrowUpFromLine, ChevronLeft, Cuboid, Play, Plus, RotateCcw, Sparkles } from "lucide-react";
import Navbar from "@/components/layout/navbar/Navbar";

type Setup = "choose" | "preset" | "custom" | "playing";

type Preset = {
  name: string;
  description: string;
  values: number[];
};

const presets: Preset[] = [
  { name: "Stack of books", description: "See how items are added and removed from the top.", values: [12, 28, 45, 67] },
  { name: "Browser history", description: "Each visited page goes to the top of the stack.", values: ["A", "B", "C"].map((value) => value.charCodeAt(0) - 54) },
  { name: "Undo actions", description: "The most recent step is always undone first.", values: [18, 36, 54] },
];

function describeAction(action: "idle" | "push" | "pop", value?: number) {
  if (action === "push") return `${value} was added to the top of the stack.`;
  if (action === "pop") return `${value} was removed from the top of the stack.`;
  return "Choose an operation to get started.";
}

export function StackVisualizerPage() {
  const [setup, setSetup] = useState<Setup>("choose");
  const [items, setItems] = useState<number[]>([]);
  const [draft, setDraft] = useState("");
  const [pushValue, setPushValue] = useState("");
  const [action, setAction] = useState<"idle" | "push" | "pop">("idle");
  const [lastValue, setLastValue] = useState<number>();
  const stackRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!panelRef.current) return;
    const context = gsap.context(() => {
      gsap.fromTo("[data-reveal]", { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.48, stagger: 0.08, ease: "power3.out" });
    }, panelRef);
    return () => context.revert();
  }, [setup]);

  useLayoutEffect(() => {
    if (!stackRef.current || action === "idle") return;
    const blocks = stackRef.current.querySelectorAll("[data-stack-item]");
    if (action === "push" && blocks.length) {
      gsap.fromTo(blocks[blocks.length - 1], { autoAlpha: 0, y: -54, scale: 0.86 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.48, ease: "back.out(1.8)" });
    }
    gsap.fromTo(stackRef.current, { x: -3 }, { x: 0, duration: 0.35, ease: "elastic.out(1, 0.5)" });
  }, [items, action]);

  function start(values: number[]) {
    setItems(values);
    setAction("idle");
    setLastValue(undefined);
    setSetup("playing");
  }

  function addCustomValue() {
    const value = Number(draft);
    if (!draft.trim() || !Number.isFinite(value)) return;
    setItems((current) => [...current, value]);
    setDraft("");
  }

  function push() {
    const value = Number(pushValue);
    if (!pushValue.trim() || !Number.isFinite(value) || items.length >= 8) return;
    setItems((current) => [...current, value]);
    setLastValue(value);
    setAction("push");
    setPushValue("");
  }

  function pop() {
    if (!items.length) return;
    const value = items[items.length - 1];
    const top = stackRef.current?.querySelector("[data-stack-item]:last-child");
    if (top) gsap.to(top, { autoAlpha: 0, y: -48, scale: 0.84, duration: 0.25, ease: "power2.in" });
    window.setTimeout(() => {
      setItems((current) => current.slice(0, -1));
      setLastValue(value);
      setAction("pop");
    }, 230);
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:py-12">
        <Link to="/data-structures" className="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary transition-colors hover:text-secondary"><ChevronLeft className="size-4" /> Data structures</Link>
        <div ref={panelRef} className="mt-6">
          {setup === "choose" && <ChooseSetup onPreset={() => setSetup("preset")} onCustom={() => { setItems([]); setSetup("custom"); }} />}
          {setup === "preset" && <PresetSetup onBack={() => setSetup("choose")} onChoose={(values) => start(values)} />}
          {setup === "custom" && (
            <CustomSetup items={items} draft={draft} onDraft={setDraft} onAdd={addCustomValue} onRemove={(index) => setItems((current) => current.filter((_, itemIndex) => itemIndex !== index))} onBack={() => setSetup("choose")} onStart={() => start(items)} />
          )}
          {setup === "playing" && <StackPlayer items={items} stackRef={stackRef} action={action} lastValue={lastValue} pushValue={pushValue} onPushValue={setPushValue} onPush={push} onPop={pop} onReset={() => setSetup("choose")} />}
        </div>
      </main>
    </div>
  );
}

function Header() {
  return <div data-reveal><p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Data structure · LIFO</p><h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">Stack visualizer</h1><p className="mt-4 max-w-2xl leading-relaxed text-text-secondary">In a stack, the last item in is the first item out. Choose how you want to start.</p></div>;
}

function ChooseSetup({ onPreset, onCustom }: { onPreset: () => void; onCustom: () => void }) {
  return <><Header /><section className="mt-9 grid gap-5 md:grid-cols-2"><button data-reveal type="button" onClick={onPreset} className="group rounded-2xl border border-primary/40 bg-surface p-7 text-left shadow-sm transition hover:-translate-y-1 hover:border-primary hover:bg-surface-hover"><div className="flex size-12 items-center justify-center rounded-xl bg-primary/15 text-primary"><Sparkles /></div><h2 className="mt-6 text-xl font-bold">Start with a preset</h2><p className="mt-2 leading-relaxed text-text-secondary">Use a ready-made example and see push and pop in action.</p><span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">View scenarios <Play className="size-4" /></span></button><button data-reveal type="button" onClick={onCustom} className="group rounded-2xl border border-border bg-surface p-7 text-left shadow-sm transition hover:-translate-y-1 hover:border-secondary/70 hover:bg-surface-hover"><div className="flex size-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary"><Cuboid /></div><h2 className="mt-6 text-xl font-bold">Build my stack</h2><p className="mt-2 leading-relaxed text-text-secondary">Set the initial items and experiment with the structure your way.</p><span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-secondary">Create stack <Plus className="size-4" /></span></button></section></>;
}

function PresetSetup({ onBack, onChoose }: { onBack: () => void; onChoose: (values: number[]) => void }) {
  return <><Header /><div data-reveal className="mt-8 flex items-center justify-between"><h2 className="text-lg font-semibold">Choose a scenario</h2><button type="button" onClick={onBack} className="text-sm text-muted hover:text-foreground">Back</button></div><section className="mt-4 grid gap-4 md:grid-cols-3">{presets.map((preset) => <button data-reveal key={preset.name} type="button" onClick={() => onChoose(preset.values)} className="rounded-2xl border border-border bg-surface p-5 text-left transition hover:border-primary/70 hover:bg-surface-hover"><p className="font-semibold">{preset.name}</p><p className="mt-2 min-h-12 text-sm leading-relaxed text-text-secondary">{preset.description}</p><div className="mt-5 flex items-end gap-1.5">{preset.values.map((value, index) => <span key={`${value}-${index}`} className="flex h-8 w-9 items-center justify-center rounded-md bg-primary/15 font-mono text-xs text-primary">{value}</span>)}</div></button>)}</section></>;
}

function CustomSetup({ items, draft, onDraft, onAdd, onRemove, onBack, onStart }: { items: number[]; draft: string; onDraft: (value: string) => void; onAdd: () => void; onRemove: (index: number) => void; onBack: () => void; onStart: () => void }) {
  return <><Header /><section data-reveal className="mt-9 max-w-2xl rounded-2xl border border-border bg-surface p-6"><div className="flex items-center justify-between"><h2 className="text-lg font-semibold">Build your stack</h2><button type="button" onClick={onBack} className="text-sm text-muted hover:text-foreground">Back</button></div><p className="mt-2 text-sm text-text-secondary">Add numbers in the order they should enter the stack.</p><div className="mt-6 flex gap-3"><input value={draft} onChange={(event) => onDraft(event.target.value)} onKeyDown={(event) => event.key === "Enter" && onAdd()} inputMode="numeric" placeholder="E.g. 42" className="min-w-0 flex-1 rounded-xl border border-border bg-code-background px-4 py-3 outline-none transition focus:border-primary" /><button type="button" onClick={onAdd} className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-3 font-semibold text-background transition hover:bg-primary-hover"><Plus className="size-4" /> Add</button></div><div className="mt-5 flex min-h-14 flex-wrap gap-2 rounded-xl border border-dashed border-border p-3">{items.length ? items.map((item, index) => <button type="button" onClick={() => onRemove(index)} key={`${item}-${index}`} className="rounded-lg bg-primary/15 px-3 py-1.5 font-mono text-sm text-primary transition hover:bg-danger/20 hover:text-danger" title="Remove item">{item} ×</button>) : <span className="self-center text-sm text-muted">Your stack is empty.</span>}</div><button type="button" disabled={!items.length} onClick={onStart} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-secondary px-4 py-3 font-semibold text-background transition hover:bg-secondary-hover disabled:cursor-not-allowed disabled:opacity-40"><Play className="size-4" /> Visualize stack</button></section></>;
}

function StackPlayer({ items, stackRef, action, lastValue, pushValue, onPushValue, onPush, onPop, onReset }: { items: number[]; stackRef: React.RefObject<HTMLDivElement | null>; action: "idle" | "push" | "pop"; lastValue?: number; pushValue: string; onPushValue: (value: string) => void; onPush: () => void; onPop: () => void; onReset: () => void }) {
  return <><div data-reveal className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Stack · LIFO</p><h1 className="mt-2 text-3xl font-bold tracking-tight">Try the operations</h1><p className="mt-2 text-text-secondary">{describeAction(action, lastValue)}</p></div><button type="button" onClick={onReset} className="inline-flex items-center gap-2 rounded-xl border border-border px-3 py-2 text-sm font-medium text-text-secondary hover:border-primary/50 hover:text-foreground"><RotateCcw className="size-4" /> Start over</button></div><section data-reveal className="mt-7 grid gap-5 lg:grid-cols-[minmax(0,1fr)_19rem]"><div className="min-h-[31rem] rounded-2xl border border-border bg-surface p-6"><div className="flex items-center justify-between border-b border-border pb-4"><h2 className="font-semibold">Visualization</h2><span className="rounded-full bg-surface-active px-3 py-1 font-mono text-xs text-muted">{items.length} item{items.length === 1 ? "" : "s"}</span></div><div ref={stackRef} className="mx-auto mt-7 flex min-h-96 w-full max-w-sm flex-col justify-end"><div className="mb-2 text-center text-xs font-semibold uppercase tracking-widest text-pink">Top</div>{items.length ? items.map((item, index) => <div data-stack-item key={`${item}-${index}`} className={`mb-2 flex h-12 items-center justify-between rounded-xl border px-4 font-mono shadow-sm ${index === items.length - 1 ? "border-pink/70 bg-pink/15 text-pink" : "border-primary/35 bg-primary/10 text-primary"}`}><span>#{index + 1}</span><strong>{item}</strong>{index === items.length - 1 ? <ArrowUpFromLine className="size-4" /> : <span className="size-4" />}</div>) : <div className="rounded-xl border border-dashed border-border p-6 text-center text-sm text-muted">Stack is empty — perform a push.</div>}<div className="mt-2 h-3 rounded-t-lg bg-secondary/70" /><div className="h-3 rounded-b-lg bg-secondary/30" /></div></div><aside className="space-y-5"><div className="rounded-2xl border border-border bg-surface p-5"><h2 className="font-semibold">Operations</h2><p className="mt-1 text-sm text-muted">Only the top item can be changed.</p><label className="mt-5 block text-sm font-medium text-text-secondary" htmlFor="push-value">New value</label><div className="mt-2 flex gap-2"><input id="push-value" value={pushValue} onChange={(event) => onPushValue(event.target.value)} onKeyDown={(event) => event.key === "Enter" && onPush()} inputMode="numeric" placeholder="42" className="min-w-0 flex-1 rounded-lg border border-border bg-code-background px-3 py-2.5 font-mono outline-none focus:border-primary" /><button type="button" onClick={onPush} disabled={items.length >= 8} className="rounded-lg bg-primary px-3 text-background transition hover:bg-primary-hover disabled:opacity-40" aria-label="Push"><Plus className="size-4" /></button></div><button type="button" onClick={onPop} disabled={!items.length} className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-danger/50 px-3 py-2.5 text-sm font-semibold text-danger transition hover:bg-danger/10 disabled:cursor-not-allowed disabled:opacity-40"><ArrowDownToLine className="size-4" /> Pop from top</button></div><div className="rounded-2xl border border-secondary/25 bg-secondary/5 p-5 text-sm leading-relaxed text-text-secondary"><strong className="text-secondary">How it works:</strong> <span className="block mt-1">Push adds an item to the top. Pop removes the most recently added item.</span></div></aside></section></>;
}
