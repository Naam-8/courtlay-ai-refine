import { useEffect, useRef } from "react";
import { IMAGES } from "../constants";
import GridBackground from "./GridBackground";

const GALLERY_ITEMS = [
  {
    image: "padel",
    sport: "Padel",
    tag: "01",
    caption: "Live match broadcast integration — court surfaces ready for virtual logo placement",
    detail: "Active globally",
  },
  {
    image: "openCourt",
    sport: "Squash · Table Tennis",
    tag: "02",
    caption: "Sports-specific surface intelligence built for racquet sport environments",
    detail: "In development",
  },
];

const STATS = [
  { value: "3+", label: "Racquet sports" },
  { value: "Live", label: "Match integration" },
  { value: "360°", label: "Surface coverage" },
];

export default function CourtGallerySection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const targets = sectionRef.current?.querySelectorAll("[data-reveal]");
    if (!targets) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = Number(entry.target.dataset.delay ?? 0);
            setTimeout(() => {
              entry.target.style.opacity = "1";
              entry.target.style.transform = "translateY(0)";
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const revealStyle = (delay = 0) => ({
    opacity: 0,
    transform: "translateY(28px)",
    transition: "opacity 0.65s cubic-bezier(0.22,1,0.36,1), transform 0.65s cubic-bezier(0.22,1,0.36,1)",
    willChange: "opacity, transform",
  });

  return (
    <section
      id="court-gallery"
      ref={sectionRef}
      className="bg-black overflow-hidden relative"
    >
      <GridBackground />

      <div className="relative z-10 px-4 py-16 sm:px-6 sm:py-20 lg:px-16 lg:py-28 max-w-7xl mx-auto">

        {/* ── Header ── */}
        <div
          data-reveal
          data-delay="0"
          style={revealStyle(0)}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-bright-green/60 mb-4 block">
            Real environments
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-none">
              Courtlay{" "}
              <span className="font-serif italic text-bright-green">at work</span>
            </h2>
            <p className="font-sans text-muted text-sm sm:text-base max-w-xs sm:max-w-sm leading-relaxed sm:text-right">
              Real court environments across racquet sports — seamlessly enhanced for broadcast.
            </p>
          </div>
        </div>

        {/* ── Card Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 sm:gap-4">

          {/* Large featured card */}
          <div
            data-reveal
            data-delay="120"
            style={revealStyle(120)}
            className="group lg:col-span-3 relative rounded-2xl overflow-hidden cursor-pointer"
          >
            <div
              className="relative overflow-hidden"
              style={{ height: "clamp(240px, 38vw, 500px)" }}
            >
              <img
                src={IMAGES[GALLERY_ITEMS[0].image]}
                alt={GALLERY_ITEMS[0].sport}
                className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
              />

              {/* Layered overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

              {/* Hover glow ring */}
              <div className="absolute inset-0 ring-1 ring-white/0 group-hover:ring-bright-green/30 rounded-2xl transition-all duration-500" />

              {/* Decorative tag number */}
              <div className="absolute top-6 right-7 font-sans text-6xl sm:text-7xl font-black text-white/[0.06] select-none leading-none">
                {GALLERY_ITEMS[0].tag}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-bright-green font-semibold">
                    {GALLERY_ITEMS[0].sport}
                  </span>
                  <span className="font-sans text-[10px] text-white/30 tracking-wide">
                    — {GALLERY_ITEMS[0].detail}
                  </span>
                </div>
                <p className="font-sans text-white text-base sm:text-lg font-medium max-w-sm leading-snug">
                  {GALLERY_ITEMS[0].caption}
                </p>

                {/* Animated underline accent */}
                <div className="mt-5 flex items-center gap-3">
                  <div className="h-px w-6 bg-bright-green/40 transition-all duration-500 group-hover:w-12 group-hover:bg-bright-green" />
                  <span className="font-sans text-[10px] tracking-widest uppercase text-white/0 group-hover:text-white/40 transition-all duration-500">
                    Learn more
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary card */}
          <div
            data-reveal
            data-delay="220"
            style={revealStyle(220)}
            className="group lg:col-span-2 relative rounded-2xl overflow-hidden cursor-pointer"
          >
            <div
              className="relative overflow-hidden"
              style={{ height: "clamp(200px, 30vw, 500px)" }}
            >
              <img
                src={IMAGES[GALLERY_ITEMS[1].image]}
                alt={GALLERY_ITEMS[1].sport}
                className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute inset-0 ring-1 ring-white/0 group-hover:ring-bright-green/30 rounded-2xl transition-all duration-500" />

              {/* Decorative tag number */}
              <div className="absolute top-6 right-7 font-sans text-6xl sm:text-7xl font-black text-white/[0.06] select-none leading-none">
                {GALLERY_ITEMS[1].tag}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-bright-green font-semibold">
                    {GALLERY_ITEMS[1].sport}
                  </span>
                  <span className="font-sans text-[10px] text-white/30 tracking-wide">
                    — {GALLERY_ITEMS[1].detail}
                  </span>
                </div>
                <p className="font-sans text-white text-sm sm:text-base font-medium max-w-xs leading-snug">
                  {GALLERY_ITEMS[1].caption}
                </p>

                <div className="mt-5 flex items-center gap-3">
                  <div className="h-px w-6 bg-bright-green/40 transition-all duration-500 group-hover:w-10 group-hover:bg-bright-green" />
                  <span className="font-sans text-[10px] tracking-widest uppercase text-white/0 group-hover:text-white/40 transition-all duration-500">
                    Learn more
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Stats strip ── */}
        <div
          data-reveal
          data-delay="340"
          style={revealStyle(340)}
          className="mt-10 sm:mt-12 pt-8 sm:pt-10 border-t border-white/[0.08]"
        >
          <div className="grid grid-cols-3 gap-4 sm:gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center group/stat">
                <div className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold text-bright-green tabular-nums group-hover/stat:scale-105 transition-transform duration-300 inline-block">
                  {stat.value}
                </div>
                <div className="mt-1.5 font-sans text-xs sm:text-sm text-muted tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
