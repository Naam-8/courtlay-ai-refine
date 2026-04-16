export default function CtaSection() {
  return (
    <section id="cta" style={{ background: "#0d0d0d" }} className="relative overflow-hidden">

      {/* Subtle red radial glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden>
        <div
          style={{
            width: "600px", height: "400px",
            background: "radial-gradient(ellipse at center, rgba(232,25,44,0.1) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 px-4 py-20 sm:px-6 sm:py-28 lg:px-16 lg:py-36 max-w-7xl mx-auto text-center">
        <p className="font-sans text-[11px] tracking-[0.35em] uppercase mb-8" style={{ color: "rgba(232,25,44,0.7)" }}>
          Let's build together
        </p>

        <h2
          className="font-sans font-black text-white leading-[1.05] tracking-tight"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "clamp(2.5rem, 7vw, 6rem)",
            textTransform: "uppercase",
          }}
        >
          Ready to transform
          <br />
          <span style={{ color: "#e8192c" }}>your broadcast?</span>
        </h2>

        <p
          className="font-sans text-base sm:text-lg max-w-xl mx-auto mt-8 leading-relaxed"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          Talk to the team about maximizing sponsorship revenue with
          precision virtual advertising — built for racquet sports.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <a
            href="#join"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-sans font-semibold text-sm tracking-wide transition-all duration-300 hover:opacity-90"
            style={{ border: "1.5px solid #e8192c", color: "#e8192c", background: "transparent" }}
            onMouseEnter={e => { e.currentTarget.style.background = "#e8192c"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#e8192c"; }}
          >
            Reach out to us
          </a>

          <a
            href="#solutions"
            className="inline-flex items-center gap-2 font-sans text-sm font-medium transition-colors"
            style={{ color: "rgba(255,255,255,0.4)" }}
            onMouseEnter={e => e.currentTarget.style.color = "#fff"}
            onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.4)"}
          >
            <span>Explore platform</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
