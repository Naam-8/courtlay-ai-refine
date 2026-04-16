import { useState } from "react";

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

  return (
    <section id="faq" style={{ background: "#f2f2f0" }} className="relative overflow-hidden">
      <div className="px-4 py-16 sm:px-6 sm:py-20 lg:px-16 lg:py-28 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

          {/* Left label */}
          <div className="lg:sticky lg:top-28 shrink-0 lg:w-64">
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase mb-4" style={{ color: "#e8192c" }}>FAQ</p>
            <h2
              className="font-sans font-bold leading-[1.1]"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 900,
                textTransform: "uppercase",
                color: "#0d0d0d",
              }}
            >
              Your questions,{" "}
              <span style={{ color: "#e8192c" }}>answered</span>
            </h2>
            <div className="mt-6 h-px w-10" style={{ background: "rgba(232,25,44,0.35)" }} />
            <p className="mt-6 font-sans text-sm leading-relaxed max-w-xs" style={{ color: "rgba(13,13,13,0.45)" }}>
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
                  className="last:border-none"
                  style={{ borderBottom: "1px solid rgba(13,13,13,0.08)" }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? -1 : i)}
                    className="w-full text-left flex items-start gap-5 py-6 sm:py-7 group"
                  >
                    <span
                      className="font-sans text-[11px] font-bold tracking-[0.2em] mt-0.5 shrink-0 transition-colors duration-200"
                      style={{ color: isOpen ? "#e8192c" : "rgba(13,13,13,0.2)" }}
                    >
                      0{i + 1}
                    </span>
                    <div className="flex-1 flex items-center justify-between gap-4">
                      <p
                        className="font-sans text-base sm:text-lg font-semibold leading-snug transition-colors duration-200"
                        style={{ color: isOpen ? "#0d0d0d" : "rgba(13,13,13,0.6)" }}
                      >
                        {item.q}
                      </p>
                      <div
                        className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
                        style={{
                          background: isOpen ? "#e8192c" : "rgba(13,13,13,0.06)",
                          border: isOpen ? "1px solid #e8192c" : "1px solid rgba(13,13,13,0.1)",
                        }}
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path
                            d="M6 2v8M2 6h8"
                            stroke={isOpen ? "#fff" : "rgba(13,13,13,0.5)"}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)", transformOrigin: "center", transition: "transform 0.25s ease" }}
                          />
                        </svg>
                      </div>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="pl-10 pb-6 sm:pb-7">
                      <p className="font-sans text-sm sm:text-base leading-relaxed max-w-2xl" style={{ color: "rgba(13,13,13,0.5)" }}>
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
