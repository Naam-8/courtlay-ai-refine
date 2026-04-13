import { useEffect, useRef, useState } from "react";
import { IMAGES } from "../constants";
import GridBackground from "./GridBackground";

const SPORTS = ["Tennis", "Padel", "Squash", "Table Tennis", "Badminton", "Pickleball"];

const CARDS = [
  {
    image: "padel",
    sport: "Padel",
    tag: "01",
    detail: "Active globally",
    caption: "Live match broadcast integration — court surfaces ready for virtual logo placement",
  },
  {
    image: "openCourt",
    sport: "Squash · Table Tennis",
    tag: "02",
    detail: "In development",
    caption: "Sports-specific surface intelligence built for racquet sport environments",
  },
];

const STATS = [
  { value: "6", label: "Racquet sports" },
  { value: "Live", label: "Match integration" },
  { value: "360°", label: "Surface coverage" },
];

function Marquee() {
  const repeated = [...SPORTS, ...SPORTS, ...SPORTS, ...SPORTS];
  return (
    <div className="relative overflow-hidden py-5 border-y border-white/[0.07] my-10 sm:my-14">
      {/* Left fade */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-black to-transparent" />
      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-black to-transparent" />

      <div
        className="flex gap-0 whitespace-nowrap"
        style={{
          animation: "marquee-scroll 22s linear infinite",
          width: "max-content",
        }}
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
    // Inject keyframe if not present
    const id = "marquee-keyframe";
    if (!document.getElementById(id)) {
      const style = document.createElement("style");
      style.id = id;
      style.textContent = `
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .sport-card-img {
          transition: transform 0.75s cubic-bezier(0.22,1,0.36,1);
        }
        .sport-card:hover .sport-card-img {
          transform: scale(1.065);
        }
        .sport-card-line {
          width: 24px;
          transition: width 0.5s ease, background-color 0.5s ease;
        }
        .sport-card:hover .sport-card-line {
          width: 48px;
          background-color: rgb(255 107 107);
        }
        .sport-card-hint {
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .sport-card:hover .sport-card-hint {
          opacity: 0.4;
        }
        .sport-card-ring {
          transition: box-shadow 0.4s ease;
        }
        .sport-card:hover .sport-card-ring {
          box-shadow: inset 0 0 0 1px rgba(255,107,107,0.35);
        }
      `;
      document.head.appendChild(style);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll("[data-reveal]")
              .forEach((el, i) => {
                const delay = Number(el.dataset.delay ?? i * 100);
                setTimeout(() => {
                  el.style.animation = `fade-up 0.65s cubic-bezier(0.22,1,0.36,1) forwards`;
                }, delay);
              });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.07 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const hidden = { opacity: 0, transform: "translateY(28px)" };

  return (
    <section
      id="court-gallery"
      ref={sectionRef}
      className="bg-black overflow-hidden relative"
    >
      <GridBackground />

      <div className="relative z-10 px-4 pt-16 pb-20 sm:px-6 sm:pt-20 sm:pb-24 lg:px-16 lg:pt-28 lg:pb-32 max-w-7xl mx-auto">

        {/* ── Header ── */}
        <div data-reveal data-delay="0" style={hidden}>
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-bright-green/60 mb-5 block">
            Racquet sports covered
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-10">
            <h2 className="font-sans text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-none">
              Courtlay{" "}
              <span className="font-serif italic text-bright-green">at work</span>
            </h2>
            <p className="font-sans text-muted text-base sm:text-lg max-w-sm leading-relaxed lg:text-right lg:pb-1 lg:shrink-0">
              Real court environments across racquet sports —{" "}
              seamlessly enhanced for broadcast.
            </p>
          </div>
        </div>

        {/* ── Sports ticker marquee ── */}
        <div data-reveal data-delay="100" style={hidden}>
          <Marquee />
        </div>

        {/* ── Card grid ── */}
        <div
          data-reveal
          data-delay="200"
          style={hidden}
          className="grid grid-cols-1 lg:grid-cols-5 gap-3 sm:gap-4"
        >
          {/* Large card */}
          <div
            className="sport-card group lg:col-span-3 relative rounded-2xl overflow-hidden cursor-pointer"
            style={{ height: "clamp(260px, 40vw, 520px)" }}
          >
            <div className="sport-card-ring absolute inset-0 z-10 rounded-2xl pointer-events-none" />
            <img
              src={IMAGES[CARDS[0].image]}
              alt={CARDS[0].sport}
              className="sport-card-img w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-transparent" />

            {/* Ghost number */}
            <div className="absolute top-6 right-7 font-sans text-8xl font-black text-white/[0.05] select-none leading-none">
              {CARDS[0].tag}
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
              <div className="flex items-center gap-3 mb-2.5">
                <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-bright-green font-bold">
                  {CARDS[0].sport}
                </span>
                <span className="font-sans text-[10px] text-white/30">
                  — {CARDS[0].detail}
                </span>
              </div>
              <p className="font-sans text-white text-lg sm:text-xl font-semibold max-w-sm leading-snug">
                {CARDS[0].caption}
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="sport-card-line h-px bg-bright-green/35" />
                <span className="sport-card-hint font-sans text-[10px] tracking-widest uppercase text-white">
                  Explore
                </span>
              </div>
            </div>
          </div>

          {/* Small card */}
          <div
            className="sport-card group lg:col-span-2 relative rounded-2xl overflow-hidden cursor-pointer"
            style={{ height: "clamp(220px, 32vw, 520px)" }}
          >
            <div className="sport-card-ring absolute inset-0 z-10 rounded-2xl pointer-events-none" />
            <img
              src={IMAGES[CARDS[1].image]}
              alt={CARDS[1].sport}
              className="sport-card-img w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

            {/* Ghost number */}
            <div className="absolute top-6 right-7 font-sans text-8xl font-black text-white/[0.05] select-none leading-none">
              {CARDS[1].tag}
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
              <div className="flex items-center gap-3 mb-2.5">
                <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-bright-green font-bold">
                  {CARDS[1].sport}
                </span>
                <span className="font-sans text-[10px] text-white/30">
                  — {CARDS[1].detail}
                </span>
              </div>
              <p className="font-sans text-white text-base sm:text-lg font-semibold max-w-xs leading-snug">
                {CARDS[1].caption}
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="sport-card-line h-px bg-bright-green/35" />
                <span className="sport-card-hint font-sans text-[10px] tracking-widest uppercase text-white">
                  Explore
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Stats strip ── */}
        <div
          data-reveal
          data-delay="320"
          style={hidden}
          className="mt-10 sm:mt-12 pt-9 border-t border-white/[0.07] grid grid-cols-3 gap-4"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center group/s">
              <div className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-bright-green tabular-nums transition-transform duration-300 group-hover/s:scale-105 inline-block">
                {stat.value}
              </div>
              <div className="mt-2 font-sans text-xs sm:text-sm text-muted tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
