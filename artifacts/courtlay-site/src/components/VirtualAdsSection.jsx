import GridBackground from "./GridBackground";
import { IMAGES } from "../constants";

export default function VirtualAdsSection() {
  return (
    <section id="virtual-ads" className="mx-auto bg-black overflow-hidden relative">
      <GridBackground />
      <div className="relative z-10 px-4 py-12 sm:px-6 sm:py-16 lg:px-16 lg:py-20 mx-auto">
        <h2 className="text-center font-sans text-xl sm:text-2xl lg:text-3xl font-semibold tracking-wide text-white">
          How{" "}
          <span className="font-serif italic text-bright-green">Courtlay Virtual Advertising</span>{" "}
          works
        </h2>

        <p className="text-center font-sans text-base sm:text-lg text-muted mt-4 max-w-2xl mx-auto">
          Side-by-side views of the live court let you compare the original broadcast with
          Courtlay&apos;s brand-integrated feed — preserving the integrity of play while creating
          new sponsorship moments.
        </p>

        <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black/60 shadow-xl">
            <img className="h-full w-full object-cover" src={IMAGES.compWithoutAd} alt="Original broadcast" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/40" />
            <div className="pointer-events-none absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs sm:text-sm text-white/80 px-4 pb-1">
              <span className="font-semibold tracking-wide uppercase">Original broadcast</span>
              <span className="font-sans text-white/60">Live feed without virtual ads</span>
            </div>
          </div>

          <div className="relative aspect-video rounded-2xl overflow-hidden border border-bright-green/40 bg-bright-green/5 shadow-[0_0_40px_rgba(255,107,107,0.35)]">
            <img className="h-full w-full object-cover" src={IMAGES.compWithAd} alt="Courtlay virtual feed" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/40" />
            <div className="pointer-events-none absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs sm:text-sm text-white/80 px-4 pb-1">
              <span className="font-semibold tracking-wide uppercase text-bright-green">Courtlay virtual feed</span>
              <span className="font-sans text-white/70">Brand-integrated, synchronized to play</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
