import { useState } from "react";
import "./Courses.css";

interface Track {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  foundationCount: number;
  advanceCount: number;
  foundation: string[];
  advance: string[];
}

const tracks: Track[] = [
  {
    id: "agriculture",
    title: "Agriculture",
    subtitle: "Rooted and income-generating skills",
    color: "#5a7a1e",
    foundationCount: 3,
    advanceCount: 0,
    foundation: [
      "Organic Farming Basics",
      "Nursery Basics",
      "Composting & Soil Health",
    ],
    advance: [],
  },
  {
    id: "wellness",
    title: "Wellness",
    subtitle: "Traditional systems-based livelihoods",
    color: "#7a8a2e",
    foundationCount: 3,
    advanceCount: 0,
    foundation: [
      "Health & Wellness Basics",
      "Ayurveda Basics",
      "Yoga & Wellness",
    ],
    advance: [],
  },
  {
    id: "data-tech",
    title: "Data & Technology",
    subtitle: "Future-ready opportunities",
    color: "#6b7a2a",
    foundationCount: 4,
    advanceCount: 6,
    foundation: [
      "Data Literacy",
      "Tech Literacy",
      "AI Basics + Office Tools",
      "Basic Business Management",
    ],
    advance: [
      "Python Development",
      "Web & App Development",
      "Cloud Systems",
      "Data Analysis & Visualisation",
      "Agentic AI",
      "Business Management",
    ],
  },
  {
    id: "design-media",
    title: "Design & Media",
    subtitle: "Creative skills + Better market value",
    color: "#8aaa1e",
    foundationCount: 4,
    advanceCount: 6,
    foundation: [
      "Design Literacy",
      "Basic Photography",
      "Video Editing",
      "Storytelling Basics",
    ],
    advance: [
      "UI/UX Design",
      "Product Design",
      "Digital Illustration",
      "Animation & Sound",
      "Digital Marketing",
      "Branding & Advertising",
    ],
  },
];

export default function Courses() {
  const [active, setActive] = useState<string>("data-tech");

  const selected = tracks.find((t) => t.id === active)!;

  return (
    <section className="courses" id="courses">
      <div className="courses__inner">
        <div className="courses__header">
          <div className="courses__label">CURRICULUM</div>
          <h2 className="courses__title">
            14+ Foundation Courses
            <br />
            <em>&amp; 12+ Advance Courses</em>
          </h2>
          <p className="courses__sub">
            Four tracks designed to connect rural knowledge with future
            livelihoods.
          </p>
        </div>

        <div className="courses__tabs">
          {tracks.map((t) => (
            <button
              key={t.id}
              className={`courses__tab ${active === t.id ? "courses__tab--active" : ""}`}
              onClick={() => setActive(t.id)}
            >
              {t.title}
            </button>
          ))}
        </div>

        <div className="courses__panel">
          <div className="courses__panel-header">
            <div>
              <h3 className="courses__panel-title">{selected.title}</h3>
              <p className="courses__panel-sub">{selected.subtitle}</p>
            </div>
            <div className="courses__counts">
              <span className="courses__count-badge courses__count-badge--foundation">
                {selected.foundationCount} Foundation
              </span>
              {selected.advanceCount > 0 && (
                <span className="courses__count-badge courses__count-badge--advance">
                  {selected.advanceCount} Advance
                </span>
              )}
            </div>
          </div>

          <div className="courses__lists">
            <div className="courses__list-col">
              <div className="courses__list-label">FOUNDATION COURSES</div>
              <ul className="courses__list">
                {selected.foundation.map((c) => (
                  <li key={c} className="courses__item">
                    <span className="courses__dot" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {selected.advance.length > 0 && (
              <div className="courses__list-col">
                <div className="courses__list-label">ADVANCE COURSES</div>
                <ul className="courses__list">
                  {selected.advance.map((c) => (
                    <li key={c} className="courses__item">
                      <span className="courses__dot courses__dot--advance" />
                      {c}
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
