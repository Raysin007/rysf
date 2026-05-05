import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import gsap from "gsap";

export default function Hero() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-eyebrow", { y: 20, opacity: 0, duration: 0.6, clearProps: "all" })
        .from(".hero-title", { y: 40, opacity: 0, duration: 0.7, clearProps: "all" }, "-=0.3")
        .from(".hero-tagline", { y: 30, opacity: 0, duration: 0.6, clearProps: "all" }, "-=0.4")
        .from(".hero-btn", { y: 20, opacity: 0, duration: 0.5, stagger: 0.15, clearProps: "all" }, "-=0.3")
        .from(".hero-badge", { y: 20, opacity: 0, duration: 0.5, stagger: 0.12, clearProps: "all" }, "-=0.3")
        .from(".hero-visual", { x: 40, opacity: 0, duration: 0.8, clearProps: "all" }, "-=0.8");

      gsap.to(".hero-col-left", {
        y: -12,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-col-right", {
        y: 12,
        duration: 3.5,
        delay: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen overflow-hidden"
    >
      {/* ─── BACKGROUND VIDEO (desktop only) ─── */}
      <div className="absolute inset-0 hidden lg:block z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/videos/hero-poster.jpg"
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        {/* Dark gradient overlay — left side stronger so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
        {/* Bottom fade for smooth section transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream/20 dark:from-black to-transparent" />
      </div>

      {/* ─── DECORATIVE LEAVES (mobile/tablet — no video bg) ─── */}
      <div className="absolute inset-0 pointer-events-none z-0 lg:hidden" aria-hidden="true">
        {[
          "w-[180px] h-[180px] top-[10%] -left-[5%] animate-[leafSway_6s_ease-in-out_infinite]",
          "w-[120px] h-[120px] top-[25%] left-[5%] animate-[leafSway_8s_ease-in-out_infinite_reverse]",
          "w-[90px] h-[90px] top-[60%] left-[2%] animate-[leafSway_7s_ease-in-out_infinite]",
          "w-[240px] h-[240px] -top-[5%] -right-[3%] animate-[leafSway_9s_ease-in-out_infinite_reverse]",
          "w-[100px] h-[100px] top-[40%] right-[8%] animate-[leafSway_5s_ease-in-out_infinite]",
          "w-[60px] h-[60px] bottom-[15%] right-[20%] animate-[leafSway_7s_ease-in-out_infinite_reverse]",
          "w-[150px] h-[150px] bottom-[5%] left-[30%] opacity-[0.03] animate-[leafSway_10s_ease-in-out_infinite]",
          "w-[80px] h-[80px] top-[50%] left-[40%] animate-[leafSway_6s_ease-in-out_infinite_reverse]",
          "w-[200px] h-[200px] -bottom-[5%] -right-[5%] opacity-[0.03] animate-[leafSway_11s_ease-in-out_infinite]",
          "w-[70px] h-[70px] top-[15%] right-[35%] animate-[leafSway_8s_ease-in-out_infinite_reverse]",
          "w-[110px] h-[110px] bottom-[30%] left-[15%] opacity-[0.04] animate-[leafSway_9s_ease-in-out_infinite]",
          "w-[50px] h-[50px] top-[70%] right-[45%] animate-[leafSway_5s_ease-in-out_infinite_reverse]",
        ].map((style, i) => (
          <div
            key={i}
            className={`absolute rounded-[50%_0_50%_0] bg-lime opacity-[0.02] dark:opacity-[0.05] ${style}`}
          />
        ))}
      </div>

      {/* ─── MAIN CONTENT GRID ─── */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16 pt-28 lg:pt-36 pb-12 lg:pb-20 px-[5vw] max-w-[1280px] mx-auto min-h-screen">

        {/* LEFT — text content */}
        <div className="relative z-10">
          <div className="hero-eyebrow mb-6">
            <div className="flex gap-4 mb-6">
              <span className="inline-flex items-center justify-center min-w-[110px] h-10 text-[0.8rem] font-bold tracking-widest uppercase text-lime border-[1.5px] border-lime rounded-lg px-5 transition-all hover:bg-lime hover:text-white hover:-translate-y-0.5 hover:shadow-lime cursor-default lg:text-white lg:border-white/60 lg:hover:border-lime">
                {t("hero.mirik")}
              </span>
              <span className="inline-flex items-center justify-center min-w-[110px] h-10 text-[0.8rem] font-bold tracking-widest uppercase text-lime border-[1.5px] border-lime rounded-lg px-5 transition-all hover:bg-lime hover:text-white hover:-translate-y-0.5 hover:shadow-lime cursor-default lg:text-white lg:border-white/60 lg:hover:border-lime">
                {t("hero.plassey")}
              </span>
            </div>
          </div>

          <h1 className="hero-title font-display font-bold text-4xl sm:text-5xl lg:text-[70px] text-olive dark:text-lime-light lg:text-white leading-[1.2] lg:leading-[1.3] mb-6">
            {t("hero.title")}
            <br />
            <em className="font-display not-italic text-lime lg:text-lime-light">
              {t("hero.skill_forum")}
            </em>
          </h1>

          <p className="hero-tagline text-base sm:text-lg lg:text-xl font-light text-text-mid dark:text-white/80 lg:text-white/90 leading-relaxed mb-10 max-w-xl">
            {t("hero.tagline")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#about"
              className="hero-btn group relative inline-flex items-center justify-center px-9 py-3.5 rounded-full bg-lime text-white font-semibold text-sm tracking-wide shadow-lime transition-all hover:bg-olive hover:shadow-lg-custom hover:-translate-y-0.5 hover:pr-12"
            >
              {t("hero.explore")}
              <span className="absolute right-5 opacity-0 -translate-x-2.5 transition-all group-hover:opacity-100 group-hover:translate-x-0 font-serif text-lg">
                →
              </span>
            </a>
            <Link
              to="/courses"
              className="hero-btn group relative inline-flex items-center justify-center px-9 py-3.5 rounded-full border-2 border-olive dark:border-lime-light lg:border-white text-olive dark:text-lime-light lg:text-white font-semibold text-sm tracking-wide transition-all hover:bg-lime hover:border-lime hover:text-white hover:-translate-y-0.5 hover:pr-12"
            >
              {t("hero.view_courses")}
              <span className="absolute right-5 opacity-0 -translate-x-2.5 transition-all group-hover:opacity-100 group-hover:translate-x-0 font-serif text-lg">
                →
              </span>
            </Link>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 sm:gap-8 flex-wrap">
            <div className="hero-badge flex flex-col gap-0.5">
              <span className="font-display text-3xl text-olive dark:text-lime-light lg:text-white leading-none">
                30+
              </span>
              <span className="text-[0.72rem] font-medium tracking-widest uppercase text-text-muted lg:text-white/60">
                {t("hero.courses")}
              </span>
            </div>
            <div className="w-px h-10 bg-sand/40 lg:bg-white/20" />
            <div className="hero-badge flex flex-col gap-0.5">
              <span className="font-display text-3xl text-olive dark:text-lime-light lg:text-white leading-none">
                4
              </span>
              <span className="text-[0.72rem] font-medium tracking-widest uppercase text-text-muted lg:text-white/60">
                {t("hero.disciplines")}
              </span>
            </div>
            <div className="w-px h-10 bg-sand/40 lg:bg-white/20" />
            <div className="hero-badge flex flex-col gap-0.5">
              <span className="font-display text-3xl text-olive dark:text-lime-light lg:text-white leading-none">
                2
              </span>
              <span className="text-[0.72rem] font-medium tracking-widest uppercase text-text-muted lg:text-white/60">
                {t("hero.pilot_regions")}
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT — photo grid (mobile & tablet only; hidden on desktop since video fills bg) */}
        <div className="hero-visual hidden md:flex lg:hidden relative z-10 justify-center h-[540px] py-4 overflow-hidden">
          <div className="grid grid-cols-[1.2fr_1fr] gap-3 w-full h-full">
            <div className="hero-col-left flex flex-col gap-3">
              <div className="flex-1 overflow-hidden rounded-2xl relative group">
                <img
                  src="/hero2.jpeg"
                  alt="Rural youth learning"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex-1 overflow-hidden rounded-2xl relative group">
                <img
                  src="/hero1.jpg"
                  alt="Youth community"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="hero-col-right flex flex-col gap-3">
              <div className="flex-1 h-full overflow-hidden rounded-2xl relative group">
                <img
                  src="/hero3.jpg"
                  alt="Aspiring student"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

     
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-[0.7rem] tracking-widest uppercase text-white/50 z-10">
        <span>{t("hero.scroll")}</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent animate-float" />
      </div>
    </section>
  );
}