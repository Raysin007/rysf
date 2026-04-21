import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// @ts-ignore
import "./Contact.css";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", role: "", message: "" });
  const sectionRef = useRef<HTMLElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (form.name && form.email) setSubmitted(true);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
        defaults: { ease: "power3.out" },
      });
      tl.from(".contact__label", { y: 20, opacity: 0, duration: 0.5 })
        .from(".contact__title", { y: 30, opacity: 0, duration: 0.6 }, "-=0.2")
        .from(".contact__desc", { y: 20, opacity: 0, duration: 0.5 }, "-=0.3")
        .from(".contact__info-item", { y: 20, opacity: 0, duration: 0.4, stagger: 0.12 }, "-=0.2")
        .from(".contact__right", { x: 40, opacity: 0, duration: 0.7 }, "-=0.5");
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="contact" id="contact" ref={sectionRef}>
      <div className="contact__inner">
        <div className="contact__left">
          <div className="contact__label">JOIN THE FORUM</div>
          <h2 className="contact__title">
            Be part of
            <br />
            <em>the change.</em>
          </h2>
          <p className="contact__desc">
            Whether you're a young person in Mirik or Plassey, an educator, an
            NGO partner, or a funding organization — there's a place for you in
            this initiative.
          </p>

          <div className="contact__info-list">
            {[
              {
                icon: "📍",
                label: "Pilot Locations",
                value: "Mirik, Darjeeling & Plassey, Nadia",
              },
              { icon: "📅", label: "Initiated", value: "April 2026" },
              {
                icon: "✉️",
                label: "Prepared by",
                value: "Rabiul Islam & Subhendu Kundu",
              },
            ].map((i) => (
              <div key={i.label} className="contact__info-item">
                <span className="contact__info-icon">{i.icon}</span>
                <div>
                  <span className="contact__info-label">{i.label}</span>
                  <span className="contact__info-value">{i.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="contact__right">
          {submitted ? (
            <div className="contact__success">
              <div className="contact__success-icon">🌱</div>
              <h3>You're in!</h3>
              <p>
                Thank you for your interest. We'll reach out soon with next
                steps for joining the Rural Youth Skill Forum.
              </p>
            </div>
          ) : (
            <div className="contact__form">
              <div className="contact__field">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                />
              </div>
              <div className="contact__field">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                />
              </div>
              <div className="contact__field">
                <label>I am a…</label>
                <select name="role" value={form.role} onChange={handleChange}>
                  <option value="">Select your role</option>
                  <option value="youth">Youth / Student</option>
                  <option value="educator">Educator / Trainer</option>
                  <option value="ngo">NGO / Community Org</option>
                  <option value="funder">Funder / Donor</option>
                  <option value="govt">Government Body</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="contact__field">
                <label>Message (optional)</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us how you'd like to get involved…"
                  rows={4}
                />
              </div>
              <button className="contact__submit" onClick={handleSubmit}>
                Join the Rural Youth Skill Forum →
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
