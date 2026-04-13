import { useEffect, useRef } from "react";
import { IMAGES } from "../constants";
import GridBackground from "./GridBackground";

const SPORTS = ["Tennis", "Padel", "Squash", "Table Tennis", "Badminton", "Pickleball"];

const FEATURES = [
  { label: "Real-time surface mapping", desc: "Every court zone identified and tracked across each frame of the live feed." },
  { label: "Multi-sport adaptability", desc: "From padel glass walls to squash backboards — each sport's geometry understood natively." },
  { label: "Regional feed splitting", desc: "One match, many markets. Different sponsors per territory, synchronized to play." },
];

function Marquee() {
  const repeated = [...SPORTS, ...SPORTS, ...SPORTS, ...SPORTS];
  return (
    <div className="relative overflow-hidden py-5 border-y border-white/[0.07]">
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-black to-transparent" />
      <div
        className="flex gap-0 whitespace-nowrap"
        style={{ animation: "marquee-scroll 22s linear infinite", width: "max-content" }}
      >
        {repeated.map((sport, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="font-sans text-sm sm:text-base font-semibold tracking-[0.06em] text-white/25 px-6 sm:px-8 uppercase">
              {sport}
            </span>
            <span className="text-bright-green/40 text-xs select-none">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SportsCoverageSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const id = "sports-keyframes";
    if (!document.getElementById(id)) {
      const style = document.createElement("style");
      style.id = id;
      style.textContent = `
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes card-in-back {
          from { opacity: 0; transform: rotate(-10deg) translate(-60px, 60px) scale(0.88); }
          to   { opacity: 1; transform: rotate(-7deg)  translate(-28px, 36px) scale(0.91); }
        }
        @keyframes card-in-mid {
          from { opacity: 0; transform: rotate(0deg) translate(-30px, 20px) scale(0.9); }
          to   { opacity: 1; transform: rotate(-2deg) translate(-12px, 16px) scale(0.95); }
        }
        @keyframes card-in-front {
          from { opacity: 0; transform: rotate(6deg) translate(30px, -20px) scale(0.9); }
          to   { opacity: 1; transform: rotate(3deg)  translate(10px,  -8px) scale(1); }
        }
        @keyframes text-reveal {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes line-grow {
          from { width: 0; opacity: 0; }
          to   { width: 40px; opacity: 1; }
        }
        .stack-card-back  { opacity: 0; }
        .stack-card-mid   { opacity: 0; }
        .stack-card-front { opacity: 0; }
        .stack-card-back.animated  { animation: card-in-back  0.8s cubic-bezier(0.22,1,0.36,1) 0.1s forwards; }
        .stack-card-mid.animated   { animation: card-in-mid   0.8s cubic-bezier(0.22,1,0.36,1) 0.25s forwards; }
        .stack-card-front.animated { animation: card-in-front 0.8s cubic-bezier(0.22,1,0.36,1) 0.42s forwards; }
        .reveal-text { opacity: 0; }
        .reveal-text.animated { animation: text-reveal 0.7s cubic-bezier(0.22,1,0.36,1) forwards; }
        .reveal-line { width: 0; opacity: 0; }
        .reveal-line.animated { animation: line-grow 0.6s cubic-bezier(0.22,1,0.36,1) forwards; }

        .feature-row {
          transition: border-color 0.25s ease;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .feature-row:hover {
          border-color: rgba(255,107,107,0.25);
        }
        .feature-dot {
          transition: transform 0.3s ease, background-color 0.3s ease;
        }
        .feature-row:hover .feature-dot {
          transform: scale(1.4);
          background-color: rgb(255 107 107);
        }
      `;
      document.head.appendChild(style);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            // Animate stack cards
            el.querySelectorAll(".stack-card-back, .stack-card-mid, .stack-card-front").forEach((card) => {
              card.classList.add("animated");
            });
            // Animate text elements with staggered delays
            el.querySelectorAll(".reveal-text").forEach((t, i) => {
              t.style.animationDelay = `${0.55 + i * 0.12}s`;
              t.classList.add("animated");
            });
            el.querySelectorAll(".reveal-line").forEach((l) => {
              l.style.animationDelay = "0.6s";
              l.classList.add("animated");
            });
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="court-gallery" className="bg-black overflow-hidden relative">
      <GridBackground />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ── Ticker ── */}
        <div className="pt-14 sm:pt-18 lg:pt-22">
          <Marquee />
        </div>

        {/* ── Main split layout ── */}
        <div
          ref={sectionRef}
          className="px-4 pt-16 pb-20 sm:px-6 sm:pt-20 sm:pb-28 lg:px-16 lg:pt-24 lg:pb-32
                     grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center"
        >

          {/* Left — stacked cards */}
          <div className="relative flex items-center justify-center" style={{ minHeight: "420px" }}>

            {/* Back card */}
            <div
              className="stack-card-back absolute w-[78%] sm:w-[72%] rounded-2xl overflow-hidden shadow-2xl"
              style={{ transformOrigin: "bottom center", zIndex: 1 }}
            >
              <div className="relative" style={{ paddingBottom: "68%" }}>
                <img
                  src={IMAGES.openCourt}
                  alt="Court"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60" />
              </div>
            </div>

            {/* Mid card */}
            <div
              className="stack-card-mid absolute w-[78%] sm:w-[72%] rounded-2xl overflow-hidden shadow-2xl"
              style={{ transformOrigin: "bottom center", zIndex: 2 }}
            >
              <div className="relative" style={{ paddingBottom: "68%" }}>
                <img
                  src={IMAGES.padel}
                  alt="Padel"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>
            </div>

            {/* Front card — fully visible, with badge */}
            <div
              className="stack-card-front relative w-[78%] sm:w-[72%] rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.8)] border border-white/10"
              style={{ transformOrigin: "bottom center", zIndex: 3 }}
            >
              <div className="relative" style={{ paddingBottom: "68%" }}>
                <img
                  src={IMAGES.openCourt}
                  alt="Court environment"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-bright-green text-black font-sans text-[10px] font-bold tracking-[0.15em] uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-black/40 inline-block" />
                    Live ready
                  </span>
                </div>

                {/* Bottom label */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-bright-green font-bold mb-1">
                    Padel · Squash · Table Tennis
                  </p>
                  <p className="font-sans text-white text-sm font-medium leading-snug max-w-[240px]">
                    Every surface, mapped for broadcast-native brand integration
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative glow beneath */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-24 rounded-full blur-3xl pointer-events-none"
              style={{ background: "rgba(255,107,107,0.12)", zIndex: 0 }}
            />
          </div>

          {/* Right — text content */}
          <div className="flex flex-col gap-8">

            {/* Overline */}
            <div
              className="reveal-line h-px bg-bright-green"
              style={{ width: 0 }}
            />

            {/* Heading */}
            <div>
              <p className="reveal-text font-sans text-[10px] tracking-[0.3em] uppercase text-bright-green/60 mb-4">
                Built for every court
              </p>
              <h2
                className="reveal-text font-sans text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.1]"
                style={{ animationDelay: "0.62s" }}
              >
                Virtual advertising{" "}
                <span className="font-serif italic text-bright-green">across</span>{" "}
                every racquet sport
              </h2>
            </div>

            {/* Description */}
            <p
              className="reveal-text font-sans text-muted text-base sm:text-lg leading-relaxed max-w-md"
              style={{ animationDelay: "0.72s" }}
            >
              Courtlay's surface intelligence adapts to the unique geometry of
              each racquet sport — glass, mesh, baseline, backboard — turning
              every venue into a precision ad platform.
            </p>

            {/* Feature rows */}
            <div className="flex flex-col">
              {FEATURES.map((f, i) => (
                <div
                  key={f.label}
                  className="reveal-text feature-row flex items-start gap-4 py-4 cursor-default"
                  style={{ animationDelay: `${0.82 + i * 0.1}s` }}
                >
                  <div className="feature-dot mt-1.5 w-2 h-2 rounded-full bg-bright-green/50 shrink-0" />
                  <div>
                    <p className="font-sans text-sm font-bold text-white mb-0.5">{f.label}</p>
                    <p className="font-sans text-xs text-white/45 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div
              className="reveal-text"
              style={{ animationDelay: "1.12s" }}
            >
              <a
                href="#join"
                className="inline-flex items-center gap-3 group"
              >
                <span className="font-sans text-sm font-semibold text-bright-green group-hover:text-light-green transition-colors">
                  Talk to our team
                </span>
                <span
                  className="h-px bg-bright-green/50 transition-all duration-400 group-hover:w-10 group-hover:bg-bright-green"
                  style={{ width: "24px" }}
                />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
