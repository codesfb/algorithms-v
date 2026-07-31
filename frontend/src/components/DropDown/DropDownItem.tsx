type DropdownItemProps = {
  children: React.ReactNode;
  onClick: () => void;
};

function DropdownItem({ children, onClick }: DropdownItemProps) {
  return (
    <li>
      <button
        className="
          w-full
          text-left
          px-4
          py-2
          hover:bg-selection
          rounded
        "
        onClick={onClick}
      >
        {children}
      </button>
    </li>
  );
}
export default DropdownItem;
