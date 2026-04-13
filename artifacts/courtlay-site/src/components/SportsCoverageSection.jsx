import { useEffect, useRef, useState, useCallback } from "react";
import GridBackground from "./GridBackground";

const SPORTS_TICKER = ["Tennis", "Padel", "Squash", "Table Tennis", "Badminton", "Pickleball"];

const SPORTS = [
  {
    name: "Tennis",
    tag: "Hard · Clay · Grass",
    status: "Active globally",
    caption: "Full court tracking across all surface types and serve zones",
    image: "/sports/tennis.png",
    color: "#e8c84a",
  },
  {
    name: "Padel",
    tag: "Glass court",
    status: "Active globally",
    caption: "Glass wall & wire mesh surfaces mapped for seamless brand placement",
    image: "/sports/padel.png",
    color: "#ff6b6b",
  },
  {
    name: "Squash",
    tag: "All-glass court",
    status: "Live integration",
    caption: "Front wall, side walls and tin zone — every surface virtualised",
    image: "/sports/squash.png",
    color: "#6beaff",
  },
  {
    name: "Table Tennis",
    tag: "Arena broadcast",
    status: "Live integration",
    caption: "Table, surround boards and backdrop surfaces, frame-accurate",
    image: "/sports/tabletennis.png",
    color: "#a78bfa",
  },
  {
    name: "Badminton",
    tag: "Indoor court",
    status: "In development",
    caption: "Court lines, net zone and back-court banners covered",
    image: "/sports/badminton.png",
    color: "#34d399",
  },
  {
    name: "Pickleball",
    tag: "Outdoor · Indoor",
    status: "In development",
    caption: "Kitchen line, baseline and sideline zones precision-mapped",
    image: "/sports/pickleball.png",
    color: "#fb923c",
  },
];

const FEATURES = [
  { label: "Real-time surface mapping", desc: "Every court zone identified and tracked across each frame of the live feed." },
  { label: "Multi-sport adaptability", desc: "From padel glass walls to squash backboards — each sport's geometry understood natively." },
  { label: "Regional feed splitting", desc: "One match, many markets. Different sponsors per territory, synchronized to play." },
];

const INTERVAL_MS = 3800;

function Marquee() {
  const repeated = [...SPORTS_TICKER, ...SPORTS_TICKER, ...SPORTS_TICKER, ...SPORTS_TICKER];
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

function SportImageShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [prevIdx, setPrevIdx] = useState(null);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);
  const progressRef = useRef(null);
  const startTimeRef = useRef(null);

  const advance = useCallback((nextIdx) => {
    setPrevIdx(activeIdx);
    setActiveIdx(nextIdx);
    setProgress(0);
    startTimeRef.current = performance.now();
  }, [activeIdx]);

  useEffect(() => {
    startTimeRef.current = performance.now();

    const tick = () => {
      const elapsed = performance.now() - startTimeRef.current;
      const pct = Math.min(elapsed / INTERVAL_MS, 1);
      setProgress(pct);
      if (pct >= 1) {
        const next = (activeIdx + 1) % SPORTS.length;
        advance(next);
      } else {
        progressRef.current = requestAnimationFrame(tick);
      }
    };

    progressRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(progressRef.current);
  }, [activeIdx, advance]);

  const handleSelect = (i) => {
    cancelAnimationFrame(progressRef.current);
    clearTimeout(timerRef.current);
    advance(i);
  };

  const sport = SPORTS[activeIdx];

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Main image frame */}
      <div
        className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.7)]"
        style={{ aspectRatio: "4/3" }}
      >
        {/* Previous image (fading out) */}
        {prevIdx !== null && (
          <img
            key={`prev-${prevIdx}`}
            src={SPORTS[prevIdx].image}
            alt={SPORTS[prevIdx].name}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ zIndex: 1, animation: "img-fade-out 0.7s ease forwards" }}
          />
        )}

        {/* Active image (fading in) */}
        <img
          key={`active-${activeIdx}`}
          src={sport.image}
          alt={sport.name}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 2, animation: "img-fade-in 0.7s ease forwards" }}
        />

        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.15) 55%, rgba(0,0,0,0.0) 100%)", zIndex: 3 }}
        />

        {/* Top-left badge */}
        <div className="absolute top-4 left-4 z-10">
          <span
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold font-sans tracking-[0.18em] uppercase"
            style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.12)", color: "#fff" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full inline-block"
              style={{ background: sport.color, boxShadow: `0 0 6px ${sport.color}` }}
            />
            {sport.status}
          </span>
        </div>

        {/* Bottom overlay text */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
          <p
            className="font-sans text-[10px] tracking-[0.22em] uppercase font-bold mb-2"
            style={{ color: sport.color, animation: "caption-in 0.5s ease forwards" }}
            key={`tag-${activeIdx}`}
          >
            {sport.name} · {sport.tag}
          </p>
          <p
            className="font-sans text-white text-sm font-medium leading-snug max-w-[300px]"
            style={{ animation: "caption-in 0.5s ease 0.08s both" }}
            key={`cap-${activeIdx}`}
          >
            {sport.caption}
          </p>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 z-20 h-[2px] bg-white/10">
          <div
            className="h-full transition-none"
            style={{ width: `${progress * 100}%`, background: sport.color }}
          />
        </div>
      </div>

      {/* Sport selector pills */}
      <div className="flex flex-wrap gap-2">
        {SPORTS.map((s, i) => {
          const isActive = i === activeIdx;
          return (
            <button
              key={s.name}
              onClick={() => handleSelect(i)}
              className="font-sans text-[10px] tracking-[0.14em] uppercase font-bold px-3 py-1.5 rounded-full transition-all duration-300"
              style={{
                background: isActive ? sport.color : "rgba(255,255,255,0.06)",
                color: isActive ? "#000" : "rgba(255,255,255,0.45)",
                border: isActive ? `1px solid ${sport.color}` : "1px solid rgba(255,255,255,0.08)",
                transform: isActive ? "scale(1.04)" : "scale(1)",
              }}
            >
              {s.name}
            </button>
          );
        })}
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
          to   { transform: translateX(-50%); }
        }
        @keyframes img-fade-in {
          from { opacity: 0; transform: scale(1.04); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes img-fade-out {
          from { opacity: 1; transform: scale(1); }
          to   { opacity: 0; transform: scale(0.97); }
        }
        @keyframes caption-in {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes text-reveal {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes line-grow {
          from { width: 0; opacity: 0; }
          to   { width: 40px; opacity: 1; }
        }
        .reveal-text { opacity: 0; }
        .reveal-text.animated { animation: text-reveal 0.7s cubic-bezier(0.22,1,0.36,1) forwards; }
        .reveal-line { width: 0; opacity: 0; }
        .reveal-line.animated { animation: line-grow 0.6s cubic-bezier(0.22,1,0.36,1) forwards; }
        .feature-row {
          transition: border-color 0.25s ease;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .feature-row:hover { border-color: rgba(255,107,107,0.25); }
        .feature-dot { transition: transform 0.3s ease, background-color 0.3s ease; }
        .feature-row:hover .feature-dot { transform: scale(1.4); background-color: rgb(255 107 107); }
      `;
      document.head.appendChild(style);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal-text").forEach((t, i) => {
              t.style.animationDelay = `${0.1 + i * 0.1}s`;
              t.classList.add("animated");
            });
            entry.target.querySelectorAll(".reveal-line").forEach((l) => {
              l.style.animationDelay = "0.1s";
              l.classList.add("animated");
            });
            observer.unobserve(entry.target);
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
        {/* Ticker */}
        <div className="pt-14 sm:pt-18 lg:pt-22">
          <Marquee />
        </div>

        {/* Main layout */}
        <div
          ref={sectionRef}
          className="px-4 pt-16 pb-20 sm:px-6 sm:pt-20 sm:pb-28 lg:px-16 lg:pt-24 lg:pb-32
                     grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start"
        >
          {/* Left — animated image showcase */}
          <SportImageShowcase />

          {/* Right — text content */}
          <div className="flex flex-col gap-8 lg:pt-4">
            <div className="reveal-line h-px bg-bright-green" style={{ width: 0 }} />

            <div>
              <p className="reveal-text font-sans text-[10px] tracking-[0.3em] uppercase text-bright-green/60 mb-4">
                Built for every court
              </p>
              <h2 className="reveal-text font-sans text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.1]">
                Virtual advertising{" "}
                <span className="font-serif italic text-bright-green">across</span>{" "}
                every racquet sport
              </h2>
            </div>

            <p className="reveal-text font-sans text-muted text-base sm:text-lg leading-relaxed max-w-md">
              Courtlay's surface intelligence adapts to the unique geometry of
              each racquet sport — glass, mesh, baseline, backboard — turning
              every venue into a precision ad platform.
            </p>

            <div className="flex flex-col">
              {FEATURES.map((f, i) => (
                <div
                  key={f.label}
                  className="reveal-text feature-row flex items-start gap-4 py-4 cursor-default"
                >
                  <div className="feature-dot mt-1.5 w-2 h-2 rounded-full bg-bright-green/50 shrink-0" />
                  <div>
                    <p className="font-sans text-sm font-bold text-white mb-0.5">{f.label}</p>
                    <p className="font-sans text-xs text-white/45 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal-text">
              <a href="#join" className="inline-flex items-center gap-3 group">
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
