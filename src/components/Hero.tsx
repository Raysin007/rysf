import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import "./Hero.css";

export default function Hero() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero__tag", { y: 20, opacity: 0, duration: 0.6 })
        .from(".hero__title", { y: 40, opacity: 0, duration: 0.7 }, "-=0.3")
        .from(".hero__tagline", { y: 30, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(".hero__btn", { y: 20, opacity: 0, duration: 0.5, stagger: 0.15 }, "-=0.3")
        .from(".hero__badge", { y: 20, opacity: 0, duration: 0.5, stagger: 0.12 }, "-=0.3")
        .from(".hero__visual", { x: 40, opacity: 0, duration: 0.8 }, "-=0.8");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="hero" ref={sectionRef}>
      <div className="hero__bg-pattern" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className={`hero__leaf hero__leaf--${i + 1}`} />
        ))}
      </div>

      <div className="hero__content">
        <div className="hero__eyebrow">
          <span className="hero__tag">{t("hero.tag")}</span>
        </div>

        <h1 className="hero__title">
          {t("hero.title")}
          <br />
          <em>{t("hero.skill_forum")}</em>
        </h1>

        <p className="hero__tagline">
          {t("hero.tagline")}
        </p>

        <div className="hero__actions">
          <a href="#about" className="hero__btn hero__btn--primary">
            {t("hero.explore")}
          </a>
          <a href="#courses" className="hero__btn hero__btn--outline">
            {t("hero.view_courses")}
          </a>
        </div>

        <div className="hero__badges">
          <div className="hero__badge">
            <span className="hero__badge-num">26+</span>
            <span className="hero__badge-label">{t("hero.courses")}</span>
          </div>
          <div className="hero__badge-divider" />
          <div className="hero__badge">
            <span className="hero__badge-num">4</span>
            <span className="hero__badge-label">{t("hero.disciplines")}</span>
          </div>
          <div className="hero__badge-divider" />
          <div className="hero__badge">
            <span className="hero__badge-num">2</span>
            <span className="hero__badge-label">{t("hero.pilot_regions")}</span>
          </div>
        </div>
      </div>

      <div className="hero__visual">
        <div className="hero__logo-mark">
          <img
            src="/single.png"
            alt={t("nav.logo_alt")}
            className="hero__logo-image"
          />
          <div className="hero__logo-labels">
            <span className="hero__logo-label hero__logo-label--top" dangerouslySetInnerHTML={{ __html: t("hero.label_top").split(" ").join("<br />") }} />
            <span className="hero__logo-label hero__logo-label--left" dangerouslySetInnerHTML={{ __html: t("hero.label_left").split(" ").join("<br />") }} />
            <span className="hero__logo-label hero__logo-label--right" dangerouslySetInnerHTML={{ __html: t("hero.label_right").split(" ").join("<br />") }} />
          </div>
        </div>
      </div>

      <div className="hero__scroll-hint">
        <span>{t("hero.scroll")}</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
