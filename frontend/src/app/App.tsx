import Navbar from "../components/layout/navbar/Navbar.tsx";
import { Card } from "../components/ui/Card/Card.tsx";
import { useState } from "react";
import { Database } from "lucide-react";

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
          <Card
            title="Stack"
            description="Estrutura de dados LIFO (Last In, First Out)."
            icon={<Database size={40} className="text-pink" />}
          />
        </div>
      </main>


      </div>
    </>
  );
}

export default App;
