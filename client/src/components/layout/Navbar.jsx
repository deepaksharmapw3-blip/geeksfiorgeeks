import { NavLink } from "react-router-dom";

const links = ["about", "team", "events", "resources", "gallery", "blogs", "contact"];

export default function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="brand">
        <span className="brand-mark">G</span>
        <span>GFG Campus Body GCECT</span>
      </NavLink>

      <nav className="nav-links">
        <NavLink to="/">Home</NavLink>
        {links.map((link) => (
          <NavLink key={link} to={`/${link}`}>
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
