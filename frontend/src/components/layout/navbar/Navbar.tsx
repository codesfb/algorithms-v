import { Link, NavLink } from "react-router-dom";
import LogoBequer from "@/components/common/LogoBequer";
function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-surface bg-background/80">
      <div className="flex h-14 items-center justify-between px-3 sm:px-4">
        <Link to="/" className="transition-transform duration-200 hover:scale-[1.02]" aria-label="Algorithms V home">
          <LogoBequer width={186} height={36} aria-hidden="true" />
        </Link>
        <div className="flex items-center gap-5 sm:gap-7">
          <NavLink to="/data-structures" className={({ isActive }) => `nav-link ${isActive ? "nav-link-active" : ""}`}>Data structures</NavLink>
          <NavLink to="/algorithms" className={({ isActive }) => `nav-link ${isActive ? "nav-link-active" : ""}`}>Algorithms</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
