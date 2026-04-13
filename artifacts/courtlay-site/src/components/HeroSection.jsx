import { useEffect, useRef } from "react";
import BeforeAfterSlider from "./BeforeAfterSlider";

const STATS = [
  { val: "6", label: "Sports" },
  { val: "Live", label: "Integration" },
  { val: "360°", label: "Court surface" },
  { val: "Multi-feed", label: "Regional splits" },
];

export default function HeroSection() {
  const headRef = useRef(null);

  useEffect(() => {
    const id = "hero-keyframes";
    if (!document.getElementById(id)) {
      const s = document.createElement("style");
      s.id = id;
      s.textContent = `
        @keyframes hero-fade-up {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero-line-in {
          from { scaleX: 0; opacity: 0; }
          to   { scaleX: 1; opacity: 1; }
        }
        .hero-el { opacity: 0; animation: hero-fade-up 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
        .hero-el-1 { animation-delay: 0.05s; }
        .hero-el-2 { animation-delay: 0.18s; }
        .hero-el-3 { animation-delay: 0.30s; }
        .hero-el-4 { animation-delay: 0.44s; }
        .hero-el-5 { animation-delay: 0.58s; }
        @keyframes badge-pulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(255,107,107,0.4); }
          50% { box-shadow: 0 0 0 6px rgba(255,107,107,0); }
        }
        .live-dot { animation: badge-pulse 2s ease-in-out infinite; border-radius: 50%; }
      `;
      document.head.appendChild(s);
    }
  }, []);

  return (
    <section id="home" className="pt-8 sm:pt-12 lg:pt-16">

      {/* Desktop layout */}
      <div className="hidden md:block">
        {/* Above-slider headline */}
        <div className="mb-6 flex items-end justify-between gap-6">
          <h1
            ref={headRef}
            className="hero-el hero-el-1 font-sans font-bold text-white leading-[1.0] tracking-tight"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4.2rem)" }}
          >
            Smarter racquet sport
            <br />
            <span className="text-bright-green">broadcasts</span>
          </h1>
          <div className="hero-el hero-el-2 shrink-0 flex flex-col items-end gap-2 pb-1">
            <p className="font-serif italic text-white/55 text-lg leading-snug text-right max-w-xs">
              Virtual ads, built for the court.
            </p>
            <div className="flex items-center gap-2">
              <span className="live-dot w-2 h-2 bg-bright-green inline-block" />
              <span className="font-sans text-[10px] tracking-[0.22em] uppercase text-white/35">Live integration ready</span>
            </div>
          </div>
        </div>

        {/* Slider */}
        <div className="hero-el hero-el-3 relative aspect-video w-full rounded-2xl overflow-hidden border border-bright-green/30 shadow-[0_0_60px_rgba(255,107,107,0.2)]">
          <BeforeAfterSlider />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        {/* CTAs */}
        <div className="hero-el hero-el-4 mt-6 flex items-center gap-4">
          <a
            href="#join"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-bright-green text-black font-sans font-bold text-sm hover:bg-light-green transition-colors"
          >
            Talk to our team
          </a>
          <a
            href="#solutions"
            className="inline-flex items-center gap-2 font-sans text-sm font-medium text-white/55 hover:text-white transition-colors"
          >
            Explore the platform
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Stats strip */}
        <div className="hero-el hero-el-5 mt-10 pt-8 border-t border-white/[0.08] grid grid-cols-4 gap-6">
          {STATS.map(({ val, label }) => (
            <div key={label} className="flex flex-col gap-0.5">
              <p className="font-sans text-xl sm:text-2xl font-bold text-white">{val}</p>
              <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/35">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile layout */}
      <div className="block md:hidden">
        <h1 className="hero-el hero-el-1 font-sans text-4xl font-bold text-white leading-[1.05] tracking-tight">
          Smarter racquet
          <br />
          sport{" "}
          <span className="text-bright-green">broadcasts</span>
        </h1>
        <p className="hero-el hero-el-2 mt-3 font-serif text-white/55 text-base italic max-w-xs">
          Virtual ads, built for the court.
        </p>

        <div className="hero-el hero-el-3 mt-5 flex flex-col gap-3">
          <a
            href="#join"
            className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-bright-green text-black font-sans font-bold text-sm hover:bg-light-green transition-colors"
          >
            Talk to our team
          </a>
          <a
            href="#solutions"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full border border-white/20 text-white font-sans font-medium text-sm hover:border-bright-green/50 transition-colors"
          >
            Explore the platform
          </a>
        </div>

        <div className="hero-el hero-el-4 mt-6 relative aspect-video w-full rounded-2xl overflow-hidden border border-bright-green/30 shadow-[0_0_30px_rgba(255,107,107,0.15)]">
          <BeforeAfterSlider />
        </div>

        <div className="hero-el hero-el-5 mt-8 grid grid-cols-2 gap-4">
          {STATS.map(({ val, label }) => (
            <div key={label} className="flex flex-col gap-0.5">
              <p className="font-sans text-xl font-bold text-white">{val}</p>
              <p className="font-sans text-[10px] tracking-[0.18em] uppercase text-white/35">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
