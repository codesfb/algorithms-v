import { useState } from "react";
import DropDownItem from "./DropDownItem.tsx";

type DropdownProps = {
  title: string;
  items: string[];
  onSelect: (algorithm: string) => void;
};

function Dropdown({ title, items, onSelect }: DropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative "
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="
          text-pink
          hover:text-primary 
        "
      >
        {title} ▼
      </button>

      {open && (
        <ul
          className="
            absolute
            top-8
            left-0
            w-48
            bg-background 
            border
            border-selection
            rounded-lg
            p-1
          "
        >
          {items.map((item) => (
            <DropDownItem key={item} onClick={() => onSelect(item)}>
              {item}
            </DropDownItem>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
