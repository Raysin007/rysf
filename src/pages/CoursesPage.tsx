import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useSearchParams } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CourseDetail {
  id: string;
  titleKey: string;
  descKey: string;
  image: string;
  duration: string;
  level: string;
  tags?: string[];
}

const courseDetails: Record<string, CourseDetail[]> = {
  agriculture: [
    { id: "ag-1", titleKey: "courses.tracks.agriculture.c1", descKey: "courses.tracks.agriculture.desc1", image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&q=80&w=800", duration: "8 Weeks", level: "Foundation", tags: ["Sustainability", "Ecology"] },
    { id: "ag-2", titleKey: "courses.tracks.agriculture.c2", descKey: "courses.tracks.agriculture.desc2", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800", duration: "6 Weeks", level: "Foundation", tags: ["Commercial", "Horticulture"] },
    { id: "ag-3", titleKey: "courses.tracks.agriculture.c3", descKey: "courses.tracks.agriculture.desc3", image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=800", duration: "4 Weeks", level: "Foundation", tags: ["Soil Health", "Waste Mgmt"] },
    { id: "ag-4", titleKey: "courses.tracks.agriculture.c4", descKey: "courses.tracks.agriculture.desc4", image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&q=80&w=800", duration: "8 Weeks", level: "Foundation", tags: ["Livestock", "Nutrition"] },
    { id: "ag-5", titleKey: "courses.tracks.agriculture.c5", descKey: "courses.tracks.agriculture.desc5", image: "https://images.unsplash.com/photo-1529589298321-eaf987ca9a3c?auto=format&fit=crop&q=80&w=800", duration: "10 Weeks", level: "Foundation", tags: ["Aquaculture", "Water Mgmt"] },
    { id: "ag-a1", titleKey: "courses.tracks.agriculture.a1", descKey: "courses.tracks.agriculture.desca1", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800", duration: "12 Weeks", level: "Advance", tags: ["Agro-Processing", "Branding"] },
    { id: "ag-a2", titleKey: "courses.tracks.agriculture.a2", descKey: "courses.tracks.agriculture.desca2", image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800", duration: "14 Weeks", level: "Advance", tags: ["Exports", "Global Trade"] },
  ],
  wellness: [
    { id: "wl-1", titleKey: "courses.tracks.wellness.c1", descKey: "courses.tracks.wellness.desc1", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800", duration: "6 Weeks", level: "Foundation", tags: ["Hygiene", "Public Health"] },
    { id: "wl-2", titleKey: "courses.tracks.wellness.c2", descKey: "courses.tracks.wellness.desc2", image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800", duration: "10 Weeks", level: "Foundation", tags: ["Ayurveda", "Herbal Medicine"] },
    { id: "wl-3", titleKey: "courses.tracks.wellness.c3", descKey: "courses.tracks.wellness.desc3", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800", duration: "8 Weeks", level: "Foundation", tags: ["Yoga", "Meditation"] },
    { id: "wl-4", titleKey: "courses.tracks.wellness.c4", descKey: "courses.tracks.wellness.desc4", image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800", duration: "6 Weeks", level: "Foundation", tags: ["Nutrition", "Local Diet"] },
    { id: "wl-5", titleKey: "courses.tracks.wellness.c5", descKey: "courses.tracks.wellness.desc5", image: "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?auto=format&fit=crop&q=80&w=800", duration: "4 Weeks", level: "Foundation", tags: ["First Aid", "Emergency"] },
    { id: "wl-a1", titleKey: "courses.tracks.wellness.a1", descKey: "courses.tracks.wellness.desca1", image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=800", duration: "12 Weeks", level: "Advance", tags: ["Diagnostics", "Panchakarma"] },
  ],
  "data-tech": [
    { id: "dt-1", titleKey: "courses.tracks.data_tech.c1", descKey: "courses.tracks.data_tech.desc1", image: "https://images.unsplash.com/photo-1551288049-bbbda5366fd9?auto=format&fit=crop&q=80&w=800", duration: "6 Weeks", level: "Foundation", tags: ["Data", "Analysis"] },
    { id: "dt-2", titleKey: "courses.tracks.data_tech.c2", descKey: "courses.tracks.data_tech.desc2", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800", duration: "6 Weeks", level: "Foundation", tags: ["Hardware", "Security"] },
    { id: "dt-3", titleKey: "courses.tracks.data_tech.c3", descKey: "courses.tracks.data_tech.desc3", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800", duration: "8 Weeks", level: "Foundation", tags: ["GenAI", "Office Tools"] },
    { id: "dt-4", titleKey: "courses.tracks.data_tech.c4", descKey: "courses.tracks.data_tech.desc4", image: "https://images.unsplash.com/photo-1454165833767-0274b060e4a1?auto=format&fit=crop&q=80&w=800", duration: "6 Weeks", level: "Foundation", tags: ["Enterprise", "Bookkeeping"] },
    { id: "dt-a1", titleKey: "courses.tracks.data_tech.a1", descKey: "courses.tracks.data_tech.desca1", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800", duration: "12 Weeks", level: "Advance", tags: ["Python", "Automation"] },
    { id: "dt-a2", titleKey: "courses.tracks.data_tech.a2", descKey: "courses.tracks.data_tech.desca2", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800", duration: "16 Weeks", level: "Advance", tags: ["Web Dev", "React"] },
    { id: "dt-a3", titleKey: "courses.tracks.data_tech.a3", descKey: "courses.tracks.data_tech.desca3", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800", duration: "14 Weeks", level: "Advance", tags: ["Cloud", "AWS/Azure"] },
    { id: "dt-a4", titleKey: "courses.tracks.data_tech.a4", descKey: "courses.tracks.data_tech.desca4", image: "https://images.unsplash.com/photo-1551288049-bbbda5366fd9?auto=format&fit=crop&q=80&w=800", duration: "12 Weeks", level: "Advance", tags: ["SQL", "BI Tools"] },
    { id: "dt-a5", titleKey: "courses.tracks.data_tech.a5", descKey: "courses.tracks.data_tech.desca5", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800", duration: "14 Weeks", level: "Advance", tags: ["AI Agents", "Workflows"] },
    { id: "dt-a6", titleKey: "courses.tracks.data_tech.a6", descKey: "courses.tracks.data_tech.desca6", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800", duration: "16 Weeks", level: "Advance", tags: ["Strategy", "Scaling"] },
  ],
  "design-media": [
    { id: "dm-1", titleKey: "courses.tracks.design_media.c1", descKey: "courses.tracks.design_media.desc1", image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800", duration: "8 Weeks", level: "Foundation", tags: ["Typography", "Layout"] },
    { id: "dm-2", titleKey: "courses.tracks.design_media.c2", descKey: "courses.tracks.design_media.desc2", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800", duration: "8 Weeks", level: "Foundation", tags: ["Photography", "Lighting"] },
    { id: "dm-3", titleKey: "courses.tracks.design_media.c3", descKey: "courses.tracks.design_media.desc3", image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800", duration: "10 Weeks", level: "Foundation", tags: ["Video Editing", "Education"] },
    { id: "dm-4", titleKey: "courses.tracks.design_media.c4", descKey: "courses.tracks.design_media.desc4", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=800", duration: "6 Weeks", level: "Foundation", tags: ["Storytelling", "Narrative"] },
    { id: "dm-a1", titleKey: "courses.tracks.design_media.a1", descKey: "courses.tracks.design_media.desca1", image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800", duration: "12 Weeks", level: "Advance", tags: ["UI/UX", "Figma"] },
    { id: "dm-a2", titleKey: "courses.tracks.design_media.a2", descKey: "courses.tracks.design_media.desca2", image: "https://images.unsplash.com/photo-1581291518062-c9a794148435?auto=format&fit=crop&q=80&w=800", duration: "14 Weeks", level: "Advance", tags: ["Product Design", "3D"] },
    { id: "dm-a3", titleKey: "courses.tracks.design_media.a3", descKey: "courses.tracks.design_media.desca3", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800", duration: "12 Weeks", level: "Advance", tags: ["Illustration", "Art"] },
    { id: "dm-a4", titleKey: "courses.tracks.design_media.a4", descKey: "courses.tracks.design_media.desca4", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800", duration: "16 Weeks", level: "Advance", tags: ["Animation", "Sound"] },
    { id: "dm-a5", titleKey: "courses.tracks.design_media.a5", descKey: "courses.tracks.design_media.desca5", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800", duration: "10 Weeks", level: "Advance", tags: ["Marketing", "SEO"] },
    { id: "dm-a6", titleKey: "courses.tracks.design_media.a6", descKey: "courses.tracks.design_media.desca6", image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=800", duration: "14 Weeks", level: "Advance", tags: ["Branding", "Strategy"] },
  ]
};

function CourseCard({ course, t }: { course: CourseDetail; t: any }) {
  return (
    <div className="course-card bg-white dark:bg-zinc-900 rounded-[20px] overflow-hidden border border-border-subtle shadow-sm-custom hover:shadow-md-custom transition-all group h-full flex flex-col">
      <div className="h-52 overflow-hidden relative">
        <img src={course.image} alt={t(course.titleKey)} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className={`absolute top-4 left-4 backdrop-blur-md px-3 py-1 rounded-full text-[0.65rem] font-bold tracking-widest uppercase text-white border border-white/20 ${
          course.level === "Foundation" ? "bg-lime/70" : "bg-olive/80"
        }`}>
          {course.level}
        </div>
      </div>
      <div className="p-7 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
          <span className="text-[0.65rem] font-bold text-lime uppercase tracking-widest">{course.duration}</span>
        </div>
        <h3 className="font-display text-xl text-olive dark:text-lime-light font-bold mb-3 leading-tight">{t(course.titleKey)}</h3>

        {course.tags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {course.tags.map((tag, i) => (
              <span key={i} className="px-2 py-0.5 bg-cream dark:bg-black text-[0.6rem] font-bold text-text-muted dark:text-white/40 rounded-md uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
        )}

        <p className="text-sm text-text-muted dark:text-white/60 leading-relaxed mb-8">
          {t(course.descKey)}
        </p>
        <div className="mt-auto">
          <Link to="/#contact" className="group relative inline-flex items-center justify-center w-full py-3 border border-lime/30 rounded-xl text-lime font-bold text-sm hover:bg-lime hover:text-white transition-all text-center">
            {t("courses_page.course_details")}
            <span className="ml-2 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 font-serif text-lg leading-none">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function CoursesPage() {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const trackParam = searchParams.get("track");

  const [activeTrack, setActiveTrack] = useState(trackParam || "data-tech");
  const [searchQuery, setSearchQuery] = useState("");
  const pageRef = useRef<HTMLDivElement>(null);

  const handleTrackChange = (trackId: string) => {
    setActiveTrack(trackId);
    setSearchQuery("");
    setSearchParams({ track: trackId });
  };

  // Mount animation
  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".page-header-item", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
      })
      .from(".campus-cta", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        clearProps: "all"
      }, "-=0.4")
      .from(".track-tabs-container", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        clearProps: "all"
      }, "-=0.3")
      .from(".sidebar-item", {
        x: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.2,
        clearProps: "all"
      }, "-=0.6")
      .from(".info-card", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        clearProps: "all"
      }, "-=0.4");
    }, pageRef);
    return () => ctx.revert();
  }, []);

  // Track or Search change animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".course-card", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        clearProps: "all"
      });

      gsap.from(".outcome-item", {
        x: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
        clearProps: "all"
      });
    }, pageRef);
    return () => ctx.revert();
  }, [activeTrack, searchQuery]);

  const tracks = [
    { id: "agriculture", label: t("courses.tracks.agriculture.title"), icon: "🌾" },
    { id: "wellness", label: t("courses.tracks.wellness.title"), icon: "🧘" },
    { id: "data-tech", label: t("courses.tracks.data_tech.title"), icon: "💻" },
    { id: "design-media", label: t("courses.tracks.design_media.title"), icon: "🎨" },
  ];

  const filteredCourses = courseDetails[activeTrack]?.filter((course) => {
    const title = t(course.titleKey).toLowerCase();
    const desc = t(course.descKey).toLowerCase();
    const query = searchQuery.toLowerCase();
    return (
      title.includes(query) ||
      desc.includes(query) ||
      course.tags?.some((tag) => tag.toLowerCase().includes(query))
    );
  });

  return (
    <div ref={pageRef} className="bg-cream dark:bg-black min-h-screen pt-32 pb-20 px-[5vw]">
      <div className="max-w-[1280px] mx-auto">
        <header className="mb-16">
          <div className="flex items-center gap-2 text-sm font-medium text-text-muted mb-4 page-header-item">
            <Link to="/" className="hover:text-lime transition-colors">{t("nav.home")}</Link>
            <span>/</span>
            <span className="text-olive dark:text-lime-light">{t("nav.courses")}</span>
          </div>
          <h1 className="page-header-item font-display text-4xl md:text-6xl text-olive dark:text-lime-light font-bold mb-6">
            {t("courses_page.detailed_curriculum").split(' ')[0]} <span className="text-lime">{t("courses_page.detailed_curriculum").split(' ')[1]}</span>
          </h1>
          <p className="page-header-item text-lg text-text-muted dark:text-white/70 max-w-2xl leading-relaxed">
            {t("courses.sub")}
          </p>
        </header>

        {/* Seat Availability CTAs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {[
            { campus: t("courses_page.mirik_campus"), seats: "12", color: "from-lime/10 to-transparent" },
            { campus: t("courses_page.plassey_campus"), seats: "8", color: "from-olive/10 to-transparent" }
          ].map((c) => (
            <div key={c.campus} className="campus-cta bg-white dark:bg-zinc-900 p-8 rounded-[24px] border border-border-subtle shadow-sm-custom flex flex-col justify-between group hover:border-lime transition-all relative overflow-hidden">
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${c.color} rounded-bl-full opacity-50 group-hover:scale-110 transition-transform`} />
              <div className="relative z-10">
                <h3 className="font-display text-2xl text-olive dark:text-lime-light font-bold mb-2">{c.campus}</h3>
                <p className="text-text-muted dark:text-white/60 mb-6">{t("centers.subtitle")}</p>
              </div>
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-3xl font-display font-bold text-lime">{c.seats}</span>
                  <span className="text-[0.65rem] font-bold uppercase tracking-widest text-text-muted">{t("courses_page.seats_left")}</span>
                </div>
                <Link to="/#contact" className="group relative bg-lime text-white px-10 py-3 rounded-xl font-bold hover:bg-olive transition-all shadow-lime hover:shadow-lg-custom hover:-translate-y-0.5 inline-flex items-center justify-center">
                  {t("courses_page.apply_now")}
                  <span className="ml-2 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 font-serif text-lg leading-none">
                    →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Track Selection & Search */}
        <div className="mb-12">
          <div className="track-tabs-container flex flex-wrap items-center justify-between gap-6 border-b border-border-subtle">
            <div className="flex flex-wrap gap-2 md:gap-6 overflow-x-auto scrollbar-hide whitespace-nowrap">
              {tracks.map((track) => (
                <button
                  key={track.id}
                  onClick={() => handleTrackChange(track.id)}
                  className={`pb-4 px-2 font-bold transition-all relative text-sm md:text-base flex items-center gap-2 ${
                    activeTrack === track.id ? "text-lime" : "text-text-muted hover:text-olive"
                  }`}
                >
                  <span className="text-xl md:text-2xl">{track.icon}</span>
                  {track.label}
                  {activeTrack === track.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-lime animate-lineGrow" />
                  )}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="search-container relative w-full md:w-72 pb-4">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t("courses_page.search_placeholder")}
                className="w-full bg-white dark:bg-zinc-900 border border-border-subtle rounded-xl px-4 py-2 text-sm outline-none focus:border-lime focus:ring-4 focus:ring-lime/10 transition-all text-text-dark dark:text-white placeholder:text-text-muted/60"
              />
              <span className="absolute right-4 top-2.5 text-text-muted/50">🔍</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
          {/* Course Grid */}
          <div className="course-grid flex flex-col gap-12 items-start">
            {filteredCourses && filteredCourses.length > 0 ? (
              <>
                {/* Foundation Section */}
                {filteredCourses.some(c => c.level === "Foundation") && (
                  <div className="w-full">
                    <h2 className="font-display text-2xl text-olive dark:text-lime-light font-bold mb-8 flex items-center gap-4">
                      <span className="w-8 h-px bg-lime" />
                      {t("courses.foundation_label")}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {filteredCourses.filter(c => c.level === "Foundation").map((course) => (
                        <CourseCard key={course.id} course={course} t={t} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Advance Section */}
                {filteredCourses.some(c => c.level === "Advance") && (
                  <div className="w-full">
                    <h2 className="font-display text-2xl text-olive dark:text-lime-light font-bold mb-8 flex items-center gap-4">
                      <span className="w-8 h-px bg-lime" />
                      {t("courses.advance_label")}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {filteredCourses.filter(c => c.level === "Advance").map((course) => (
                        <CourseCard key={course.id} course={course} t={t} />
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="w-full py-20 text-center bg-white dark:bg-zinc-900 rounded-[24px] border border-dashed border-border-subtle">
                <p className="text-text-muted dark:text-white/60 font-medium mb-4">
                  {t("courses_page.no_results")}
                </p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-lime font-bold hover:text-olive transition-colors underline underline-offset-4"
                >
                  {t("courses_page.clear_search")}
                </button>
              </div>
            )}
          </div>

          {/* Sidebar - Track Overview, Outcomes & How to Apply */}
          <aside className="flex flex-col gap-8">
            <div className="sidebar-item bg-white dark:bg-zinc-900 p-8 rounded-[24px] border border-border-subtle shadow-sm-custom">
              <h4 className="font-display text-lg text-olive dark:text-lime-light font-bold mb-4">
                {t(`courses.tracks.${activeTrack.replace('-', '_')}.title`)}
              </h4>
              <p className="text-sm text-text-muted dark:text-white/60 leading-relaxed">
                {t(`courses.tracks.${activeTrack.replace('-', '_')}.subtitle`)}
              </p>
            </div>

            <div className="sidebar-item bg-olive text-white p-8 rounded-[24px] shadow-lg-custom">
              <h4 className="font-display text-lg font-bold mb-6 flex items-center gap-3">
                <span className="text-2xl">🎯</span> {t("courses_page.outcomes_title")}
              </h4>
              <ul className="flex flex-col gap-4">
                {(t(`courses.tracks.${activeTrack.replace('-', '_')}.outcomes`, { returnObjects: true }) as string[])?.map((outcome, i) => (
                  <li key={i} className="outcome-item flex items-start gap-3 text-sm font-medium text-white/90">
                    <span className="text-lime mt-0.5">✓</span> {outcome}
                  </li>
                ))}
              </ul>
            </div>

            <div className="sidebar-item bg-white dark:bg-zinc-900 p-8 rounded-[24px] border border-border-subtle shadow-sm-custom">
              <h4 className="font-display text-lg text-olive dark:text-lime-light font-bold mb-6">
                {t("courses_page.how_to_apply")}
              </h4>
              <div className="flex flex-col gap-6">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-lime/10 text-lime flex items-center justify-center font-bold text-sm">
                      {step}
                    </span>
                    <p className="text-xs text-text-muted dark:text-white/60 leading-relaxed">
                      {t(`courses_page.step${step}`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* General Information Section */}
        <div className="mt-24 pt-16 border-t border-border-subtle">
          <h2 className="info-card font-display text-3xl text-olive dark:text-lime-light font-bold mb-12 text-center">
            {t("courses_page.general_info_title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: t("courses_page.eligibility_title"), desc: t("courses_page.eligibility_desc"), icon: "👥" },
              { title: t("courses_page.fees_title"), desc: t("courses_page.fees_desc"), icon: "💰" },
              { title: t("courses_page.cert_title"), desc: t("courses_page.cert_desc"), icon: "📜" }
            ].map((info, i) => (
              <div key={i} className="info-card bg-white dark:bg-zinc-900 p-8 rounded-[24px] border border-border-subtle shadow-sm-custom hover:border-lime transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-lime/10 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                  {info.icon}
                </div>
                <h4 className="font-display text-xl text-olive dark:text-lime-light font-bold mb-4">{info.title}</h4>
                <p className="text-sm text-text-muted dark:text-white/60 leading-relaxed">
                  {info.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
