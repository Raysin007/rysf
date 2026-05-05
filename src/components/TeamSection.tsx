import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TeamMember {
  id: string;
  nameKey: string;
  roleKey: string;
  descKey: string;
  bioKey: string;
  image: string;
  initials: string;
  locationKey: string;
  joinYearKey: string;
  skillKeys: string[];
  linkedin?: string;
  twitter?: string;
}

const members: TeamMember[] = [
  {
    id: "rabiul",
    nameKey: "team.members.rabiul.name",
    roleKey: "team.members.rabiul.role",
    descKey: "team.members.rabiul.desc",
    bioKey: "team.members.rabiul.bio",
    image: "/rabi.webp",
    initials: "RI",
    locationKey: "team.locations.plassey_nadia",
    joinYearKey: "team.year_2026",
    skillKeys: ["team.skills_list.comm_outreach", "team.skills_list.prog_design", "team.skills_list.rural_dev"],
    linkedin: "#",
    twitter: "#",
  },
  {
    id: "subhendu",
    nameKey: "team.members.subhendu.name",
    roleKey: "team.members.subhendu.role",
    descKey: "team.members.subhendu.desc",
    bioKey: "team.members.subhendu.bio",
    image: "/punpun.jpg",
    initials: "SK",
    locationKey: "team.locations.mirik_darjeeling",
    joinYearKey: "team.year_2026",
    skillKeys: ["team.skills_list.curr_design", "team.skills_list.skill_training", "team.skills_list.education"],
    linkedin: "#",
    twitter: "#",
  },
  {
    id: "member3",
    nameKey: "team.members.member3.name",
    roleKey: "team.members.member3.role",
    descKey: "team.members.member3.desc",
    bioKey: "team.members.member3.bio",
    image: "/deepom.jpg",
    initials: "AM",
    locationKey: "team.locations.plassey_nadia",
    joinYearKey: "team.year_2026",
    skillKeys: ["team.skills_list.agri", "team.skills_list.org_farming", "team.skills_list.livelihood"],
    linkedin: "#",
  },
  {
    id: "member4",
    nameKey: "team.members.member4.name",
    roleKey: "team.members.member4.role",
    descKey: "team.members.member4.desc",
    bioKey: "team.members.member4.bio",
    image: "/rahul.webp",
    initials: "PD",
    locationKey: "team.locations.darjeeling",
    joinYearKey: "team.year_2026",
    skillKeys: ["team.skills_list.dig_literacy", "team.skills_list.tech_training", "team.skills_list.ai_tools"],
    linkedin: "#",
    twitter: "#",
  },
  {
    id: "member5",
    nameKey: "team.members.member5.name",
    roleKey: "team.members.member5.role",
    descKey: "team.members.member5.desc",
    bioKey: "team.members.member5.bio",
    image: "/santam.webp",
    initials: "SR",
    locationKey: "team.locations.kalimpong",
    joinYearKey: "team.year_2026",
    skillKeys: ["team.skills_list.wellness", "team.skills_list.ayurveda", "team.skills_list.health_edu"],
    linkedin: "#",
  },
  {
    id: "member6",
    nameKey: "team.members.member6.name",
    roleKey: "team.members.member6.role",
    descKey: "team.members.member6.desc",
    bioKey: "team.members.member6.bio",
    image: "/soumajit.webp",
    initials: "KM",
    locationKey: "team.locations.behala_kolkata",
    joinYearKey: "team.year_2026",
    skillKeys: ["team.skills_list.design", "team.skills_list.media", "team.skills_list.vis_comm"],
    linkedin: "#",
    twitter: "#",
  },
];

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 4l11.733 16H20L8.267 4z" />
      <path d="M4 20l6.768-6.768M12.456 12.456L20 4" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function MemberModal({ member, onClose }: { member: TeamMember; onClose: () => void }) {
  const { t } = useTranslation();
  const overlayRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.25, ease: "power2.out" });
    gsap.fromTo(cardRef.current,
      { opacity: 0, scale: 0.93, y: 24 },
      { opacity: 1, scale: 1, y: 0, duration: 0.35, ease: "power3.out" }
    );
    return () => { document.body.style.overflow = ""; };
  }, []);

  const handleClose = () => {
    gsap.to(cardRef.current, { opacity: 0, scale: 0.95, y: 16, duration: 0.2, ease: "power2.in" });
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.25, ease: "power2.in", onComplete: onClose });
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) handleClose();
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") handleClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
      style={{ backgroundColor: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)" }}
    >
      <div
        ref={cardRef}
        className="relative bg-white dark:bg-zinc-900 rounded-[24px] overflow-hidden shadow-lg-custom w-full max-w-3xl max-h-[90vh] overflow-y-auto"
      >
        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-text-muted dark:text-white/60 hover:bg-lime hover:text-white transition-all"
          aria-label="Close"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Photo column */}
          <div className="md:w-72 md:flex-shrink-0 bg-olive/5 dark:bg-zinc-800/50 relative">
            <div className="aspect-[3/4] md:h-full md:aspect-auto overflow-hidden">
              <img
                src={member.image}
                alt={t(member.nameKey)}
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
            {/* Initials fallback overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-olive/10 dark:bg-zinc-700/30 md:hidden">
              <span className="font-display text-7xl font-bold text-lime opacity-20">{member.initials}</span>
            </div>
          </div>

          {/* Content column */}
          <div className="flex-1 p-7 md:p-9 flex flex-col gap-5">
            <div>
              <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-lime mb-2">
                {t(member.roleKey)}
              </p>
              <h3 className="font-display text-2xl md:text-3xl text-olive dark:text-lime-light font-bold mb-3">
                {t(member.nameKey)}
              </h3>

              {/* Meta */}
              <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-[11px] text-text-muted dark:text-white/50 font-medium mb-4">
                <span className="flex items-center gap-1.5">
                  <LocationIcon />
                  {t(member.locationKey)}
                </span>
                <span className="flex items-center gap-1.5">
                  <CalendarIcon />
                  {t("team.joined")} {t(member.joinYearKey)}
                </span>
              </div>

              <p className="text-sm text-text-muted dark:text-white/70 leading-relaxed">
                {t(member.bioKey)}
              </p>
            </div>

            {/* Skills */}
            <div>
              <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-text-muted dark:text-white/40 mb-2.5">
                {t("team.skills")}
              </p>
              <div className="flex flex-wrap gap-2">
                {member.skillKeys.map((skillKey) => (
                  <span
                    key={skillKey}
                    className="px-3 py-1 rounded-full border border-lime/40 text-lime dark:text-lime-light text-[11px] font-bold tracking-wide bg-lime/5"
                  >
                    {t(skillKey)}
                  </span>
                ))}
              </div>
            </div>

            {/* Social links */}
            {(member.linkedin || member.twitter) && (
              <div className="flex gap-2 pt-1 mt-auto">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-text-muted dark:text-white/60 hover:bg-lime hover:text-white transition-all"
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon />
                  </a>
                )}
                {member.twitter && (
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-text-muted dark:text-white/60 hover:bg-lime hover:text-white transition-all"
                    aria-label="X (Twitter)"
                  >
                    <XIcon />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TeamSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const [activeModal, setActiveModal] = useState<TeamMember | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
        defaults: { ease: "power3.out" },
      });
      tl.from(".team-label", { y: 20, opacity: 0, duration: 0.5, clearProps: "all" })
        .from(".team-heading", { y: 30, opacity: 0, duration: 0.6, clearProps: "all" }, "-=0.3")
        .from(".team-sub", { y: 20, opacity: 0, duration: 0.5, clearProps: "all" }, "-=0.3")
        .from(".team-card", { y: 40, opacity: 0, duration: 0.55, stagger: 0.1, clearProps: "all" }, "-=0.3");
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={sectionRef} id="team" className="bg-cream dark:bg-black py-16 lg:py-24 px-[5vw]">
        <div className="max-w-[1280px] mx-auto">

          {/* Header */}
          <div className="team-label text-[0.72rem] font-bold tracking-widest text-lime uppercase mb-8">
            {t("team.label")}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-end mb-14">
            <h2 className="team-heading font-display text-3xl sm:text-4xl lg:text-[3rem] font-semibold text-olive dark:text-lime-light leading-[1.35]">
              {t("team.title")}
              <span className="block text-lime">{t("team.title_em")}</span>
            </h2>
            <p className="team-sub text-base lg:text-lg font-light text-text-muted dark:text-white/70 leading-relaxed">
              {t("team.sub")}
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {members.map((member) => (
              <button
                key={member.id}
                onClick={() => setActiveModal(member)}
                className="team-card group text-left rounded-[20px] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg-custom focus:outline-none focus:ring-4 focus:ring-lime/20"
              >
                {/* Full-bleed card — image covers entire card */}
                <div
                  className="relative h-[420px] sm:h-[500px] flex flex-col justify-between p-6 lg:p-8"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.70) 100%), url(${member.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center top",
                  }}
                >
                  {/* Bottom content */}
                  <div className="flex flex-col gap-2 mt-auto">
                    {/* Role label — always visible */}
                    <p className="text-[9px] font-bold tracking-[0.18em] uppercase text-lime-light">
                      {t(member.roleKey)}
                    </p>

                    {/* Name — always visible */}
                    <div className="font-display text-xl font-normal text-white drop-shadow-lg leading-none truncate">
                      {t(member.nameKey)}
                    </div>

                    {/* Desc + skills + view profile — hidden until hover */}
                    <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-300 ease-in-out flex flex-col gap-1.5 pt-0 group-hover:pt-1">
                      <div className="flex gap-2 items-start">
                        <span className="text-base font-bold text-lime-light leading-none flex-shrink-0">+</span>
                        <p className="text-xs text-white/90 leading-snug font-normal line-clamp-2">
                          {t(member.descKey)}
                        </p>
                      </div>
                      <div className="flex gap-2 items-start">
                        <span className="text-base font-bold text-lime-light leading-none flex-shrink-0">+</span>
                        <p className="text-xs text-white/90 leading-snug font-normal">
                          {member.skillKeys.slice(0, 2).map(sk => t(sk)).join(" · ")}
                        </p>
                      </div>
                      <span className="text-white/80 text-[10px] font-bold uppercase tracking-widest mt-1">
                        {t("team.view_profile")} →
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Modal */}
      {activeModal && (
        <MemberModal member={activeModal} onClose={() => setActiveModal(null)} />
      )}
    </>
  );
}
