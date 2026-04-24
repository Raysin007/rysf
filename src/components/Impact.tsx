import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Impact.css";

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
      tl.from(".impact__label", { y: 20, opacity: 0, duration: 0.5 })
        .from(".impact__title", { y: 30, opacity: 0, duration: 0.6 }, "-=0.2")
        .from(".impact__desc", { y: 20, opacity: 0, duration: 0.5 }, "-=0.3")
        .from(".impact__stat", { y: 30, opacity: 0, duration: 0.5, stagger: 0.15 }, "-=0.2")
        .from(".impact__quote", { y: 30, opacity: 0, duration: 0.6 }, "-=0.2");
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="impact" id="impact" ref={sectionRef}>
      <div className="impact__inner">
        <div className="impact__label">{t("impact.label")}</div>

        <div className="impact__top">
          <h2 className="impact__title">
            {t("impact.title")}
            <br />
            <em dangerouslySetInnerHTML={{ __html: t("impact.title_em") }} />
          </h2>
          <p className="impact__desc">
            {t("impact.desc")}
          </p>
        </div>

        <div className="impact__stats">
          {stats.map((s) => (
            <div key={s.label} className="impact__stat">
              <span className="impact__stat-num">{s.num}</span>
              <span className="impact__stat-label">{s.label}</span>
              <p className="impact__stat-desc">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="impact__quote">
          <div className="impact__quote-mark">"</div>
          <blockquote>
            {t("impact.quote")}
          </blockquote>
          <cite>{t("impact.cite")}</cite>
        </div>
      </div>
    </section>
  );
}
