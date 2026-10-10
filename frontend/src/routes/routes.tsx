import { Routes, Route } from "react-router-dom";
import { Home } from "@/pages/Home";
import { Algorithms } from "@/pages/Algorithms";
import { DataStructures } from "@/pages/DataStructures";
import { NotFound } from "@/pages/NotFound";
import { SortingVisualizerPage } from "@/features/visualizer/SortingVisualizerPage";
import { StackVisualizerPage } from "@/features/visualizer/StackVisualizerPage";


export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/algorithms" element={<Algorithms />} />
      <Route path="/data-structures" element={<DataStructures />} />
      <Route path="/data-structures/stack" element={<StackVisualizerPage />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/algorithms/:algorithm" element={<SortingVisualizerPage />} />
    </Routes>
  );
}
