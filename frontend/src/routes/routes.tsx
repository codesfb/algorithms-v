import { Routes, Route } from "react-router-dom";
import { Home } from "@/pages/Home";
import { Algorithms } from "@/pages/Algorithms";
import { DataStructures } from "@/pages/DataStructures";
import { NotFound } from "@/pages/NotFound";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/algorithms" element={<Algorithms />} />
      <Route path="/data-structures" element={<DataStructures />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}