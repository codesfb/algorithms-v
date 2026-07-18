import Navbar from "./components/Navbar/Navbar";
import SettingsDrawer from "./components/SettingsDrawer/SettingsDrawer.tsx";
import { useState } from "react";
function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar
          drawerOpen={drawerOpen}
          onSettingsClick={() => setDrawerOpen(!drawerOpen)}
        />
        <div>
          <SettingsDrawer open={drawerOpen} />
        </div>
      </div>
    </>
  );
}

export default App;
