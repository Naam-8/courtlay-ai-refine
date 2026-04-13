const SPORTS = [
  "Tennis",
  "Padel",
  "Squash",
  "Table Tennis",
  "Badminton",
  "Pickleball",
];

export default function SportsLogosSection() {
  return (
    <section className="bg-white py-8 sm:py-10 overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto">
        <p className="text-center font-sans text-xs tracking-[0.2em] uppercase text-black/40 mb-6">
          Racquet sports covered
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:gap-x-12">
          {SPORTS.map((sport) => (
            <span
              key={sport}
              className="font-sans text-sm sm:text-base font-semibold text-black/25 hover:text-black/60 transition-colors duration-300"
            >
              {sport}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
