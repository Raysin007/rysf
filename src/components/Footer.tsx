import { useTranslation } from "react-i18next";
import "./Footer.css";

export default function Footer() {
  const { t } = useTranslation();

  const navLinks = [
    { id: "about", label: t("nav.about") },
    { id: "courses", label: t("nav.courses") },
    { id: "areas", label: t("nav.areas") },
    { id: "impact", label: t("nav.impact") },
    { id: "contact", label: t("nav.contact") }
  ];

  const disciplines = [
    t("courses.tracks.agriculture.title"),
    t("courses.tracks.wellness.title"),
    t("courses.tracks.data_tech.title"),
    t("courses.tracks.design_media.title"),
  ];

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__brand-logo">
              <img
                src="/single.png"
                alt={t("nav.logo_alt")}
                className="footer__logo"
              />
              <div>
                <div className="footer__brand-name">
                  {t("footer.brand_name")}
                </div>
                <div className="footer__brand-sub">
                  {t("footer.brand_sub")}
                </div>
              </div>
            </div>
            <p className="footer__brand-desc">
              {t("footer.brand_desc")}
            </p>
          </div>

          <div className="footer__links-group">
            <div className="footer__links-col">
              <div className="footer__links-title">{t("footer.nav_title")}</div>
              {navLinks.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  className="footer__link"
                >
                  {l.label}
                </a>
              ))}
            </div>
            <div className="footer__links-col">
              <div className="footer__links-title">{t("footer.disc_title")}</div>
              {disciplines.map((l) => (
                <span key={l} className="footer__link footer__link--passive">
                  {l}
                </span>
              ))}
            </div>
            <div className="footer__links-col">
              <div className="footer__links-title">{t("footer.regions_title")}</div>
              <span className="footer__link footer__link--passive">
                Plassey, Nadia — 741181
              </span>
              <span className="footer__link footer__link--passive">
                Mirik, Darjeeling — 734214
              </span>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            {t("footer.copy")}
          </p>
          <p className="footer__tagline">
            {t("footer.tagline")}
          </p>
        </div>
      </div>
    </footer>
  );
}
