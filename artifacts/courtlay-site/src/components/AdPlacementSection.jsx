import { useState, useEffect, useRef, useCallback } from "react";

const IMAGES = [
  "/website_frames/center_court_overlay.jpg",
  "/website_frames/front_wall_overlay.jpg",
  "/website_frames/side_walls_overlay.jpg",
  "/website_frames/sidelines_overlay.jpg",
  "/website_frames/sponsorship_overlay.jpg",
];

const AUTO_INTERVAL = 4000;

export default function AdPlacementSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const timerRef = useRef(null);

  const goTo = useCallback((index) => {
    setDirection(index >= activeIndex ? 1 : -1);
    setActiveIndex(index);
  }, [activeIndex]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % IMAGES.length);
    }, AUTO_INTERVAL);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, [resetTimer]);

  const handleDotClick = (index) => {
    goTo(index);
    resetTimer();
  };

  return (
    <section
      id="solutions"
      style={{ background: "#f2f2f0" }}
      className="w-full overflow-hidden"
    >
      {/* ── Section header ── */}
      <div className="px-6 sm:px-10 lg:px-16 pt-16 pb-8 max-w-7xl mx-auto">
        <p
          className="font-sans text-xs font-bold tracking-[0.22em] uppercase mb-3"
          style={{ color: "#e8192c" }}
        >
          Ad Placement
        </p>
        <h2
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            fontWeight: 900,
            lineHeight: 1,
            color: "#0d0d0d",
            letterSpacing: "-0.01em",
            textTransform: "uppercase",
          }}
        >
          Every Surface of the Court,{" "}
          <span style={{ color: "#e8192c" }}>Monetised</span>
        </h2>
        <p
          className="mt-3 font-sans text-base max-w-2xl"
          style={{ color: "rgba(13,13,13,0.5)", lineHeight: 1.7 }}
        >
          Turn dead court space into live revenue. Every surface, precision-mapped and switchable — per region, per sponsor, per moment.
        </p>
      </div>

      {/* ── Image slider: 80% width, centered ── */}
      <div
        className="relative mx-auto overflow-hidden"
        style={{
          width: "80%",
          height: "72vh",
          minHeight: "460px",
          borderRadius: "12px",
          boxShadow: "0 24px 80px rgba(0,0,0,0.18)",
        }}
      >
        {/* Sliding track — all images side by side */}
        <div
          style={{
            display: "flex",
            height: "100%",
            width: `${IMAGES.length * 100}%`,
            transform: `translateX(-${(activeIndex * 100) / IMAGES.length}%)`,
            transition: "transform 0.55s cubic-bezier(0.77,0,0.18,1)",
          }}
        >
          {IMAGES.map((src, i) => (
            <div
              key={src}
              style={{
                width: `${100 / IMAGES.length}%`,
                height: "100%",
                flexShrink: 0,
              }}
            >
              <img
                src={src}
                alt={`Court overlay ${i + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          ))}
        </div>

        {/* Bottom gradient for dot contrast */}
        <div
          className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 100%)",
          }}
        />

        {/* ── Dot selector — center right ── */}
        <div
          className="absolute right-5 top-1/2 flex flex-col items-center gap-3"
          style={{ transform: "translateY(-50%)" }}
        >
          {IMAGES.map((_, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                aria-label={`Go to image ${i + 1}`}
                style={{
                  width: isActive ? "10px" : "7px",
                  height: isActive ? "10px" : "7px",
                  borderRadius: "9999px",
                  background: isActive ? "#e8192c" : "rgba(255,255,255,0.55)",
                  border: isActive
                    ? "2px solid rgba(255,255,255,0.85)"
                    : "1.5px solid rgba(255,255,255,0.25)",
                  boxShadow: isActive ? "0 0 10px rgba(232,25,44,0.7)" : "none",
                  transition: "all 0.2s ease",
                  cursor: "pointer",
                  padding: 0,
                  flexShrink: 0,
                }}
              />
            );
          })}

          {/* Timer progress bar */}
          <div
            style={{
              width: "2px",
              height: "36px",
              background: "rgba(255,255,255,0.15)",
              borderRadius: "9999px",
              overflow: "hidden",
              marginTop: "4px",
            }}
          >
            <div
              key={activeIndex}
              style={{
                width: "100%",
                height: "100%",
                background: "#e8192c",
                transformOrigin: "top",
                animation: `fillDown ${AUTO_INTERVAL}ms linear forwards`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Bottom spacing */}
      <div style={{ paddingBottom: "4rem" }} />

      <style>{`
        @keyframes fillDown {
          from { transform: scaleY(0); }
          to   { transform: scaleY(1); }
        }
      `}</style>
    </section>
  );
}
