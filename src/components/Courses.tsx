import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Courses.css";

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
      tl.from(".courses__label", { y: 20, opacity: 0, duration: 0.5 })
        .from(".courses__title", { y: 30, opacity: 0, duration: 0.6 }, "-=0.2")
        .from(".courses__sub", { y: 20, opacity: 0, duration: 0.5 }, "-=0.3")
        .from(".courses__tab", { y: 20, opacity: 0, duration: 0.4, stagger: 0.1 }, "-=0.2")
        .from(".courses__panel", { y: 30, opacity: 0, duration: 0.6 }, "-=0.2");
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="courses" id="courses" ref={sectionRef}>
      <div className="courses__inner">
        <div className="courses__header">
          <div className="courses__label">{t("courses.label")}</div>
          <h2 className="courses__title">
            {t("courses.title")}
            <br />
            <em dangerouslySetInnerHTML={{ __html: t("courses.title_em") }} />
          </h2>
          <p className="courses__sub">
            {t("courses.sub")}
          </p>
        </div>

        <div className="courses__tabs">
          {tracks.map((t_item) => (
            <button
              key={t_item.id}
              className={`courses__tab ${active === t_item.id ? "courses__tab--active" : ""}`}
              onClick={() => setActive(t_item.id)}
            >
              {t(t_item.titleKey)}
            </button>
          ))}
        </div>

        <div className="courses__panel">
          <div className="courses__panel-header">
            <div>
              <h3 className="courses__panel-title">{t(selected.titleKey)}</h3>
              <p className="courses__panel-sub">{t(selected.subtitleKey)}</p>
            </div>
            <div className="courses__counts">
              <span className="courses__count-badge courses__count-badge--foundation">
                {selected.foundationCount} {t("courses.foundation")}
              </span>
              {selected.advanceCount > 0 && (
                <span className="courses__count-badge courses__count-badge--advance">
                  {selected.advanceCount} {t("courses.advance")}
                </span>
              )}
            </div>
          </div>

          <div className="courses__lists">
            <div className="courses__list-col">
              <div className="courses__list-label">{t("courses.foundation_label")}</div>
              <ul className="courses__list">
                {selected.foundationKeys.map((k) => (
                  <li key={k} className="courses__item">
                    <span className="courses__dot" />
                    {t(k)}
                  </li>
                ))}
              </ul>
            </div>

            {selected.advanceKeys.length > 0 && (
              <div className="courses__list-col">
                <div className="courses__list-label">{t("courses.advance_label")}</div>
                <ul className="courses__list">
                  {selected.advanceKeys.map((k) => (
                    <li key={k} className="courses__item">
                      <span className="courses__dot courses__dot--advance" />
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
