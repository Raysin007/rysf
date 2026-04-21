import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
// @ts-ignore
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, { y: -60, opacity: 0, duration: 0.7, ease: "power3.out" });
      gsap.from(".navbar__brand", { opacity: 0, x: -20, duration: 0.6, delay: 0.3, ease: "power3.out" });
      gsap.from(".navbar__links li", { opacity: 0, y: -10, duration: 0.4, stagger: 0.08, delay: 0.4, ease: "power3.out" });
    }, navRef);
    return () => ctx.revert();
  }, []);

  const links = ["About", "Courses", "Areas", "Impact", "Contact"];

  return (
    <nav ref={navRef} className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
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
