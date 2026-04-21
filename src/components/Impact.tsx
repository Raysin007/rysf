import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Impact.css";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    num: "500+",
    label: "Youth Trained",
    desc: "Target in first cohort across both pilot regions",
  },
  {
    num: "26+",
    label: "Skill Courses",
    desc: "Across 4 disciplines — foundation to advanced",
  },
  {
    num: "2",
    label: "Pilot Regions",
    desc: "Plassey, Nadia and Mirik, Darjeeling",
  },
  {
    num: "3",
    label: "Core Pillars",
    desc: "Skills Development, Career Placement, Skills Archive",
  },
];

export default function Impact() {
  const sectionRef = useRef<HTMLElement>(null);

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
        <div className="impact__label">OUR IMPACT</div>

        <div className="impact__top">
          <h2 className="impact__title">
            Building futures,
            <br />
            <em>one skill at a time.</em>
          </h2>
          <p className="impact__desc">
            The Rural Youth Skill Forum is built for measurable, lasting change
            — starting with the communities that need it most, and scaling to
            reach thousands across the region.
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
            Real development begins with people — their skills and connection
            with their own land and knowledge systems.
          </blockquote>
          <cite>— Rural Youth Skill Forum, Core Concept</cite>
        </div>
      </div>
    </section>
  );
}
