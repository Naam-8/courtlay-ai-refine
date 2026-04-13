import { useState, useEffect, useRef } from "react";
import GridBackground from "./GridBackground";

const FAQ_ITEMS = [
  {
    q: "How does virtual advertising work in live racquet sports?",
    a: "Courtlay reads the broadcast feed in real time, identifies safe advertising zones around the court, and blends sponsor assets into those surfaces without touching the lines of play or ball trajectory.",
  },
  {
    q: "What does virtual logo replacement look like on court?",
    a: "Logos are rendered directly onto existing surfaces such as backdrops, LED boards, and court-side panels. Perspective, lighting, and motion are matched so the graphics feel native to the venue and broadcast.",
  },
  {
    q: "Can we run different sponsors in different regions?",
    a: "Yes. A single match feed can power multiple output feeds, each with its own sponsor set. This lets you adapt campaigns to markets, languages, and rights packages without re-producing the event.",
  },
  {
    q: "How does Courtlay fit into existing broadcast workflows?",
    a: "Courtlay is designed to sit alongside your existing production stack. We integrate with your chosen cameras and signal path and provide clear tooling for operators, so there is minimal disruption on match day.",
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const id = "faq-keyframes";
    if (!document.getElementById(id)) {
      const s = document.createElement("style");
      s.id = id;
      s.textContent = `
        @keyframes faq-reveal {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .faq-item { opacity: 0; }
        .faq-item.animated { animation: faq-reveal 0.6s cubic-bezier(0.22,1,0.36,1) forwards; }
        @keyframes answer-open {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .faq-answer { animation: answer-open 0.3s ease forwards; }
      `;
      document.head.appendChild(s);
    }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".faq-item").forEach((el, i) => {
            el.style.animationDelay = `${i * 0.08}s`;
            el.classList.add("animated");
          });
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="faq" className="bg-black relative overflow-hidden">
      <GridBackground />
      <div ref={sectionRef} className="relative z-10 px-4 py-16 sm:px-6 sm:py-20 lg:px-16 lg:py-28 max-w-7xl mx-auto">

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

          {/* Left label */}
          <div className="lg:sticky lg:top-28 shrink-0 lg:w-64">
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-bright-green/60 mb-4">FAQ</p>
            <h2 className="font-sans text-4xl sm:text-5xl font-bold text-white leading-[1.1]">
              Your{" "}
              <span className="font-serif italic text-bright-green">questions,</span>{" "}
              answered
            </h2>
            <div className="mt-6 h-px w-10 bg-bright-green/40" />
            <p className="mt-6 font-sans text-sm text-white/40 leading-relaxed max-w-xs">
              Everything you need to know about Courtlay's virtual advertising platform.
            </p>
          </div>

          {/* Right accordions */}
          <div className="flex-1 w-full">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = i === openIdx;
              return (
                <div
                  key={item.q}
                  className="faq-item border-b border-white/[0.08] last:border-none"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? -1 : i)}
                    className="w-full text-left flex items-start gap-5 py-6 sm:py-7 group"
                  >
                    <span
                      className="font-sans text-[11px] font-bold tracking-[0.2em] mt-0.5 shrink-0 transition-colors duration-200"
                      style={{ color: isOpen ? "#ff6b6b" : "rgba(255,255,255,0.2)" }}
                    >
                      0{i + 1}
                    </span>
                    <div className="flex-1 flex items-center justify-between gap-4">
                      <p
                        className="font-sans text-base sm:text-lg font-semibold leading-snug transition-colors duration-200"
                        style={{ color: isOpen ? "#ffffff" : "rgba(255,255,255,0.65)" }}
                      >
                        {item.q}
                      </p>
                      <div
                        className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
                        style={{
                          background: isOpen ? "#ff6b6b" : "rgba(255,255,255,0.06)",
                          border: isOpen ? "1px solid #ff6b6b" : "1px solid rgba(255,255,255,0.12)",
                        }}
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path
                            d="M6 2v8M2 6h8"
                            stroke={isOpen ? "#000" : "rgba(255,255,255,0.6)"}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)", transformOrigin: "center", transition: "transform 0.25s ease" }}
                          />
                        </svg>
                      </div>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="faq-answer pl-10 pb-6 sm:pb-7">
                      <p className="font-sans text-sm sm:text-base text-white/55 leading-relaxed max-w-2xl">
                        {item.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
