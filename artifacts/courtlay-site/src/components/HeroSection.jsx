import BeforeAfterSlider from "./BeforeAfterSlider";

export default function HeroSection() {
  return (
    <section id="home" className="mt-10 sm:mt-14 lg:mt-20 px-4 sm:px-6 lg:px-16 mx-auto">
      <div className="block md:hidden">
        <div className="grid gap-6 items-center">
          <div>
            <h1 className="font-sans text-3xl font-bold text-bright-green leading-tight">
              Smarter racquet
              <br />
              sport broadcasts
            </h1>
            <p className="mt-3 font-serif text-muted text-base italic max-w-sm">
              Virtual ads, built for the court.
            </p>
            <div className="mt-5 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#join"
                className="inline-flex items-center justify-center px-7 py-2.5 rounded-full bg-bright-green text-black font-sans font-semibold text-xs sm:text-sm hover:bg-light-green transition-colors cursor-pointer"
              >
                Talk to our team
              </a>
              <a
                href="#solutions"
                className="inline-flex items-center justify-center px-7 py-2.5 rounded-full border-2 border-bright-green text-white font-sans font-medium text-xs sm:text-sm hover:bg-bright-green/10 transition-colors cursor-pointer"
              >
                Explore the platform
              </a>
            </div>
          </div>

          <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-bright-green/40 bg-white/5">
            <BeforeAfterSlider />
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-bright-green/40 bg-black/60 shadow-[0_0_40px_rgba(255,107,107,0.35)]">
          <BeforeAfterSlider />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <div className="absolute inset-x-6 bottom-6">
            <h1 className="font-sans text-3xl lg:text-4xl font-bold text-bright-green leading-tight">
              Smarter racquet sport broadcasts
            </h1>
            <p className="mt-2 font-serif text-base text-white/80 italic max-w-md">
              Virtual ads, built for the court.
            </p>
            <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#join"
                className="inline-flex items-center justify-center px-7 py-2.5 rounded-full bg-bright-green text-black font-sans font-semibold text-sm hover:bg-light-green transition-colors cursor-pointer"
              >
                Talk to our team
              </a>
              <a
                href="#solutions"
                className="inline-flex items-center justify-center px-7 py-2.5 rounded-full border-2 border-bright-green text-white font-sans font-medium text-sm hover:bg-bright-green/10 transition-colors cursor-pointer"
              >
                Explore the platform
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
