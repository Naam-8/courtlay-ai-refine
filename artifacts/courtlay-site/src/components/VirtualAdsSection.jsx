import { useEffect, useRef } from "react";
import GridBackground from "./GridBackground";
import { IMAGES } from "../constants";

export default function VirtualAdsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const id = "va-keyframes";
    if (!document.getElementById(id)) {
      const s = document.createElement("style");
      s.id = id;
      s.textContent = `
        @keyframes va-reveal {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .va-el { opacity: 0; }
        .va-el.animated { animation: va-reveal 0.7s cubic-bezier(0.22,1,0.36,1) forwards; }
        .va-card {
          transition: box-shadow 0.35s ease, transform 0.35s ease;
        }
        .va-card:hover { transform: translateY(-4px); }
      `;
      document.head.appendChild(s);
    }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".va-el").forEach((el, i) => {
            el.style.animationDelay = `${i * 0.1}s`;
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
    <section id="virtual-ads" className="bg-black overflow-hidden relative">
      <GridBackground />
      <div ref={sectionRef} className="relative z-10 px-4 py-16 sm:px-6 sm:py-20 lg:px-16 lg:py-28 max-w-7xl mx-auto">

        {/* Header */}
        <div className="va-el max-w-2xl mx-auto text-center mb-16 sm:mb-20">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-bright-green/60 mb-4">Side by side</p>
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1]">
            How{" "}
            <span className="font-serif italic text-bright-green">Courtlay</span>{" "}
            works
          </h2>
          <p className="mt-5 font-sans text-sm sm:text-base text-white/45 leading-relaxed max-w-xl mx-auto">
            Compare the original live broadcast with Courtlay's brand-integrated feed — sponsor assets blended natively into the court surface.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-start">

          {/* Original */}
          <div className="va-el va-card relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black shadow-xl">
            <img className="h-full w-full object-cover opacity-85" src={IMAGES.compWithoutAd} alt="Original broadcast" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-sans text-[10px] font-bold tracking-[0.14em] uppercase bg-white/10 text-white/70 backdrop-blur-sm border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
                Original broadcast
              </span>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <p className="font-sans text-xs text-white/40">Live feed — no virtual ads</p>
            </div>
          </div>

          {/* Courtlay feed */}
          <div className="va-el va-card relative aspect-video rounded-2xl overflow-hidden border border-bright-green/35 bg-bright-green/5 shadow-[0_0_50px_rgba(255,107,107,0.2)]">
            <img className="h-full w-full object-cover" src={IMAGES.compWithAd} alt="Courtlay virtual feed" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-sans text-[10px] font-bold tracking-[0.14em] uppercase bg-bright-green text-black backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-black/40" style={{ animation: "badge-pulse 2s ease-in-out infinite", borderRadius: "50%" }} />
                Courtlay virtual feed
              </span>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <p className="font-sans text-xs text-white/60">Brand-integrated · Synchronized to play</p>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="va-el mt-10 flex items-center justify-center gap-3">
          <div className="h-px flex-1 max-w-24 bg-white/10" />
          <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-white/25 text-center">
            Zero disruption to the live production workflow
          </p>
          <div className="h-px flex-1 max-w-24 bg-white/10" />
        </div>
      </div>
    </section>
  );
}
