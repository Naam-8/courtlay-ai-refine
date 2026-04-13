import { useState } from "react";

const FAQ_ITEMS = [
  {
    question: "How does virtual advertising work in live racquet sports?",
    answer:
      "Courtlay reads the broadcast feed in real time, identifies safe advertising zones around the court, and blends sponsor assets into those surfaces without touching the lines of play or ball trajectory.",
  },
  {
    question: "What does virtual logo replacement look like on court?",
    answer:
      "Logos are rendered directly onto existing surfaces such as backdrops, LED boards, and court-side panels. Perspective, lighting, and motion are matched so the graphics feel native to the venue and broadcast.",
  },
  {
    question: "Can we run different sponsors in different regions?",
    answer:
      "Yes. A single match feed can power multiple output feeds, each with its own sponsor set. This lets you adapt campaigns to markets, languages, and rights packages without re-producing the event.",
  },
  {
    question: "How does Courtlay fit into existing broadcast workflows?",
    answer:
      "Courtlay is designed to sit alongside your existing production stack. We integrate with your chosen cameras and signal path and provide clear tooling for operators, so there is minimal disruption on match day.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="mx-auto bg-white">
      <div className="px-4 py-12 sm:px-6 sm:py-16 lg:px-16 lg:py-20 max-w-5xl mx-auto">
        <h2 className="text-center font-sans text-xl sm:text-2xl lg:text-3xl font-semibold tracking-wide text-black">
          Frequently asked{" "}
          <span className="font-serif italic text-dark-green">questions</span>
        </h2>
        <div className="mt-10 sm:mt-12 divide-y divide-black/10 border-t border-b border-black/10">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = index === openIndex;
            return (
              <button
                key={item.question}
                type="button"
                onClick={() => setOpenIndex((current) => (current === index ? -1 : index))}
                className="w-full text-left"
              >
                <div className="flex items-center justify-between py-4 sm:py-5">
                  <p className="font-sans text-sm sm:text-base text-black/90">{item.question}</p>
                  <span className="font-sans text-xl text-black/60 ml-4 shrink-0">{isOpen ? "−" : "+"}</span>
                </div>
                {isOpen && (
                  <p className="pb-4 sm:pb-5 font-sans text-xs sm:text-sm text-black/70">
                    {item.answer}
                  </p>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
