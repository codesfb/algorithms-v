import Navbar from "../components/layout/navbar/Navbar.tsx";
import { Card } from "../components/ui/Card/Card.tsx";
import { useState } from "react";
//import { Database } from "lucide-react";
import { algorithms } from "@/data/algorithms.ts";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar
          drawerOpen={drawerOpen}
          onSettingsClick={() => setDrawerOpen(!drawerOpen)}
        />

        <main className="p-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {algorithms.map((algorithm) => (
              <Card
                key={algorithm.id}
                title={algorithm.title}
                description={algorithm.description}
                icon={algorithm.logo}
                href={algorithm.href}
              />
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
