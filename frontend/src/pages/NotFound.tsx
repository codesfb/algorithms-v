import { ArrowLeft, House, SearchX } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/navbar/Navbar";

export function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex min-h-[calc(100vh-4rem)] items-center px-4 py-10 sm:px-6">
        <section className="page-enter mx-auto w-full max-w-2xl rounded-2xl border border-border bg-surface p-8 text-center shadow-2xl shadow-primary/5 sm:p-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">
            <SearchX className="h-8 w-8" aria-hidden="true" />
          </div>
          <p className="mt-8 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-secondary">Error 404</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">This path does not exist.</h1>
          <p className="mx-auto mt-5 max-w-lg leading-7 text-text-secondary">
            The page may have moved, or the address may not be quite right. Choose a path below to continue exploring.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/" className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-background transition-transform duration-200 hover:-translate-y-0.5 hover:bg-primary-hover">
              <House className="h-4 w-4" /> Go home
            </Link>
            <Link to="/algorithms" className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-5 py-3 font-semibold transition-colors duration-200 hover:border-secondary hover:text-secondary">
              Browse algorithms
            </Link>
          </div>

          <Link to="/data-structures" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-text-secondary transition-colors hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> Explore data structures instead
          </Link>
        </section>
      </main>
    </div>
  );
}
