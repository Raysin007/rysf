import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
// @ts-ignore
import './Navbar.css';

export default function Navbar() {
  const { t, i18n } = useTranslation();
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

  const links = [
    { id: "about", label: t("nav.about") },
    { id: "courses", label: t("nav.courses") },
    { id: "centers", label: t("nav.centers") },
    { id: "impact", label: t("nav.impact") }
  ];

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setMenuOpen(false);
  };

  return (
    <nav ref={navRef} className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <a href="#hero" className="navbar__brand">
          <img
            src="/single.png"
            alt={t("nav.logo_alt")}
            className="navbar__logo"
          />
          <div className="navbar__brand-text">
            <span className="navbar__brand-title">{t("nav.name_part1")}</span>
            <span className="navbar__brand-title">{t("nav.name_part2")}</span>
          </div>
        </a>

        <ul
          className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}
        >
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="navbar__actions-mobile">
            <div className="navbar__lang">
              <select
                className="navbar__lang-selector"
                onChange={(e) => changeLanguage(e.target.value)}
                value={i18n.language}
              >
                <option value="en">English</option>
                <option value="hi">हिन्दी</option>
                <option value="bn">বাংলা</option>
                <option value="ne">नेपाली</option>
              </select>
            </div>
            <a href="#login" className="navbar__cta">
              {t("nav.login")}
            </a>
          </li>
        </ul>

        <div className="navbar__actions-desktop">
          <div className="navbar__lang">
            <select
              className="navbar__lang-selector"
              onChange={(e) => changeLanguage(e.target.value)}
              value={i18n.language}
            >
              <option value="en">English</option>
              <option value="hi">हिन्दी</option>
              <option value="bn">বাংলা</option>
              <option value="ne">नेपाली</option>
            </select>
          </div>
          <a href="#login" className="navbar__cta">
            {t("nav.login")}
          </a>
        </div>

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
