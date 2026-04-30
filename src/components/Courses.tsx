import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Track {
  id: string;
  titleKey: string;
  subtitleKey: string;
  color: string;
  foundationCount: number;
  advanceCount: number;
  foundationKeys: string[];
  advanceKeys: string[];
}

const tracks: Track[] = [
  {
    id: "agriculture",
    titleKey: "courses.tracks.agriculture.title",
    subtitleKey: "courses.tracks.agriculture.subtitle",
    color: "#5a7a1e",
    foundationCount: 3,
    advanceCount: 0,
    foundationKeys: [
      "courses.tracks.agriculture.c1",
      "courses.tracks.agriculture.c2",
      "courses.tracks.agriculture.c3",
    ],
    advanceKeys: [],
  },
  {
    id: "wellness",
    titleKey: "courses.tracks.wellness.title",
    subtitleKey: "courses.tracks.wellness.subtitle",
    color: "#7a8a2e",
    foundationCount: 3,
    advanceCount: 0,
    foundationKeys: [
      "courses.tracks.wellness.c1",
      "courses.tracks.wellness.c2",
      "courses.tracks.wellness.c3",
    ],
    advanceKeys: [],
  },
  {
    id: "data-tech",
    titleKey: "courses.tracks.data_tech.title",
    subtitleKey: "courses.tracks.data_tech.subtitle",
    color: "#6b7a2a",
    foundationCount: 4,
    advanceCount: 6,
    foundationKeys: [
      "courses.tracks.data_tech.c1",
      "courses.tracks.data_tech.c2",
      "courses.tracks.data_tech.c3",
      "courses.tracks.data_tech.c4",
    ],
    advanceKeys: [
      "courses.tracks.data_tech.a1",
      "courses.tracks.data_tech.a2",
      "courses.tracks.data_tech.a3",
      "courses.tracks.data_tech.a4",
      "courses.tracks.data_tech.a5",
      "courses.tracks.data_tech.a6",
    ],
  },
  {
    id: "design-media",
    titleKey: "courses.tracks.design_media.title",
    subtitleKey: "courses.tracks.design_media.subtitle",
    color: "#8aaa1e",
    foundationCount: 4,
    advanceCount: 6,
    foundationKeys: [
      "courses.tracks.design_media.c1",
      "courses.tracks.design_media.c2",
      "courses.tracks.design_media.c3",
      "courses.tracks.design_media.c4",
    ],
    advanceKeys: [
      "courses.tracks.design_media.a1",
      "courses.tracks.design_media.a2",
      "courses.tracks.design_media.a3",
      "courses.tracks.design_media.a4",
      "courses.tracks.design_media.a5",
      "courses.tracks.design_media.a6",
    ],
  },
];

export default function Courses() {
  const { t } = useTranslation();
  const [active, setActive] = useState<string>("data-tech");
  const sectionRef = useRef<HTMLElement>(null);

  const selected = tracks.find((t) => t.id === active)!;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
        defaults: { ease: "power3.out" },
      });
      tl.from(".courses-label", { y: 20, opacity: 0, duration: 0.5 })
        .from(".courses-title", { y: 30, opacity: 0, duration: 0.6 }, "-=0.2")
        .from(".courses-sub", { y: 20, opacity: 0, duration: 0.5 }, "-=0.3")
        .from(".courses-tab", { y: 20, opacity: 0, duration: 0.4, stagger: 0.1 }, "-=0.2")
        .from(".courses-panel", { y: 30, opacity: 0, duration: 0.6 }, "-=0.2");
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="courses" className="bg-cream dark:bg-black py-16 lg:py-24 px-[5vw]">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-14">
          <div className="courses-label text-[0.72rem] font-bold tracking-widest text-lime uppercase mb-4">{t("courses.label")}</div>
          <h2 className="courses-title font-display text-3xl sm:text-4xl lg:text-[2.75rem] text-olive font-semibold leading-tight mb-4">
            {t("courses.title")}
            <br />
            <em className="not-italic text-lime" dangerouslySetInnerHTML={{ __html: t("courses.title_em") }} />
          </h2>
          <p className="courses-sub text-base sm:text-lg font-light text-text-muted dark:text-white/70">
            {t("courses.sub")}
          </p>
        </div>

        <div className="courses-tabs flex gap-2 lg:gap-4 flex-wrap mb-8 border-b-[1.5px] border-border-subtle overflow-x-auto pb-0.5 lg:pb-0 scrollbar-hide">
          {tracks.map((t_item) => (
            <button
              key={t_item.id}
              className={`courses-tab relative px-6 py-3 font-body font-semibold text-sm tracking-wide transition-all whitespace-nowrap rounded-t-lg -bottom-[1.5px] ${
                active === t_item.id
                ? "text-lime bg-white dark:bg-zinc-900 shadow-[0_-1px_0_var(--border-subtle)] after:scale-x-100"
                : "text-text-muted hover:text-olive hover:bg-cream-dark dark:hover:bg-zinc-800 after:scale-x-0"
              } after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2.5px] after:bg-lime after:transition-transform after:duration-300`}
              onClick={() => setActive(t_item.id)}
            >
              {t(t_item.titleKey)}
            </button>
          ))}
        </div>

        <div className="courses-panel animate-fade-up bg-white dark:bg-zinc-900/50 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl p-6 lg:p-12 border border-border-subtle shadow-sm-custom">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-4 mb-10">
            <div>
              <h3 className="font-display text-2xl lg:text-[1.65rem] font-semibold text-lime dark:text-lime-light mb-1.5">{t(selected.titleKey)}</h3>
              <p className="text-sm lg:text-[0.88rem] text-text-muted dark:text-white/60">{t(selected.subtitleKey)}</p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <span className="text-[0.72rem] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full bg-lime/10 dark:bg-lime/5 text-olive border border-lime/30">
                {selected.foundationCount} {t("courses.foundation")}
              </span>
              {selected.advanceCount > 0 && (
                <span className="text-[0.72rem] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full bg-lime text-white">
                  {selected.advanceCount} {t("courses.advance")}
                </span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="flex flex-col gap-5">
              <div className="text-[0.68rem] font-bold tracking-widest text-lime uppercase pb-3 mb-5 border-b-2 border-border-subtle">{t("courses.foundation_label")}</div>
              <ul className="list-none flex flex-col gap-3.5">
                {selected.foundationKeys.map((k) => (
                  <li key={k} className="flex items-center gap-3.5 text-sm lg:text-[0.95rem] text-text-mid dark:text-white/80 font-normal group transition-colors hover:text-olive">
                    <span className="w-[9px] h-[9px] rounded-full bg-lime flex-shrink-0" />
                    {t(k)}
                  </li>
                ))}
              </ul>
            </div>

            {selected.advanceKeys.length > 0 && (
              <div className="flex flex-col gap-5">
                <div className="text-[0.68rem] font-bold tracking-widest text-lime uppercase pb-3 mb-5 border-b-2 border-border-subtle">{t("courses.advance_label")}</div>
                <ul className="list-none flex flex-col gap-3.5">
                  {selected.advanceKeys.map((k) => (
                    <li key={k} className="flex items-center gap-3.5 text-sm lg:text-[0.95rem] text-text-mid dark:text-white/80 font-normal group transition-colors hover:text-olive">
                      <span className="w-[9px] h-[9px] rounded-full bg-lime-bright flex-shrink-0" />
                      {t(k)}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
