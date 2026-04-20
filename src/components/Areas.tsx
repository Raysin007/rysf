// @ts-ignore
import "./Areas.css";

const areas = [
  {
    name: "Plassey",
    region: "Nadia",
    pin: "741181",
    image: "/plassey.jpeg",
    points: [
      "Deep local understanding — we design with real-world insights, not assumptions",
      "Strong community trust, leading to higher participation and impact",
    ],
  },
  {
    name: "Mirik",
    region: "Darjeeling",
    pin: "734214",
    image: "/mirik.jpeg",
    points: [
      "High need, low access — where intervention creates real change",
      "Built to scale; models tested here can grow across regions",
    ],
  },
];

export default function Areas() {
  return (
    <section className="areas" id="areas">
      <div className="areas__inner">
        <div className="areas__label">AREA OF WORK</div>

        <h2 className="areas__title">
          Plassey <em>&amp;</em> Mirik
        </h2>
        <p className="areas__subtitle">Two pilot regions. One shared vision.</p>

        <div className="areas__cards">
          {areas.map((area) => (
            <div key={area.name} className="areas__card">
              <div
                className="areas__card-visual"
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.65) 100%), url(${area.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="areas__card-pin-badge">
                  <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
                    <path
                      d="M5 0C2.24 0 0 2.24 0 5c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5zm0 6.5c-.83 0-1.5-.67-1.5-1.5S4.17 3.5 5 3.5 6.5 4.17 6.5 5 5.83 6.5 5 6.5z"
                      fill="white"
                    />
                  </svg>
                  {area.name}, {area.region} — {area.pin}
                </div>

                <div className="areas__card-content">
                  <div className="areas__card-name">{area.name}</div>
                  <div className="areas__card-body">
                    {area.points.map((p, i) => (
                      <div key={i} className="areas__card-point">
                        <span className="areas__card-plus">+</span>
                        <p>{p}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="areas__why">
          <h3 className="areas__why-title">Why these regions?</h3>
          <div className="areas__why-grid">
            {[
              {
                icon: "🏔️",
                text: "Geographically underserved with high youth population",
              },
              {
                icon: "🌾",
                text: "Rich in traditional knowledge ripe for documentation",
              },
              {
                icon: "📡",
                text: "Emerging digital connectivity enabling remote learning",
              },
              {
                icon: "🤲",
                text: "Existing community networks to build trust and scale",
              },
            ].map((r) => (
              <div key={r.text} className="areas__why-item">
                <span className="areas__why-icon">{r.icon}</span>
                <p>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}