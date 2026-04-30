import { useTranslation } from "react-i18next";
import "./Footer.css";

export default function Footer() {
  const { t } = useTranslation();

  const navLinks = [
    { id: "about", label: t("nav.about") },
    { id: "courses", label: t("nav.courses") },
    { id: "areas", label: t("nav.centers") },
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
                <div className="footer__brand-text">
                  <div className="footer__brand-name">{t("nav.name_part1")}</div>
                  <div className="footer__brand-name">{t("nav.name_part2")}</div>
                </div>
                <div className="footer__brand-sub">
                  {t("footer.brand_sub")}
                </div>
              </div>
            </div>
            <p className="footer__brand-desc">
              {t("footer.brand_desc")}
            </p>
            <div className="footer__social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="X (Twitter)">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z M4 20l6.768 -6.768 M12.456 12.456l7.544 7.544"></path></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
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
                {t("footer.address_plassey")}
              </span>
              <span className="footer__link footer__link--passive">
                {t("footer.address_mirik")}
              </span>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          {/* <p className="footer__copy">
            {t("footer.copy")}
          </p> */}
          <p className="footer__tagline">
            {t("footer.tagline")}
          </p>
        </div>
      </div>
    </footer>
  );
}
