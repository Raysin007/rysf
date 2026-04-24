import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
        defaults: { ease: "power3.out" },
      });
      tl.from(".about__label", { y: 20, opacity: 0, duration: 0.5 })
        .from(".about__lead", { y: 30, opacity: 0, duration: 0.6 }, "-=0.2")
        .from(".about__accent", { y: 20, opacity: 0, duration: 0.6 }, "-=0.3")
        .from(".about__pillar", { y: 30, opacity: 0, duration: 0.5, stagger: 0.15 }, "-=0.3")
        .from(".about__photo", { scale: 0.95, opacity: 0, duration: 0.7, stagger: 0.2 }, "-=0.3");
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const pillars = [
    {
      num: "01",
      title: t("about.pillar1_title"),
      desc: t("about.pillar1_desc"),
    },
    {
      num: "02",
      title: t("about.pillar2_title"),
      desc: t("about.pillar2_desc"),
    },
    {
      num: "03",
      title: t("about.pillar3_title"),
      desc: t("about.pillar3_desc"),
    },
  ];

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="about__inner">
        <div className="about__label">{t("about.label")}</div>

        <div className="about__grid">
          <div className="about__text-col">
            <p className="about__lead">
              {t("about.lead")}
            </p>
            <p className="about__accent">
              {t("about.accent")}
            </p>
          </div>

          <div className="about__pillars">
            {pillars.map((p) => (
              <div key={p.title} className="about__pillar">
                <span className="about__pillar-icon">{p.num}</span>
                <div>
                  <h3 className="about__pillar-title">{p.title}</h3>
                  <p className="about__pillar-desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about__photos">
          <div className="about__photo about__photo--1">
            <div className="about__photo-overlay">
              <span>{t("about.photo_youth")}</span>
            </div>
          </div>
          <div className="about__photo about__photo--2">
            <div className="about__photo-overlay">
              <span>{t("about.photo_craft")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
