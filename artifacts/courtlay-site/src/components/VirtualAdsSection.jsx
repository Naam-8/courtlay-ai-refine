import { useRef, useState, useCallback, useEffect } from "react";

const ORIGINAL = "/website_frames/comparision/comparision.jpg";
const OVERLAY  = "/website_frames/comparision/comparision_overlay.jpg";

export default function VirtualAdsSection() {
  const containerRef = useRef(null);
  const [sliderPct, setSliderPct] = useState(50); // 0–100
  const [dragging, setDragging] = useState(false);

  const calcPct = useCallback((clientX) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setSliderPct(Math.min(98, Math.max(2, pct)));
  }, []);

  // Mouse
  const onMouseDown = (e) => { e.preventDefault(); setDragging(true); calcPct(e.clientX); };
  const onMouseMove = useCallback((e) => { if (dragging) calcPct(e.clientX); }, [dragging, calcPct]);
  const onMouseUp   = useCallback(() => setDragging(false), []);

  // Touch
  const onTouchStart = (e) => { setDragging(true); calcPct(e.touches[0].clientX); };
  const onTouchMove  = useCallback((e) => { if (dragging) calcPct(e.touches[0].clientX); }, [dragging, calcPct]);
  const onTouchEnd   = useCallback(() => setDragging(false), []);

  useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
      window.addEventListener("touchmove", onTouchMove, { passive: true });
      window.addEventListener("touchend", onTouchEnd);
    }
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [dragging, onMouseMove, onMouseUp, onTouchMove, onTouchEnd]);

  return (
    <section id="virtual-ads" style={{ background: "#f2f2f0" }} className="w-full overflow-hidden">

      {/* ── Section header ── */}
      <div className="px-6 sm:px-10 lg:px-16 pt-16 pb-8 max-w-7xl mx-auto">
        <p
          className="font-sans text-xs font-bold tracking-[0.22em] uppercase mb-3"
          style={{ color: "#e8192c" }}
        >
          Before & After
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
          See the Difference,{" "}
          <span style={{ color: "#e8192c" }}>Live</span>
        </h2>
        <p
          className="mt-3 font-sans text-base max-w-2xl"
          style={{ color: "rgba(13,13,13,0.5)", lineHeight: 1.7 }}
        >
          Drag the slider to compare the original broadcast feed with Courtlay's
          brand-integrated virtual overlay — frame-accurate and seamless.
        </p>
      </div>

      {/* ── Comparison slider ── */}
      <div className="px-6 sm:px-10 lg:px-16 pb-16 max-w-7xl mx-auto">
        <div
          ref={containerRef}
          className="relative w-full overflow-hidden select-none"
          style={{
            borderRadius: "12px",
            boxShadow: "0 24px 80px rgba(0,0,0,0.18)",
            cursor: dragging ? "grabbing" : "col-resize",
            aspectRatio: "16/9",
          }}
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
        >

          {/* ── Original image — full size, always visible underneath ── */}
          <img
            src={ORIGINAL}
            alt="Original broadcast"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            draggable={false}
          />

          {/* ── Overlay image — clipped to show only right side of wiper ── */}
          <img
            src={OVERLAY}
            alt="With Courtlay virtual overlay"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{ clipPath: `inset(0 0 0 ${sliderPct}%)` }}
            draggable={false}
          />

          {/* ── Divider line ── */}
          <div
            className="absolute top-0 bottom-0 w-[2px] pointer-events-none"
            style={{ left: `${sliderPct}%`, background: "#fff", boxShadow: "0 0 12px rgba(0,0,0,0.5)" }}
          />

          {/* ── Drag handle ── */}
          <div
            className="absolute top-1/2 flex items-center justify-center"
            style={{
              left: `${sliderPct}%`,
              transform: "translate(-50%, -50%)",
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              background: "#fff",
              boxShadow: "0 4px 20px rgba(0,0,0,0.35)",
              cursor: dragging ? "grabbing" : "grab",
              zIndex: 10,
              transition: dragging ? "none" : "box-shadow 0.2s ease",
            }}
            onMouseDown={onMouseDown}
            onTouchStart={onTouchStart}
          >
            {/* Arrow icons */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 10l-4 0M7 10l-2.5-2.5M7 10l-2.5 2.5" stroke="#0d0d0d" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13 10l4 0M13 10l2.5-2.5M13 10l2.5 2.5" stroke="#0d0d0d" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* ── Labels ── */}
          {/* Original label */}
          <div className="absolute top-4 left-4" style={{ zIndex: 5, pointerEvents: "none" }}>
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-sans text-[10px] font-bold tracking-[0.14em] uppercase"
              style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.75)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white/50 inline-block" />
              Original
            </span>
          </div>

          {/* Overlay label */}
          <div className="absolute top-4 right-4" style={{ zIndex: 5, pointerEvents: "none" }}>
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-sans text-[10px] font-bold tracking-[0.14em] uppercase"
              style={{ background: "#e8192c", color: "#fff", backdropFilter: "blur(8px)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white/60 inline-block" style={{ animation: "livePulse 2s ease-in-out infinite" }} />
              Courtlay Overlay
            </span>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <div className="h-px flex-1 max-w-24" style={{ background: "rgba(13,13,13,0.12)" }} />
          <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-center" style={{ color: "rgba(13,13,13,0.35)" }}>
            Zero disruption to the live production workflow
          </p>
          <div className="h-px flex-1 max-w-24" style={{ background: "rgba(13,13,13,0.12)" }} />
        </div>
      </div>

      <style>{`
        @keyframes livePulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </section>
  );
}
