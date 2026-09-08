import Navbar from "@/components/layout/navbar/Navbar";
import { Card } from "@/components/ui/Card/Card";
import {data_structures } from "@/data/data_structures";

export function DataStructures() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="px-4 py-10 sm:px-6">
        <div className="page-enter">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary">Explore</p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Data Structures</h1>
        <p className="mt-3 max-w-2xl text-text-secondary">
          Explore visualizations and fundamental concepts.
        </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data_structures.map((algorithm) => (
            <Card key={algorithm.id}
                title={algorithm.title}
                description={algorithm.description}
                icon={algorithm.logo}
                href={algorithm.href}/>
          ))}
        </div>
      </main>
    </div>
  );
}
