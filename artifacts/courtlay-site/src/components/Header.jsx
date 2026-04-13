import { navLinks, IMAGES } from "../constants";

export default function Header({ mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[100] border-b border-white/10 bg-black/95 backdrop-blur-sm px-6 py-4 sm:px-10 sm:py-5 lg:px-16 lg:py-6">
        <header className="flex items-center justify-between">
          <a href="/" className="">
            <img src={IMAGES.logo} alt="Courtlay" className="w-full h-14" />
          </a>

          <nav className="hidden sm:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/90 hover:text-bright-green text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              className="inline-flex items-center justify-center px-3 py-2 rounded-full bg-bright-green text-black font-sans font-medium text-xs sm:text-sm hover:bg-light-green transition-colors whitespace-nowrap"
            >
              Request Demo
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="sm:hidden p-2 text-white"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>
        </header>

        {mobileMenuOpen && (
          <nav className="sm:hidden mt-4 pb-4 flex flex-col gap-4 border-b border-white/20">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/90 hover:text-white text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-bright-green text-black font-sans font-medium text-sm hover:bg-light-green transition-colors whitespace-nowrap"
            >
              Request presentation
            </a>
          </nav>
        )}
      </div>
      <div className="h-[5.5rem] sm:h-24 lg:h-[6.5rem]" aria-hidden />
    </>
  );
}
