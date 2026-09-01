import { Settings } from "lucide-react";
import Button from "../../ui/Button/Button.tsx";
import { Link } from "react-router-dom";


type NavbarProps = {
  drawerOpen: boolean;
  onSettingsClick: () => void;
  onButtonsClick: () => void;
};

function Navbar({ drawerOpen, onButtonsClick, onSettingsClick }: NavbarProps) {
  return (
    <nav className="bg-background border-b border-surface ">
      <div className="flex justify-between px-8 h-16 items-center">
        <Link to="/">
          <div className="flex items-center gap-3">
          <img
            src="/algorithms-v.svg"
            alt="algorithms v"
            className="h-9 w-auto"
          />
        </div>
        </Link>

        <div className="flex items-center gap-4">
          <Button text="Data strunctures" onClick={onButtonsClick}></Button>
          <Button text="Algorithms" onClick={onButtonsClick}></Button>

          <button
            type="button"
            onClick={onSettingsClick}
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            aria-label={drawerOpen ? "Close Settings" : "Open Settings"}
          >
            <Settings className="h-5 w-5" />
            <span>{drawerOpen ? "Close Settings" : "Settings"}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
