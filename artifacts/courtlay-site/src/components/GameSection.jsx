import { IMAGES, gameCards } from "../constants";
import GridBackground from "./GridBackground";
import BeforeAfterSlider from "./BeforeAfterSlider";

export default function GameSection() {
  const card = gameCards[0];
  if (!card) return null;

  return (
    <section id="solutions" className="mx-auto bg-black overflow-hidden relative">
      <GridBackground />
      <div className="relative z-10 px-4 py-10 sm:px-6 sm:py-12 lg:px-16 lg:py-20 max-w-7xl mx-auto">
        <div className="mb-10 sm:mb-12 lg:mb-14">
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Platform{" "}
            <span className="text-bright-green font-serif italic">solutions</span>
          </h2>
          <p className="mt-2 sm:mt-3 font-sans text-muted text-base sm:text-lg max-w-2xl">
            Core ways Courtlay creates value for racquet sports broadcasts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 lg:items-start">
          <div className="flex flex-col gap-6 sm:gap-8">
            <div className="relative aspect-video sm:aspect-16/9 rounded-2xl overflow-hidden bg-black/50 border border-white/10 shadow-xl">
              <BeforeAfterSlider beforeSrc={card.beforeSrc} afterSrc={card.afterSrc} />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] bg-gradient-to-t from-black/70 to-transparent pt-12 pb-3 px-4">
                <div className="flex items-center justify-between text-[10px] sm:text-xs font-sans text-white/85">
                  <span className="uppercase tracking-wide font-semibold">Drag to compare</span>
                  <span className="text-white/60 hidden sm:inline">Clean feed · Brand-integrated</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 sm:p-6 lg:p-8 shadow-xl">
              <h3 className="font-sans text-xl sm:text-2xl font-bold text-black">{card.title}</h3>
              <p className="mt-2 sm:mt-3 font-sans text-black/90 text-sm sm:text-base leading-relaxed">{card.description}</p>
            </div>
          </div>

          <div className="flex flex-col gap-6 sm:gap-8">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-950/80 shadow-xl">
              <img
                src={IMAGES.skeletonPadel}
                alt="Padel court diagram highlighting advertising zones"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>

            <div className="bg-white rounded-2xl p-5 sm:p-6 lg:p-8 shadow-xl">
              <h3 className="font-sans text-xl sm:text-2xl font-bold text-black">Surface intelligence</h3>
              <p className="mt-2 sm:mt-3 font-sans text-black/90 text-sm sm:text-base leading-relaxed">
                Courtlay maps every advertising-eligible zone on court — backboards, LED strips,
                side panels — building a spatial model that knows exactly where brand assets can
                appear without obscuring play.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
