import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__brand-logo">
              <img
                src="/single.png"
                alt="Rural Youth Skill Forum logo"
                className="footer__logo"
              />
              <div>
                <div className="footer__brand-name">
                  RURAL YOUTH SKILL FORUM
                </div>
                <div className="footer__brand-sub">
                  Concept Pitch · April 2026 · Mirik, Darjeeling
                </div>
              </div>
            </div>
            <p className="footer__brand-desc">
              Bridging traditional wisdom and modern opportunities for rural
              youth across West Bengal and beyond.
            </p>
          </div>

          <div className="footer__links-group">
            <div className="footer__links-col">
              <div className="footer__links-title">Navigate</div>
              {["About", "Courses", "Areas", "Impact", "Contact"].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  className="footer__link"
                >
                  {l}
                </a>
              ))}
            </div>
            <div className="footer__links-col">
              <div className="footer__links-title">Disciplines</div>
              {[
                "Agriculture",
                "Wellness",
                "Data & Technology",
                "Design & Media",
              ].map((l) => (
                <span key={l} className="footer__link footer__link--passive">
                  {l}
                </span>
              ))}
            </div>
            <div className="footer__links-col">
              <div className="footer__links-title">Regions</div>
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
            Concept Pitch of <strong>Rural Youth Skill Forum</strong> · Prepared
            by Rabiul Islam &amp; Subhendu Kundu
          </p>
          <p className="footer__tagline">
            Real development begins with people.
          </p>
        </div>
      </div>
    </footer>
  );
}
