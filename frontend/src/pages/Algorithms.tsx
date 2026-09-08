import Navbar from "@/components/layout/navbar/Navbar";
import { Card } from "@/components/ui/Card/Card";
import { algorithms } from "@/data/algorithms";

export function Algorithms() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="p-8">
        <h1 className="mb-2 text-3xl font-bold">Algorithms</h1>
        <p className="mb-8 text-text-secondary">
          Explore visualizations and fundamental concepts.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {algorithms.map((algorithm) => (
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
