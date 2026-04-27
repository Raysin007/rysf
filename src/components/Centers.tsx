import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Centers.css";

gsap.registerPlugin(ScrollTrigger);

export default function Centers() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);

  const centers = [
    {
      name: "Plassey",
      region: "Nadia",
      pin: "741181",
      image: "/plassey.jpeg",
      points: [
        t("centers.points.plassey1"),
        t("centers.points.plassey2"),
      ],
    },
    {
      name: "Mirik",
      region: "Darjeeling",
      pin: "734214",
      image: "/mirik.jpeg",
      points: [
        t("centers.points.mirik1"),
        t("centers.points.mirik2"),
      ],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
        defaults: { ease: "power3.out" },
      });
      tl.from(".centers__label", { y: 20, opacity: 0, duration: 0.5 })
        .from(".centers__title", { y: 30, opacity: 0, duration: 0.6 }, "-=0.2")
        .from(".centers__subtitle", { y: 20, opacity: 0, duration: 0.5 }, "-=0.3")
        .from(".centers__card", { y: 40, opacity: 0, duration: 0.6, stagger: 0.2 }, "-=0.2")
        .from(".centers__why-title", { y: 20, opacity: 0, duration: 0.5 }, "-=0.2")
        .from(".centers__why-item", { y: 20, opacity: 0, duration: 0.4, stagger: 0.12 }, "-=0.2");
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const whyItems = [
    { img: "/reg1.jpg", text: t("centers.why1") },
    { img: "/reg2.jpg", text: t("centers.why2") },
    { img: "/reg3.jpg", text: t("centers.why3") },
    { img: "/reg4.jpeg", text: t("centers.why4") },
    { img: "/reg1.jpg", text: t("centers.why1") },
    { img: "/reg2.jpg", text: t("centers.why2") },
    { img: "/reg3.jpg", text: t("centers.why3") },
    { img: "/reg4.jpeg", text: t("centers.why4") },
  ];

  return (
    <section className="centers" id="centers" ref={sectionRef}>
      <div className="centers__inner">
        <div className="centers__label">{t("centers.label")}</div>

        <h2 className="centers__title">
          Plassey <em>&amp;</em> Mirik
        </h2>
        <p className="centers__subtitle">{t("centers.subtitle")}</p>

        <div className="centers__cards">
          {centers.map((area) => (
            <div key={area.name} className="centers__card">
              <div
                className="centers__card-visual"
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.65) 100%), url(${area.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="centers__card-pin-badge">
                  <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
                    <path
                      d="M5 0C2.24 0 0 2.24 0 5c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5zm0 6.5c-.83 0-1.5-.67-1.5-1.5S4.17 3.5 5 3.5 6.5 4.17 6.5 5 5.83 6.5 5 6.5z"
                      fill="white"
                    />
                  </svg>
                  {area.name}, {area.region} — {area.pin}
                </div>

                <div className="centers__card-content">
                  <div className="centers__card-name">{area.name}</div>
                  <div className="centers__card-body">
                    {area.points.map((p, i) => (
                      <div key={i} className="centers__card-point">
                        <span className="centers__card-plus">+</span>
                        <p>{p}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="centers__why">
          <h3 className="centers__why-title">{t("centers.why_title")}</h3>
          <div className="centers__why-marquee">
            <div className="centers__why-track">
              {whyItems.map((r, i) => (
                <div key={i} className="centers__why-item">
                  <div className="centers__why-img" style={{ backgroundImage: `url(${r.img})` }}>
                    <p>{r.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
