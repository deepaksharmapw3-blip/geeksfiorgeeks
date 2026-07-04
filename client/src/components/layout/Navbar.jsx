import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header
      style={{
        background: "#0f172a",
        color: "white",
        padding: "18px 40px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <h2>TechSphere</h2>

        <nav
          style={{
            display: "flex",
            gap: "25px",
          }}
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/events">Events</NavLink>
          <NavLink to="/resources">Resources</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/blogs">Blogs</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}