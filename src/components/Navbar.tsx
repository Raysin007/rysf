import { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["About", "Courses", "Areas", "Impact", "Contact"];

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <a href="#hero" className="navbar__brand">
          <img
            src="/logo.png"
            alt="Rural Youth Skill Forum logo"
            className="navbar__logo"
          />
        </a>

        <ul
          className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}
        >
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
              >
                {l}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="navbar__cta"
              onClick={() => setMenuOpen(false)}
            >
              Join the Forum
            </a>
          </li>
        </ul>

        <button
          className="navbar__burger"
          onClick={() => setMenuOpen((m) => !m)}
          aria-label="Menu"
        >
          <span className={menuOpen ? "open" : ""}></span>
          <span className={menuOpen ? "open" : ""}></span>
          <span className={menuOpen ? "open" : ""}></span>
        </button>
      </div>
    </nav>
  );
}
