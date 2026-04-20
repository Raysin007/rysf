import "./Footer.css";

const Logo = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="22" cy="12" r="7" fill="#8aaa1e" />
    <path
      d="M22 19 C10 22 8 34 8 38 C14 32 20 30 22 30 C24 30 30 32 36 38 C36 34 34 22 22 19Z"
      fill="#8aaa1e"
    />
    <path
      d="M22 28 C16 24 10 28 6 36 C12 30 18 28 22 28Z"
      fill="#a8c832"
      opacity="0.7"
    />
    <path
      d="M22 28 C28 24 34 28 38 36 C32 30 26 28 22 28Z"
      fill="#a8c832"
      opacity="0.7"
    />
  </svg>
);

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__brand-logo">
              <Logo />
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
