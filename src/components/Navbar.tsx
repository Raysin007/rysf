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

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setMenuOpen(false);
  };

  const isHome = location.pathname === "/";

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-6 lg:px-10 py-6 lg:py-7 ${
        scrolled || !isHome
          ? "bg-cream/95 dark:bg-zinc-950/95 backdrop-blur-md shadow-md-custom"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto flex items-center justify-between lg:justify-center gap-8 relative">
        {/* Brand */}
        <Link to="/" className="navbar-brand flex items-center gap-3 lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2">
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
          className={`absolute lg:static top-full left-0 right-0 flex flex-col lg:flex-row items-center gap-8 list-none bg-olive dark:bg-zinc-900 lg:bg-transparent lg:dark:bg-transparent backdrop-blur-lg lg:backdrop-blur-0 transition-all duration-350 ease-in-out z-[99] border-b border-border-subtle lg:border-none overflow-hidden ${
            menuOpen ? "max-h-[600px] py-6 px-6 gap-2" : "max-h-0 py-0 lg:max-h-none lg:p-0"
          }`}
        >
          {links.map((l) => (
            <li key={l.id} className="navbar-link-item w-full lg:w-auto">
              {l.path.startsWith("/#") ? (
                <a
                  href={l.path}
                  onClick={() => setMenuOpen(false)}
                  className={`relative block w-full lg:w-auto py-3 lg:py-0 text-base lg:text-sm font-medium tracking-wider transition-colors after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-[1.5px] after:bg-lime after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100 ${
                    scrolled || !isHome ? "text-text-dark dark:text-white" : "text-white dark:text-white"
                  } hover:text-lime dark:hover:text-lime`}
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  to={l.path}
                  onClick={() => setMenuOpen(false)}
                  className={`relative block w-full lg:w-auto py-3 lg:py-0 text-base lg:text-sm font-medium tracking-wider transition-colors after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-[1.5px] after:bg-lime after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100 ${
                    scrolled || !isHome ? "text-text-dark dark:text-white" : "text-white dark:text-white"
                  } hover:text-lime dark:hover:text-lime`}
                >
                  {l.label}
                </Link>
              )}
            </li>
          ))}

          {/* Mobile Actions */}
          <li className="flex lg:hidden flex-col gap-4 w-full mt-4 pt-6 border-t border-border-subtle">
            <div className="w-full relative">
              <select
                className="w-full h-12 flex items-center justify-center px-5 pr-10 rounded-xl font-bold text-sm tracking-wide bg-lime border-[1.5px] border-lime text-white cursor-pointer outline-none appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22white%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_1.25rem_center] transition-all hover:bg-olive hover:border-olive"
                onChange={(e) => changeLanguage(e.target.value)}
                value={i18n.language}
              >
                <option value="en">English</option>
                <option value="hi">हिन्दी</option>
                <option value="bn">বাংলা</option>
                <option value="ne">नेपाली</option>
              </select>
            </div>
            <a href="#login" className="w-full h-12 flex items-center justify-center px-5 rounded-xl font-bold text-sm tracking-wide bg-lime border-[1.5px] border-lime text-white transition-all hover:bg-olive hover:border-olive">
              {t("nav.login")}
            </a>
          </li>
        </ul>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-5 absolute right-0 top-1/2 -translate-y-1/2">
          <div className="relative">
            <select
              className="h-9 min-w-[7.5rem] inline-flex items-center justify-center px-4 pr-9 rounded-lg font-semibold text-[0.82rem] tracking-wide bg-lime border-[1.5px] border-lime text-white cursor-pointer outline-none appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22white%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_0.8rem_center] transition-all hover:bg-olive hover:border-olive hover:-translate-y-px"
              onChange={(e) => changeLanguage(e.target.value)}
              value={i18n.language}
            >
              <option value="en">English</option>
              <option value="hi">हिन्दी</option>
              <option value="bn">বাংলা</option>
              <option value="ne">नेपाली</option>
            </select>
          </div>
          <a href="#login" className="h-9 min-w-[7.5rem] inline-flex items-center justify-center px-4 rounded-lg font-semibold text-[0.82rem] tracking-wide bg-lime border-[1.5px] border-lime text-white transition-all hover:bg-olive hover:border-olive hover:-translate-y-px whitespace-nowrap">
            {t("nav.login")}
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile Controls (Toggle + Burger) */}
        <div className="flex lg:hidden items-center gap-5">
          <ThemeToggle />
          <button
            className="flex flex-col gap-[5px] p-1 group"
            onClick={() => setMenuOpen((m) => !m)}
            aria-label="Menu"
          >
            <span className={`block w-6 h-0.5 ${scrolled || !isHome ? "bg-olive" : "bg-white"} dark:bg-white rounded-sm transition-transform duration-250 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}></span>
            <span className={`block w-6 h-0.5 ${scrolled || !isHome ? "bg-olive" : "bg-white"} dark:bg-white rounded-sm transition-opacity duration-250 ${menuOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-6 h-0.5 ${scrolled || !isHome ? "bg-olive" : "bg-white"} dark:bg-white rounded-sm transition-transform duration-250 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
