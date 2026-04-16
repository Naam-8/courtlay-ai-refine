import { useEffect } from "react";

const STATS = [
  { val: "6",          label: "Sports" },
  { val: "Live",       label: "Integration" },
  { val: "360°",       label: "Court surface" },
  { val: "Multi-feed", label: "Regional splits" },
];

export default function HeroSection() {
  useEffect(() => {
    const id = "hero-keyframes";
    if (!document.getElementById(id)) {
      const s = document.createElement("style");
      s.id = id;
      s.textContent = `
        @keyframes hero-fade-up {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-el { opacity: 0; animation: hero-fade-up 0.9s cubic-bezier(0.22,1,0.36,1) forwards; }
        .hero-el-1 { animation-delay: 0.1s; }
        .hero-el-2 { animation-delay: 0.25s; }
        .hero-el-3 { animation-delay: 0.40s; }
        .hero-el-4 { animation-delay: 0.55s; }
        .hero-el-5 { animation-delay: 0.70s; }
        @keyframes live-pulse {
          0%,100% { opacity: 1; }
          50%      { opacity: 0.35; }
        }
        .live-dot { animation: live-pulse 2s ease-in-out infinite; }
      `;
      document.head.appendChild(s);
    }
  }, []);

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      {/* ── Video background ── */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />

      {/* ── Gradient overlay: dark at bottom-left for text legibility ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.25) 100%)",
        }}
      />
      {/* bottom fade for smooth section transition */}
      <div
        className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(242,242,240,0.95) 100%)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col justify-end h-full min-h-[100svh] px-6 pb-16 sm:px-10 lg:px-16 lg:pb-20" style={{ paddingBottom: "6rem" }}>

        {/* Eyebrow badge */}
        <div className="hero-el hero-el-1 mb-5 flex items-center gap-2">
          <span
            className="live-dot inline-block w-2 h-2 rounded-full bg-brand"
            style={{ backgroundColor: "#e8192c" }}
          />
          <span
            className="font-sans text-[11px] tracking-[0.22em] uppercase font-semibold"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Live Integration Ready
          </span>
        </div>

        {/* Main headline */}
        <h1
          className="hero-el hero-el-2 font-display text-white"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 800,
            textTransform: "uppercase",
            lineHeight: 0.95,
            letterSpacing: "-0.01em",
            fontSize: "clamp(2rem, 5.5vw, 5rem)",
            marginBottom: "2.5rem",
          }}
        >
          <span style={{ color: "#e8192c" }}>AI-Powered</span> Virtual
          <br />
          Overlays for{" "}
          <span style={{ color: "#e8192c" }}>Media</span>
          <br />
          Rights Holders
        </h1>

        {/* Sub-headline */}
        <p
          className="hero-el hero-el-3 mt-5 font-sans text-white/60 max-w-lg"
          style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.2rem)", lineHeight: 1.6 }}
        >
          Seamlessly integrate sponsor brands into any racquet sport broadcast — live, frame-accurate, and built for global media rights holders.
        </p>

        {/* CTAs */}
        <div className="hero-el hero-el-4 mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#join"
            className="inline-flex items-center justify-center font-sans font-bold text-sm tracking-widest uppercase transition-all duration-200 hover:opacity-90"
            style={{
              background: "#e8192c",
              color: "#fff",
              padding: "14px 32px",
              borderRadius: "4px",
              letterSpacing: "0.12em",
            }}
          >
            Talk to our team
          </a>
          <a
            href="#solutions"
            className="inline-flex items-center gap-2 font-sans font-semibold text-sm tracking-wide transition-colors duration-200"
            style={{
              color: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(255,255,255,0.25)",
              padding: "13px 28px",
              borderRadius: "4px",
              letterSpacing: "0.06em",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(255,255,255,0.7)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
            }}
          >
            Explore the platform
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Stats strip */}
        <div
          className="hero-el hero-el-5 mt-12 pt-8 grid grid-cols-2 sm:grid-cols-4 gap-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}
        >
          {STATS.map(({ val, label }) => (
            <div key={label} className="flex flex-col gap-1">
              <p
                className="font-display text-white"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                  lineHeight: 1,
                }}
              >
                {val}
              </p>
              <p
                className="font-sans uppercase font-semibold"
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.18em",
                  color: "rgba(255,255,255,0.45)",
                }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
