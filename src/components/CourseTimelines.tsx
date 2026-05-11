import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function FoundationTimeline() {
  const { t } = useTranslation();
  const timelineRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      week: t("courses_page.w_0_4"),
      label: t("courses_page.basic_it"),
      desc: t("courses_page.basic_it_desc"),
      type: "phase"
    },
    {
      week: t("courses_page.w_4"),
      label: t("courses_page.mock_test"),
      desc: t("courses_page.mock_test_desc"),
      type: "test"
    },
    {
      week: t("courses_page.w_4_10"),
      label: t("courses_page.subject_expertise"),
      desc: t("courses_page.subject_expertise_desc"),
      type: "phase"
    },
    {
      week: t("courses_page.w_10"),
      label: t("courses_page.final_test"),
      desc: t("courses_page.final_test_desc"),
      type: "test"
    },
    {
      week: t("courses_page.w_12plus"),
      label: t("courses_page.cert_dist"),
      desc: t("courses_page.cert_dist_desc"),
      type: "phase"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 85%",
        }
      });

      tl.from(".connector-line-foundation", {
        scaleX: 0,
        scaleY: 0,
        duration: 1,
        ease: "power2.inOut",
        transformOrigin: "left top"
      })
      .from(".step-item", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out"
      }, "-=0.6");
    }, timelineRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={timelineRef} className="relative">
      {/* Connector Line */}
      <div className="connector-line-foundation absolute
        left-6 lg:left-0
        -translate-x-1/2 lg:translate-x-0
        top-2 lg:top-[11px]
        bottom-2 lg:bottom-auto
        w-[2px] lg:w-full
        lg:h-[2px]
        bg-gray-200 dark:bg-zinc-800"
      />

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-4">
        {steps.map((step, idx) => {
          const isPhase = step.type === "phase";
          return (
            <div key={idx} className="step-item relative pl-12 lg:pl-0 lg:pt-12 flex flex-col items-start lg:items-center lg:flex-1 group">
              {/* Marker */}
              <div className="absolute
                left-6 lg:left-1/2
                top-[0.6rem] lg:top-0
                -translate-x-1/2
                flex items-center justify-center w-6 h-6 z-10 bg-white dark:bg-zinc-900"
              >
                {isPhase ? (
                  <div className="w-3.5 h-3.5 rounded-full bg-[#a3c837] shadow-[0_0_0_6px_rgba(163,200,55,0.08)]" />
                ) : (
                  <div className="w-3 h-3 rotate-45 bg-gray-400" />
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-1 lg:text-center items-start lg:items-center">
                <span
                  className={`text-[11px] font-medium uppercase tracking-[0.1em] ${isPhase ? 'text-[#a3c837]' : 'text-gray-400'}`}
                >
                  {step.week}
                </span>
                <h4 className="text-[13px] font-semibold text-text-dark dark:text-white tracking-tight">
                  {step.label}
                </h4>
                <p className="text-[12px] text-text-muted dark:text-white/40 font-light leading-snug max-w-[200px]">
                  {step.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function AdvancedTimeline() {
  const { t } = useTranslation();
  const timelineRef = useRef<HTMLDivElement>(null);

  const groupedSteps = [
    {
      week: t("courses_page.w_0_6"),
      items: [{ label: t("courses_page.adv_it"), desc: t("courses_page.adv_it_desc"), type: "phase" }]
    },
    {
      week: t("courses_page.w_4"),
      items: [{ label: t("courses_page.mock_test"), desc: t("courses_page.mock_test_desc"), type: "test" }]
    },
    {
      week: t("courses_page.w_6_18"),
      items: [
        { label: t("courses_page.adv_theory"), desc: t("courses_page.adv_theory_desc"), type: "phase" },
        { label: t("courses_page.adv_projects"), desc: t("courses_page.adv_projects_desc"), type: "phase" }
      ]
    },
    {
      week: t("courses_page.w_10"),
      items: [{ label: t("courses_page.theory_mcq"), desc: t("courses_page.theory_mcq_desc"), type: "test" }]
    },
    {
      week: t("courses_page.w_14_18"),
      items: [{ label: t("courses_page.portfolio_build"), desc: t("courses_page.portfolio_build_desc"), type: "phase" }]
    },
    {
      week: t("courses_page.w_16_18"),
      items: [{ label: t("courses_page.portfolio_review"), desc: t("courses_page.portfolio_review_desc"), type: "phase" }]
    },
    {
      week: t("courses_page.w_20"),
      items: [
        { label: t("courses_page.final_test"), desc: t("courses_page.final_test_desc"), type: "test" },
        { label: t("courses_page.mock_interview"), desc: t("courses_page.mock_interview_desc"), type: "test" },
        { label: t("courses_page.portfolio_pres"), desc: t("courses_page.portfolio_pres_desc"), type: "test" }
      ]
    },
    {
      week: t("courses_page.w_24plus"),
      items: [{ label: t("courses_page.cert_dist"), desc: t("courses_page.cert_dist_desc"), type: "phase" }]
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 85%",
        }
      });

      tl.from(".connector-line-advanced", {
        scaleX: 0,
        scaleY: 0,
        duration: 1,
        ease: "power2.inOut",
        transformOrigin: "left top"
      })
      .from(".adv-step-item", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out"
      }, "-=0.6");
    }, timelineRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={timelineRef} className="relative">
      {/* Connector Line */}
      <div className="connector-line-advanced absolute
        left-6 lg:left-0
        -translate-x-1/2 lg:translate-x-0
        top-2 lg:top-[11px]
        bottom-2 lg:bottom-auto
        w-[2px] lg:w-full
        lg:h-[2px]
        bg-gray-200 dark:bg-zinc-800"
      />

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-4">
        {groupedSteps.map((step, idx) => {
          const isPhase = step.items[0].type === "phase";
          return (
            <div key={idx} className="adv-step-item relative pl-12 lg:pl-0 lg:pt-12 flex flex-col items-start lg:items-center lg:flex-1 group">
              {/* Marker */}
              <div className="absolute
                left-6 lg:left-1/2
                top-[0.6rem] lg:top-0
                -translate-x-1/2
                flex items-center justify-center w-6 h-6 z-10 bg-white dark:bg-zinc-900"
              >
                {isPhase ? (
                  <div className="w-3.5 h-3.5 rounded-full bg-[#a3c837] shadow-[0_0_0_6px_rgba(163,200,55,0.08)]" />
                ) : (
                  <div className="w-3 h-3 rotate-45 bg-gray-400" />
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-1 lg:text-center items-start lg:items-center w-full">
                <span
                  className={`text-[11px] font-medium uppercase tracking-[0.1em] ${isPhase ? 'text-[#a3c837]' : 'text-gray-400'}`}
                >
                  {step.week}
                </span>

                <div className="flex flex-col gap-6 lg:items-center w-full">
                  {step.items.map((item, i) => (
                    <div key={i} className="flex flex-col gap-1 lg:items-center">
                      <h4 className="text-[13px] font-semibold text-text-dark dark:text-white tracking-tight">
                        {item.label}
                      </h4>
                      <p className="text-[12px] text-text-muted dark:text-white/40 font-light leading-snug max-w-[200px]">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
