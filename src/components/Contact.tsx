import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// @ts-ignore
import "./Contact.css";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const { t } = useTranslation();
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

  const infoItems = [
    {
      icon: "📍",
      label: t("contact.info1_label"),
      value: t("contact.info1_value"),
    },
    { icon: "📅", label: t("contact.info2_label"), value: t("contact.info2_value") },
    {
      icon: "✉️",
      label: t("contact.info3_label"),
      value: t("contact.info3_value"),
    },
  ];

  return (
    <section className="contact" id="contact" ref={sectionRef}>
      <div className="contact__inner">
        <div className="contact__left">
          <div className="contact__label">{t("contact.label")}</div>
          <h2 className="contact__title">
            {t("contact.title")}
            <br />
            <em dangerouslySetInnerHTML={{ __html: t("contact.title_em") }} />
          </h2>
          <p className="contact__desc">
            {t("contact.desc")}
          </p>

          <div className="contact__info-list">
            {infoItems.map((i) => (
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
              <h3>{t("contact.success_title")}</h3>
              <p>
                {t("contact.success_desc")}
              </p>
            </div>
          ) : (
            <div className="contact__form">
              <div className="contact__field">
                <label>{t("contact.form.name")}</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={t("contact.form.name_ph")}
                />
              </div>
              <div className="contact__field">
                <label>{t("contact.form.email")}</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder={t("contact.form.email_ph")}
                />
              </div>
              <div className="contact__field">
                <label>{t("contact.form.role")}</label>
                <select name="role" value={form.role} onChange={handleChange}>
                  <option value="">{t("contact.form.role_ph")}</option>
                  <option value="youth">{t("contact.form.role_youth")}</option>
                  <option value="educator">{t("contact.form.role_educator")}</option>
                  <option value="ngo">{t("contact.form.role_ngo")}</option>
                  <option value="funder">{t("contact.form.role_funder")}</option>
                  <option value="govt">{t("contact.form.role_govt")}</option>
                  <option value="other">{t("contact.form.role_other")}</option>
                </select>
              </div>
              <div className="contact__field">
                <label>{t("contact.form.message")}</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder={t("contact.form.message_ph")}
                  rows={4}
                />
              </div>
              <button className="contact__submit" onClick={handleSubmit}>
                {t("contact.form.submit")}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
