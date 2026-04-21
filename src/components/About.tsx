import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
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

  return (
    <section className="about" id="about" ref={sectionRef}>
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
                num: "01",
                title: "Skill Development",
                desc: "Courses grounded in the realities of rural life, building expertise that translates to income.",
              },
              {
                num: "02",
                title: "Rural Skills Archive",
                desc: "Documenting and preserving indigenous knowledge systems and traditional livelihoods.",
              },
              {
                num: "03",
                title: "Career Placement",
                desc: "Connecting trained youth to employment networks, markets, and entrepreneurship pathways.",
              },
            ].map((p) => (
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
