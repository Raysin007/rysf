import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Impact() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    {
      num: "500+",
      label: t("impact.stat1_label"),
      desc: t("impact.stat1_desc"),
    },
    {
      num: "26+",
      label: t("impact.stat2_label"),
      desc: t("impact.stat2_desc"),
    },
    {
      num: "2",
      label: t("impact.stat3_label"),
      desc: t("impact.stat3_desc"),
    },
    {
      num: "3",
      label: t("impact.stat4_label"),
      desc: t("impact.stat4_desc"),
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
        defaults: { ease: "power3.out" },
      });
      tl.from(".impact-label", { y: 20, opacity: 0, duration: 0.5 })
        .from(".impact-title", { y: 30, opacity: 0, duration: 0.6 }, "-=0.2")
        .from(".impact-desc", { y: 20, opacity: 0, duration: 0.5 }, "-=0.3")
        .from(".impact-stat", { y: 30, opacity: 0, duration: 0.5, stagger: 0.15 }, "-=0.2")
        .from(".impact-quote", { y: 30, opacity: 0, duration: 0.6 }, "-=0.2");
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="impact" className="bg-cream dark:bg-black py-16 lg:py-24 px-[5vw] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="impact-label text-[0.72rem] font-bold tracking-widest text-lime uppercase mb-8">{t("impact.label")}</div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-end mb-16">
          <h2 className="impact-title font-display text-3xl sm:text-4xl lg:text-[3rem] font-semibold text-olive leading-tight">
            {t("impact.title")}
            <br />
            <em className="not-italic text-lime" dangerouslySetInnerHTML={{ __html: t("impact.title_em") }} />
          </h2>
          <p className="impact-desc text-base lg:text-lg font-light text-text-muted dark:text-white/70 leading-relaxed">
            {t("impact.desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((s) => (
            <div key={s.label} className="impact-stat group relative bg-white dark:bg-zinc-900/50 border border-border-subtle rounded-2xl p-8 flex flex-col gap-1 transition-all duration-300 hover:border-lime hover:-translate-y-1 hover:shadow-md-custom overflow-hidden">
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-lime scale-x-0 origin-left transition-transform duration-350 group-hover:scale-x-100" />
              <span className="font-display text-4xl font-semibold text-lime leading-none">{s.num}</span>
              <span className="text-[0.8rem] font-bold tracking-wider uppercase text-olive">{s.label}</span>
              <p className="text-[0.8rem] text-text-muted leading-relaxed mt-2">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="impact-quote relative bg-olive dark:bg-zinc-900 rounded-[20px] p-8 lg:p-14 overflow-hidden z-0">
          {/* Decorative circle */}
          <div className="absolute bottom-[-40px] right-[-40px] w-[200px] h-[200px] rounded-full bg-white/[0.02] pointer-events-none z-0" />

          <div className="font-display text-7xl lg:text-[6rem] text-lime leading-[0.5] mb-6 opacity-70 relative z-10">"</div>
          <blockquote className="font-display text-lg sm:text-xl lg:text-3xl italic text-white leading-relaxed mb-5 max-w-[800px] relative z-10">
            {t("impact.quote")}
          </blockquote>
          <cite className="not-italic text-[0.8rem] text-white/55 tracking-wider relative z-10 uppercase font-medium">{t("impact.cite")}</cite>
        </div>
      </div>
    </section>
  );
}
