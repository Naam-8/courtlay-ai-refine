import { useEffect, useRef } from "react";

export default function CtaSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const id = "cta-keyframes";
    if (!document.getElementById(id)) {
      const s = document.createElement("style");
      s.id = id;
      s.textContent = `
        @keyframes cta-line-grow { from { width: 0; } to { width: 100%; } }
        @keyframes cta-text-in {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes cta-glow-pulse {
          0%,100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
        .cta-el { opacity: 0; }
        .cta-el.animated { animation: cta-text-in 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
        .cta-btn {
          position: relative; overflow: hidden;
          border: 1.5px solid #ff6b6b;
          color: #ff6b6b;
          background: transparent;
          transition: color 0.35s ease;
        }
        .cta-btn::before {
          content: '';
          position: absolute; inset: 0;
          background: #ff6b6b;
          transform: translateX(-105%);
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1);
          z-index: 0;
        }
        .cta-btn:hover::before { transform: translateX(0); }
        .cta-btn:hover { color: #000; }
        .cta-btn span { position: relative; z-index: 1; }
      `;
      document.head.appendChild(s);
    }

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".cta-el").forEach((el, i) => {
            el.style.animationDelay = `${i * 0.12}s`;
            el.classList.add("animated");
          });
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="cta" className="relative bg-black overflow-hidden">
      {/* Red radial glow */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden
      >
        <div
          style={{
            width: "600px", height: "400px",
            background: "radial-gradient(ellipse at center, rgba(255,107,107,0.13) 0%, transparent 70%)",
            animation: "cta-glow-pulse 5s ease-in-out infinite",
          }}
        />
      </div>

      {/* Top border line */}
      <div className="h-px w-full bg-white/[0.06]" />

      <div
        ref={sectionRef}
        className="relative z-10 px-4 py-20 sm:px-6 sm:py-28 lg:px-16 lg:py-36 max-w-7xl mx-auto text-center"
      >
        <p className="cta-el font-sans text-[11px] tracking-[0.35em] uppercase text-bright-green/60 mb-8">
          Let's build together
        </p>

        <h2
          className="cta-el font-sans font-bold text-white leading-[1.05] tracking-tight"
          style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)", animationDelay: "0.12s" }}
        >
          Ready to transform
          <br />
          <span className="font-serif italic text-bright-green">your broadcast?</span>
        </h2>

        <p
          className="cta-el font-sans text-white/45 text-base sm:text-lg max-w-xl mx-auto mt-8 leading-relaxed"
          style={{ animationDelay: "0.24s" }}
        >
          Talk to the team about maximizing sponsorship revenue with
          precision virtual advertising — built for racquet sports.
        </p>

        <div
          className="cta-el mt-12 flex flex-col sm:flex-row gap-4 items-center justify-center"
          style={{ animationDelay: "0.36s" }}
        >
          <a
            href="#join"
            className="cta-btn inline-flex items-center gap-3 px-10 py-4 rounded-full font-sans font-semibold text-sm tracking-wide"
          >
            <span>Reach out to us</span>
          </a>

          <a
            href="#solutions"
            className="inline-flex items-center gap-2 font-sans text-sm font-medium text-white/40 hover:text-white transition-colors"
          >
            <span>Explore platform</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Decorative stats row */}
        <div
          className="cta-el mt-20 pt-10 border-t border-white/[0.06] grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          style={{ animationDelay: "0.48s" }}
        >
          {[
            { val: "6+", label: "Racquet sports" },
            { val: "40+", label: "Venues covered" },
            { val: "100M+", label: "Broadcast viewers" },
          ].map(({ val, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <p className="font-sans text-2xl sm:text-3xl font-bold text-bright-green">{val}</p>
              <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/35">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom border */}
      <div className="h-px w-full bg-white/[0.06]" />
    </section>
  );
}
