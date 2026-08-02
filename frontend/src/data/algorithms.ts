import type { Algorithm } from "@/types/algorithm.ts";

import { ArrowUpDown, GitBranch } from "lucide-react";

export const algorithms: Algorithm[] = [
  {
    id: 1,
    title: "Bubble Sort",
    description: "Sort by exchange.",
    logo: ArrowUpDown,
    href: "/algorithms/bubble-sort",
  },
  {
    id: 2,
    title: "Merge Sort",
    description: "Devide and conquer.",
    logo: GitBranch,
    href: "/algorithms/merge-sort",
  },
];
