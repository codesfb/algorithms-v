import { ArrowRight, Binary, Boxes, ChartNoAxesCombined, Network } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/navbar/Navbar";
import { Card } from "@/components/ui/Card/Card";
import { algorithms } from "@/data/algorithms";
import { data_structures } from "@/data/data_structures";

const highlights = [...algorithms, ...data_structures].slice(0, 3);

export function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:px-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-4 py-2 text-sm font-medium text-primary"><Binary className="h-4 w-4" /> Learn by seeing it happen</span>
            <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">Algorithms stop being abstract when you can visualize them.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-text-secondary">Explore algorithms and data structures step by step. Compare costs, understand decisions, and build a solid foundation in computer science.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/algorithms" className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-background transition-colors hover:bg-primary-hover">Explore algorithms <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/data-structures" className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 font-semibold transition-colors hover:border-secondary hover:text-secondary">View data structures</Link>
            </div>
          </div>
          <div className="rounded-2xl border border-primary/25 bg-surface p-6 shadow-2xl shadow-primary/10">
            <div className="flex items-center justify-between border-b border-border pb-4"><img src="/algorithms-v.svg" alt="algorithms v" className="h-8" /><span className="rounded-full bg-success/15 px-3 py-1 text-xs font-semibold text-success">visualization</span></div>
            <div className="mt-7 grid grid-cols-6 items-end gap-3" aria-label="Example of sorted bars">{[35, 65, 45, 90, 55, 75].map((height, index) => <div key={height} className="flex flex-col items-center gap-2"><div className={index === 3 ? "w-full rounded-t bg-pink" : "w-full rounded-t bg-secondary"} style={{ height }} /><span className="text-xs text-muted">{index + 1}</span></div>)}</div>
            <p className="mt-6 text-sm text-text-secondary">Follow every comparison and swap during execution.</p>
          </div>
        </section>
        <section className="border-y border-border bg-surface/40"><div className="mx-auto grid max-w-6xl gap-6 px-6 py-12 md:grid-cols-3 lg:px-8"><Feature icon={ChartNoAxesCombined} title="Complexity" text="Understand time and memory with Big O notation." /><Feature icon={Network} title="Step by step" text="Follow the logic behind every operation." /><Feature icon={Boxes} title="Practical foundation" text="Learn concepts used in interviews and projects." /></div></section>
        <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8"><div className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-sm font-semibold uppercase tracking-widest text-secondary">Start here</p><h2 className="mt-2 text-3xl font-bold">Featured topics</h2></div><Link to="/algorithms" className="text-sm font-semibold text-primary hover:text-primary-hover">View all algorithms →</Link></div><div className="mt-8 grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-3">{highlights.map((item) => <Card key={`${item.href}-${item.id}`} title={item.title} description={item.description} icon={item.logo} href={item.href} />)}</div></section>
      </main>
    </div>
  );
}

function Feature({ icon: Icon, title, text }: { icon: LucideIcon; title: string; text: string }) {
  return <article className="rounded-xl border border-border bg-background p-6"><Icon className="h-6 w-6 text-primary" /><h2 className="mt-4 text-lg font-semibold">{title}</h2><p className="mt-2 text-sm leading-6 text-text-secondary">{text}</p></article>;
}
