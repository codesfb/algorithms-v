//this gonna be exchanged by the data
//comming from backend as long as algorithms one
import type { dataStructure } from "@/types/data_structure";

import { ArrowUpDown, GitBranch } from "lucide-react";

export const data_structures: dataStructure[] = [
  {
    id: 1,
    title: "Stack",
    description: "Explore the LIFO structure: the last item in is the first item out.",
    logo: ArrowUpDown,
    href: "/data-structures/stack",
  },
  {
    id: 2,
    title: "Linked list",
    description: "One obj point to another",
    logo: GitBranch,
    href: "/data_structures/linked_list",
  },
];
