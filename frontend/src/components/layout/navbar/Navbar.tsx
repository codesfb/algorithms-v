import { Settings } from "lucide-react";
import Button from "../../ui/Button/Button.tsx";
type NavbarProps = {
  drawerOpen: boolean;
  onSettingsClick: () => void;
  onButtonsClick: () => void;
};

function Navbar({ drawerOpen, onButtonsClick }: NavbarProps) {
  return (
    <nav className="bg-background border-b border-surface ">
      <div className="flex justify-between px-8 h-16 items-center">
        <div className="text-primary">Logo</div>

        <div className="flex items-center gap-4">
          <Button text="Algorithms" onClick={onButtonsClick}></Button>
          <Button text="Data strunctures" onClick={onButtonsClick}></Button>

          <Settings />
          <span>{drawerOpen ? "Close Settings" : "Settings"} </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
