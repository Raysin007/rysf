import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, { y: -60, opacity: 0, duration: 0.7, ease: "power3.out", clearProps: "all" });
      gsap.from(".navbar-brand", { opacity: 0, x: -20, duration: 0.6, delay: 0.3, ease: "power3.out", clearProps: "all" });
      gsap.from(".navbar-link-item", { opacity: 0, y: -10, duration: 0.4, stagger: 0.08, delay: 0.4, ease: "power3.out", clearProps: "all" });
    }, navRef);
    return () => ctx.revert();
  }, []);

  const links = [
    { id: "about", label: t("nav.about"), path: "/#about" },
    { id: "courses", label: t("nav.courses"), path: "/courses" },
    { id: "centers", label: t("nav.centers"), path: "/#centers" },
    { id: "impact", label: t("nav.impact"), path: "/#impact" }
  ];

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setMenuOpen(false);
  };

  const isHome = location.pathname === "/";

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-[5000] transition-all duration-300 px-6 lg:px-10 py-6 lg:py-7 ${
        (scrolled || !isHome) && !menuOpen
          ? "bg-cream dark:bg-zinc-950/95 dark:backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto flex lg:grid lg:grid-cols-[1fr_auto_1fr] items-center justify-between lg:gap-12 relative">
        {/* Brand */}
        <Link to="/" className={`navbar-brand flex items-center gap-3 relative z-[5020] justify-self-start transition-opacity duration-300 ${menuOpen ? "opacity-0 pointer-events-none lg:opacity-100 lg:pointer-events-auto" : "opacity-100"}`}>
          <img
            src="/single.png"
            alt={t("nav.logo_alt")}
            className="block h-10 lg:h-12 w-auto object-contain"
          />
          <div className="flex flex-col leading-[1.1]">
            <span className="font-['Roboto_Slab'] font-bold text-lg lg:text-2xl tracking-wide text-lime dark:text-lime-light uppercase">{t("nav.name_part1")}</span>
            <span className="font-['Roboto_Slab'] font-bold text-lg lg:text-2xl tracking-wide text-lime dark:text-lime-light uppercase">{t("nav.name_part2")}</span>
          </div>
        </Link>

        {/* Links & Actions (Desktop and Mobile Menu) */}
        <ul
          className={`fixed lg:static inset-0 flex flex-col lg:flex-row items-center justify-center lg:gap-[30px] gap-8 list-none bg-olive dark:bg-black lg:bg-transparent lg:dark:bg-transparent transition-all duration-500 ease-in-out z-[5010] lg:border-none overflow-y-auto ${
            menuOpen
              ? "opacity-100 pointer-events-auto translate-y-0"
              : "opacity-0 pointer-events-none -translate-y-full lg:opacity-100 lg:pointer-events-auto lg:translate-y-0"
          }`}
        >
          {links.map((l) => (
            <li key={l.id} className="navbar-link-item w-full lg:w-auto text-center lg:text-left px-10 lg:px-0">
              {l.path.startsWith("/#") ? (
                <a
                  href={l.path}
                  onClick={() => setMenuOpen(false)}
                  className={`relative block w-full lg:w-auto py-4 lg:py-0 text-3xl lg:text-sm font-medium tracking-wider transition-colors after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-[1.5px] after:bg-lime after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100 ${
                    scrolled || !isHome ? "text-white lg:text-text-dark dark:text-white" : "text-white lg:text-white dark:text-white"
                  } hover:text-lime dark:hover:text-lime`}
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  to={l.path}
                  onClick={() => setMenuOpen(false)}
                  className={`relative block w-full lg:w-auto py-4 lg:py-0 text-3xl lg:text-sm font-medium tracking-wider transition-colors after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-[1.5px] after:bg-lime after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100 ${
                    scrolled || !isHome ? "text-white lg:text-text-dark dark:text-white" : "text-white lg:text-white dark:text-white"
                  } hover:text-lime dark:hover:text-lime`}
                >
                  {l.label}
                </Link>
              )}
            </li>
          ))}

          {/* Mobile Actions */}
          <li className="flex lg:hidden flex-col gap-6 w-full pt-8 px-10">
            <div className="flex flex-col gap-4">
              <Link
                to="/donate"
                onClick={() => setMenuOpen(false)}
                className="w-full h-16 flex items-center justify-center px-6 rounded-xl font-bold text-lg tracking-wide bg-lime border-2 border-lime text-white transition-all hover:bg-lime-bright hover:border-lime-bright shadow-lg shadow-lime/20"
              >
                {t("nav.donate")}
              </Link>
            </div>
          </li>
        </ul>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-1.5 relative z-[5020] justify-self-end">
          <div className="relative group flex items-center">
            <select
              className={`h-9 min-w-[3.2rem] inline-flex items-center justify-center pr-4 bg-transparent border-none font-bold text-[0.75rem] tracking-[0.15em] uppercase cursor-pointer outline-none appearance-none transition-all hover:text-lime ${
                scrolled || !isHome ? "text-text-dark dark:text-white" : "text-white dark:text-white"
              }`}
              onChange={(e) => changeLanguage(e.target.value)}
              value={i18n.language}
            >
              <option value="en" className="text-black bg-white">EN</option>
              <option value="hi" className="text-black bg-white">HI</option>
              <option value="bn" className="text-black bg-white">BN</option>
              <option value="ne" className="text-black bg-white">NE</option>
            </select>
            <svg
              className={`absolute right-0 w-2.5 h-2.5 pointer-events-none transition-colors group-hover:text-lime ${
                scrolled || !isHome ? "text-text-muted dark:text-white/60" : "text-white/60"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>

          <div className="h-5 w-px bg-text-dark/20 dark:bg-white/20 mx-1" />

          <a href="/#contact" className="h-9 min-w-[7.5rem] inline-flex items-center justify-center px-4 rounded-lg font-semibold text-[0.82rem] tracking-wide bg-transparent border-[1.5px] border-lime text-lime transition-all hover:bg-lime hover:text-white hover:-translate-y-px whitespace-nowrap">
            {t("nav.login")}
          </a>
          <Link
            to="/donate"
            className="h-9 min-w-[7.5rem] inline-flex items-center justify-center px-4 rounded-lg font-semibold text-[0.82rem] tracking-wide bg-lime border-[1.5px] border-lime text-white transition-all hover:bg-olive hover:border-olive hover:-translate-y-px whitespace-nowrap"
          >
            {t("nav.donate")}
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile Controls (Toggle + Burger) */}
        <div className="flex lg:hidden items-center gap-5 relative z-[5020]">
          <div className={`transition-opacity duration-300 ${menuOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
            <ThemeToggle />
          </div>
          <button
            className="flex flex-col gap-[5px] p-1 group"
            onClick={() => setMenuOpen((m) => !m)}
            aria-label="Menu"
          >
            <span className={`block w-6 h-0.5 ${scrolled || !isHome || menuOpen ? "bg-white" : "bg-olive"} dark:bg-white rounded-sm transition-all duration-300 ${menuOpen ? "translate-y-[7px] rotate-45 bg-white" : ""}`}></span>
            <span className={`block w-6 h-0.5 ${scrolled || !isHome || menuOpen ? "bg-white" : "bg-olive"} dark:bg-white rounded-sm transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-6 h-0.5 ${scrolled || !isHome || menuOpen ? "bg-white" : "bg-olive"} dark:bg-white rounded-sm transition-all duration-300 ${menuOpen ? "-translate-y-[7px] -rotate-45 bg-white" : ""}`}></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
