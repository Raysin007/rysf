import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Chart from "chart.js/auto";
import gsap from "gsap";

export default function DonationDashboard() {
  const { t } = useTranslation();
  const pageRef = useRef<HTMLDivElement>(null);
  const trendChartRef = useRef<HTMLCanvasElement>(null);
  const breakdownChartRef = useRef<HTMLCanvasElement>(null);
  const trendChartInstance = useRef<Chart | null>(null);
  const breakdownChartInstance = useRef<Chart | null>(null);

  const formatINR = (num: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(num);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } });

      tl.from(".dash-header", { y: 20, opacity: 0 })
        .from(".dash-metric-card", {
          y: 30,
          opacity: 0,
          stagger: 0.1,
          clearProps: "all"
        }, "-=0.5")
        .from(".dash-main-card", {
          y: 40,
          opacity: 0,
          stagger: 0.15,
          clearProps: "all"
        }, "-=0.6")
        .from(".dash-donor-row", {
          x: -20,
          opacity: 0,
          stagger: 0.05,
          duration: 0.5,
          clearProps: "all"
        }, "-=0.4");
    }, pageRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const isDarkMode = () => document.documentElement.getAttribute("data-theme") === "dark";

    const getGridColor = () => isDarkMode() ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)";
    const getTextColor = () => isDarkMode() ? "#a1a1aa" : "#71717a";

    // Trend Chart
    if (trendChartRef.current) {
      if (trendChartInstance.current) trendChartInstance.current.destroy();

      const ctx = trendChartRef.current.getContext("2d");
      if (ctx) {
        trendChartInstance.current = new Chart(ctx, {
          type: "bar",
          data: {
            labels: [
              t("dashboard.months.jan"),
              t("dashboard.months.feb"),
              t("dashboard.months.mar"),
              t("dashboard.months.apr"),
              t("dashboard.months.may"),
            ],
            datasets: [
              {
                label: t("dashboard.trend.one_time"),
                data: [65000, 72000, 91000, 86000, 105000],
                backgroundColor: "#639922",
                borderRadius: 4,
              },
              {
                label: t("dashboard.trend.recurring"),
                data: [43000, 49000, 57000, 62000, 73000],
                backgroundColor: "#1D9E75",
                borderRadius: 4,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: {
                backgroundColor: isDarkMode() ? "#18181b" : "#fff",
                titleColor: isDarkMode() ? "#fff" : "#18181b",
                bodyColor: isDarkMode() ? "#a1a1aa" : "#71717a",
                borderColor: isDarkMode() ? "#27272a" : "#e4e4e7",
                borderWidth: 1,
                padding: 10,
                displayColors: true,
                callbacks: {
                  label: (context) => ` ${context.dataset.label}: ${formatINR(context.raw as number)}`,
                },
              },
            },
            scales: {
              x: {
                stacked: true,
                grid: { display: false },
                ticks: { color: getTextColor(), font: { size: 11, weight: 'bold' } },
              },
              y: {
                stacked: true,
                grid: {
                  color: getGridColor(),
                  // @ts-ignore
                  drawBorder: false
                },
                ticks: {
                  color: getTextColor(),
                  font: { size: 10, weight: 'bold' },
                  callback: (value) => `₹${Number(value) / 1000}k`,
                },
              },
            },
          },
        });
      }
    }

    // Breakdown Chart
    if (breakdownChartRef.current) {
      if (breakdownChartInstance.current) breakdownChartInstance.current.destroy();

      const ctx = breakdownChartRef.current.getContext("2d");
      if (ctx) {
        breakdownChartInstance.current = new Chart(ctx, {
          type: "doughnut",
          data: {
            labels: [t("dashboard.trend.one_time"), t("dashboard.trend.recurring")],
            datasets: [
              {
                data: [58, 42],
                backgroundColor: ["#639922", "#1D9E75"],
                borderWidth: 0,
                hoverOffset: 4,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: "68%",
            plugins: {
              legend: { display: false },
              tooltip: {
                backgroundColor: isDarkMode() ? "#18181b" : "#fff",
                titleColor: isDarkMode() ? "#fff" : "#18181b",
                bodyColor: isDarkMode() ? "#a1a1aa" : "#71717a",
                borderColor: isDarkMode() ? "#27272a" : "#e4e4e7",
                borderWidth: 1,
                padding: 10,
                callbacks: {
                  label: (context) => ` ${context.label}: ${context.raw}%`,
                },
              },
            },
          },
        });
      }
    }

    // Theme observer
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "data-theme") {
          const dark = isDarkMode();
          if (trendChartInstance.current) {
            // @ts-ignore
            trendChartInstance.current.options.scales.x.ticks.color = dark ? "#a1a1aa" : "#71717a";
            // @ts-ignore
            trendChartInstance.current.options.scales.y.grid.color = dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)";
            // @ts-ignore
            trendChartInstance.current.options.scales.y.ticks.color = dark ? "#a1a1aa" : "#71717a";
            trendChartInstance.current.update();
          }
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => {
      if (trendChartInstance.current) trendChartInstance.current.destroy();
      if (breakdownChartInstance.current) breakdownChartInstance.current.destroy();
      observer.disconnect();
    };
  }, [i18n.language]);

  return (
    <div ref={pageRef} className="bg-[#fafafa] dark:bg-zinc-950 min-h-screen pt-32 pb-20 px-[5vw] text-zinc-900 dark:text-zinc-100 transition-colors">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-8">

        {/* Top Bar */}
        <div className="dash-header flex flex-col md:flex-row md:items-end justify-between gap-6 mb-2">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-1">{t("dashboard.title")}</h1>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium">{t("dashboard.meta")}</p>
          </div>
          <button className="bg-[#27500A] text-[#C0DD97] px-6 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 transition-all flex items-center justify-center gap-2 w-full md:w-auto">
            <span className="text-lg leading-none">+</span> {t("dashboard.record")}
          </button>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { label: t("dashboard.metrics.raised"), value: "₹5,68,420", sub: t("dashboard.metrics.vs_last_month", { val: "+12.4%" }), subColor: "text-emerald-600 dark:text-emerald-400" },
            { label: t("dashboard.metrics.donors"), value: "1,284", sub: t("dashboard.metrics.new_this_month", { val: "+87" }), subColor: "text-emerald-600 dark:text-emerald-400" },
            { label: t("dashboard.metrics.avg_gift"), value: "₹4,350", sub: t("dashboard.metrics.vs_last_month", { val: "-3.1%" }), subColor: "text-rose-600 dark:text-rose-400" },
            { label: t("dashboard.metrics.retention"), value: "71%", sub: t("dashboard.metrics.pts_vs_last_month", { val: "+2" }), subColor: "text-emerald-600 dark:text-emerald-400" },
          ].map((m, i) => (
            <div key={i} className="dash-metric-card bg-[#f5f5f3] dark:bg-zinc-900/50 p-4 md:p-5 rounded-lg border border-zinc-200/50 dark:border-zinc-800 transition-all">
              <p className="text-zinc-500 dark:text-zinc-400 text-[11px] md:text-xs font-bold uppercase tracking-wider mb-2">{m.label}</p>
              <h2 className="text-lg md:text-[22px] font-bold mb-2">{m.value}</h2>
              <p className={`text-[10px] md:text-[11px] font-bold ${m.subColor}`}>{m.sub}</p>
            </div>
          ))}
        </div>

        {/* Middle Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Trend Card */}
          <div className="dash-main-card bg-white dark:bg-zinc-900 p-5 md:p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-sm md:text-base">{t("dashboard.trend.title")}</h3>
              <div className="flex gap-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-sm bg-[#639922]" />
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-tight">{t("dashboard.trend.one_time")}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-sm bg-[#1D9E75]" />
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-tight">{t("dashboard.trend.recurring")}</span>
                </div>
              </div>
            </div>
            <div className="h-[140px] md:h-[180px] w-full text-zinc-400 dark:text-zinc-600">
              <canvas ref={trendChartRef} />
            </div>
          </div>

          {/* Goal Card */}
          <div className="dash-main-card bg-white dark:bg-zinc-900 p-5 md:p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 flex flex-col gap-6">
            <div>
              <h3 className="font-bold text-sm md:text-base mb-4">{t("dashboard.goal.title")}</h3>
              <h2 className="text-3xl font-bold mb-1">₹5,68,420</h2>
              <p className="text-zinc-500 dark:text-zinc-400 text-xs font-medium">{t("dashboard.goal.status", { percent: 68, goal: "₹8,50,000" })}</p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="w-full h-3 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-600 rounded-full" style={{ width: '68%' }} />
              </div>
              <div className="flex justify-between text-[11px] font-bold text-zinc-500">
                <span>{t("dashboard.goal.days_left", { days: 18 })}</span>
                <span>{t("dashboard.goal.to_go", { amount: "₹2,81,580" })}</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-2">
              {[
                { name: t("dashboard.goal.education"), color: "bg-[#639922]", progress: "82%" },
                { name: t("dashboard.goal.health"), color: "bg-[#1D9E75]", progress: "55%" },
                { name: t("dashboard.goal.community"), color: "bg-[#EF9F27]", progress: "38%" },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${c.color}`} />
                  <span className="text-[11px] font-bold flex-1">{c.name}</span>
                  <div className="w-[60px] md:w-[80px] h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <div className={`h-full ${c.color} rounded-full`} style={{ width: c.progress }} />
                  </div>
                  <span className="text-[10px] font-bold text-zinc-500 w-8 text-right">{c.progress}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Donors Card */}
          <div className="dash-main-card bg-white dark:bg-zinc-900 p-5 md:p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 flex flex-col gap-6">
            <h3 className="font-bold text-sm md:text-base">{t("dashboard.donors.title")}</h3>
            <div className="flex flex-col gap-5">
              {[
                { initials: "AM", name: "Amara Mensah", time: t("dashboard.donors.time_ago", { val: "2 min" }), type: t("dashboard.trend.recurring"), amount: "₹4,100/mo", bg: "bg-emerald-100 text-emerald-900" },
                { initials: "RK", name: "Raj Kapoor", time: t("dashboard.donors.time_ago", { val: "18 min" }), type: t("dashboard.trend.one_time"), amount: "₹16,500", bg: "bg-blue-100 text-blue-900" },
                { initials: "SC", name: "Sofia Chen", time: t("dashboard.donors.time_ago", { val: "1 hr" }), type: t("dashboard.trend.recurring"), amount: "₹2,050/mo", bg: "bg-amber-100 text-amber-900" },
                { initials: "LN", name: "Liam Nwosu", time: t("dashboard.donors.time_ago", { val: "3 hrs" }), type: t("dashboard.trend.one_time"), amount: "₹8,200", bg: "bg-rose-100 text-rose-900" },
                { initials: "YP", name: "Yuki Park", time: t("dashboard.donors.time_ago", { val: "5 hrs" }), type: t("dashboard.trend.one_time"), amount: "₹6,150", bg: "bg-purple-100 text-purple-900" },
              ].map((d, i) => (
                <div key={i} className="dash-donor-row flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 ${d.bg}`}>
                    {d.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold truncate">{d.name}</p>
                    <div className="flex items-center gap-2 text-[10px] text-zinc-500 font-medium">
                      <span>{d.time}</span>
                      <span>•</span>
                      <span>{d.type}</span>
                    </div>
                  </div>
                  <div className="text-xs font-bold tabular-nums">
                    {d.amount}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Breakdown Card */}
          <div className="dash-main-card bg-white dark:bg-zinc-900 p-5 md:p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-sm md:text-base">{t("dashboard.breakdown.title")}</h3>
              <div className="flex gap-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-sm bg-[#639922]" />
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-tight">{t("dashboard.trend.one_time")}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-sm bg-[#1D9E75]" />
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-tight">{t("dashboard.trend.recurring")}</span>
                </div>
              </div>
            </div>
            <div className="relative h-[220px] md:h-[260px] flex items-center justify-center">
              <canvas ref={breakdownChartRef} />
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pb-2">
                <span className="text-zinc-400 dark:text-zinc-500 text-[10px] font-bold uppercase tracking-widest">{t("dashboard.breakdown.total")}</span>
                <span className="text-2xl font-bold">100%</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        canvas {
          color: inherit;
        }
        @media (prefers-color-scheme: dark) {
          .chart-grid-lines {
            color: rgba(255,255,255,0.05);
          }
        }
      `}</style>
    </div>
  );
}
