import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="border-b border-surface bg-background">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6">
        <Link to="/" className="transition-transform duration-200 hover:scale-[1.02]" aria-label="Algorithms V home">
          <img src="/algorithms-v.svg" alt="algorithms v" className="h-9 w-auto" />
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
