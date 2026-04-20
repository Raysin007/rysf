import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__inner">
        <div className="about__label">CORE CONCEPT</div>

        <div className="about__grid">
          <div className="about__text-col">
            <p className="about__lead">
              An initiative rooted in the belief that real development begins
              with people, their skills and connection with their own land and
              knowledge systems.
            </p>
            <p className="about__accent">
              The Rural Youth Skill Forum is designed as a bridge between
              traditional wisdom and modern opportunities.
            </p>
          </div>

          <div className="about__pillars">
            {[
              {
                icon: "🌱",
                title: "Skill Development",
                desc: "Courses grounded in the realities of rural life, building expertise that translates to income.",
              },
              {
                icon: "🗂️",
                title: "Rural Skills Archive",
                desc: "Documenting and preserving indigenous knowledge systems and traditional livelihoods.",
              },
              {
                icon: "🤝",
                title: "Career Placement",
                desc: "Connecting trained youth to employment networks, markets, and entrepreneurship pathways.",
              },
            ].map((p) => (
              <div key={p.title} className="about__pillar">
                <span className="about__pillar-icon">{p.icon}</span>
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
              <span>Youth Learning</span>
            </div>
          </div>
          <div className="about__photo about__photo--2">
            <div className="about__photo-overlay">
              <span>Traditional Craft</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
