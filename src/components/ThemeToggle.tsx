import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark" ||
             (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
    return false;
  });

  const toggleRef = useRef<HTMLButtonElement>(null);
  const sunRef = useRef<SVGSVGElement>(null);
  const moonRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (isDark) {
        gsap.to(sunRef.current, { scale: 0, rotation: 90, opacity: 0, duration: 0.4, ease: "back.in" });
        gsap.fromTo(moonRef.current,
          { scale: 0, rotation: -90, opacity: 0 },
          { scale: 1, rotation: 0, opacity: 1, duration: 0.5, ease: "back.out", delay: 0.1 }
        );
      } else {
        gsap.to(moonRef.current, { scale: 0, rotation: -90, opacity: 0, duration: 0.4, ease: "back.in" });
        gsap.fromTo(sunRef.current,
          { scale: 0, rotation: 90, opacity: 0 },
          { scale: 1, rotation: 0, opacity: 1, duration: 0.5, ease: "back.out", delay: 0.1 }
        );
      }
    }, toggleRef);
    return () => ctx.revert();
  }, [isDark]);

  return (
    <button
      ref={toggleRef}
      className="relative flex items-center justify-center w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-lime/10 dark:bg-lime/5 border-[1.5px] border-lime text-lime cursor-pointer overflow-hidden transition-all hover:bg-lime hover:text-white hover:shadow-lime hover:-translate-y-0.5"
      onClick={() => setIsDark(!isDark)}
      aria-label="Toggle Dark Mode"
    >
      <div className="relative w-5 h-5 lg:w-[22px] lg:h-[22px] flex items-center justify-center">
        <svg
          ref={sunRef}
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
        <svg
          ref={moonRef}
          className="absolute inset-0 w-full h-full opacity-0 scale-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </div>
    </button>
  );
}
