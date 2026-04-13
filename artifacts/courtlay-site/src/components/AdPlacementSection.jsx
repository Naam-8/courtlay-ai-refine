import { useState } from "react";
import { IMAGES } from "../constants";
import GridBackground from "./GridBackground";

const ZONES = [
  {
    id: "glass-facades",
    label: "Glass Facades",
    badge: "GLASS FACADES",
    description:
      "Primary marquee virtual boards rendered directly onto the glass sidelines and rear wall — maximum visibility across every camera angle.",
    image: IMAGES.skeletonPadel,
  },
  {
    id: "court-base",
    label: "Court Base",
    badge: "COURT BASE",
    description:
      "Court base band — full-width branding strip running across the baseline. Highly visible during play and replays.",
    image: IMAGES.skeletonPadel,
  },
  {
    id: "side-panels",
    label: "Side Panels",
    badge: "SIDE PANELS",
    description:
      "Lateral surface zones positioned along the sidelines, ideal for sponsor logos that stay in frame throughout rallies.",
    image: IMAGES.skeletonPadel,
  },
  {
    id: "base-corners",
    label: "Base Corners",
    badge: "BASE CORNERS",
    description:
      "Corner ad placements at the base of the court — subtly reinforcing brand presence without disrupting the field of play.",
    image: IMAGES.skeletonPadel,
  },
  {
    id: "mesh-net",
    label: "Mesh & Net",
    badge: "MESH & NET",
    description:
      "Secondary logo bands rendered across mesh fencing and net bands — clearly visible on camera without competing with play.",
    image: IMAGES.skeletonPadel,
  },
  {
    id: "rear-wall",
    label: "Rear Wall",
    badge: "REAR WALL",
    description:
      "Full rear-wall surface for high-impact branding — the dominant visual backdrop for baseline camera shots.",
    image: IMAGES.skeletonPadel,
  },
];

const FEATURES = [
  {
    title: "Glass facades",
    description:
      "Primary marquee virtual boards along sidelines and baseline.",
  },
  {
    title: "Mesh & structure",
    description:
      "Secondary logo bands that read clearly on camera without competing with play.",
  },
  {
    title: "Surface & net band",
    description:
      "Restrained in-venue marks tied to replays and key moments.",
  },
];

export default function AdPlacementSection() {
  const [activeId, setActiveId] = useState(ZONES[1].id);

  const activeZone = ZONES.find((z) => z.id === activeId) ?? ZONES[0];
  const activeIndex = ZONES.findIndex((z) => z.id === activeId);

  return (
    <section
      id="solutions"
      className="mx-auto bg-black overflow-hidden relative"
    >
      <GridBackground />
      <div className="relative z-10 px-4 py-12 sm:px-6 sm:py-16 lg:px-16 lg:py-20 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-10 sm:mb-12 lg:mb-14">
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Ad{" "}
            <span className="text-bright-green font-serif italic">placement</span>
          </h2>
          <p className="mt-2 sm:mt-3 font-sans text-muted text-base sm:text-lg max-w-2xl">
            Every surface of the court, mapped and ready for virtual brand integration.
          </p>
        </div>

        {/* Main interactive panel */}
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-4 sm:gap-5">

          {/* Left — zone list */}
          <div className="flex flex-col gap-2 order-2 lg:order-1">
            {ZONES.map((zone) => {
              const isActive = zone.id === activeId;
              return (
                <button
                  key={zone.id}
                  type="button"
                  onClick={() => setActiveId(zone.id)}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200
                    ${isActive
                      ? "bg-bright-green/10 border border-bright-green/40"
                      : "bg-white/[0.04] border border-white/[0.07] hover:bg-white/[0.07] hover:border-white/15"
                    }
                  `}
                >
                  {/* Thumbnail */}
                  <div
                    className={`
                      shrink-0 w-14 h-10 rounded-lg overflow-hidden border
                      ${isActive ? "border-bright-green/40" : "border-white/10"}
                    `}
                  >
                    <img
                      src={zone.image}
                      alt={zone.label}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  {/* Label */}
                  <div className="flex-1 min-w-0">
                    <p
                      className={`font-sans text-sm font-semibold leading-snug truncate ${
                        isActive ? "text-white" : "text-white/80"
                      }`}
                    >
                      {zone.label}
                    </p>
                    <p
                      className={`font-sans text-[11px] mt-0.5 ${
                        isActive ? "text-bright-green" : "text-white/35"
                      }`}
                    >
                      {isActive ? "Active zone" : "Click to preview"}
                    </p>
                  </div>

                  {/* Active indicator */}
                  {isActive && (
                    <div className="shrink-0 w-1.5 h-1.5 rounded-full bg-bright-green" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right — preview + description */}
          <div className="flex flex-col gap-4 order-1 lg:order-2">
            {/* Court image */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-950/80 shadow-xl">
              <img
                key={activeId}
                src={activeZone.image}
                alt={activeZone.label}
                className="w-full h-auto object-contain transition-opacity duration-300"
              />
              {/* Zone highlight overlay label */}
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-bright-green text-black font-sans text-[10px] font-bold tracking-[0.15em] uppercase">
                  {activeZone.badge}
                </span>
              </div>
            </div>

            {/* Description + dot nav */}
            <div className="bg-white/[0.04] border border-white/[0.07] rounded-2xl px-5 py-4 sm:px-6 sm:py-5">
              <p className="font-sans text-white/90 text-sm sm:text-base leading-relaxed">
                {activeZone.description}
              </p>
              {/* Dot navigation */}
              <div className="flex items-center gap-1.5 mt-4">
                {ZONES.map((zone, i) => (
                  <button
                    key={zone.id}
                    type="button"
                    onClick={() => setActiveId(zone.id)}
                    aria-label={zone.label}
                    className={`rounded-full transition-all duration-200 ${
                      i === activeIndex
                        ? "w-5 h-1.5 bg-bright-green"
                        : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Feature cards row */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="bg-white/[0.04] border border-white/[0.07] rounded-2xl px-5 py-5 sm:px-6 sm:py-6 flex flex-col gap-3"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-bright-green shrink-0" />
                <h4 className="font-sans text-sm sm:text-base font-bold text-white">
                  {feature.title}
                </h4>
              </div>
              <p className="font-sans text-white/55 text-xs sm:text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
