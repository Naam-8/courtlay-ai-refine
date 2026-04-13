import { useEffect, useRef, useState } from "react";
import { navLinks, IMAGES } from "../constants";

export default function Header({ mobileMenuOpen, setMobileMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 z-[100] px-6 py-4 sm:px-10 sm:py-4 lg:px-16 lg:py-5 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(0,0,0,0.96)" : "rgba(0,0,0,0.7)",
          backdropFilter: "blur(16px)",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
        }}
      >
        <header className="flex items-center justify-between gap-8">
          {/* Logo */}
          <a href="/" className="shrink-0">
            <img src={IMAGES.logo} alt="Courtlay" className="h-9 sm:h-10 w-auto object-contain" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative font-sans text-sm font-medium text-white/60 hover:text-white transition-colors duration-200"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-bright-green scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </a>
            ))}
            <a
              href="#cta"
              className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-bright-green text-black font-sans font-bold text-xs sm:text-sm hover:bg-light-green transition-colors whitespace-nowrap tracking-wide"
            >
              Request Demo
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="sm:hidden p-2 text-white/70 hover:text-white transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>
        </header>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav className="sm:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-white/[0.08] pt-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-sans text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-bright-green text-black font-sans font-bold text-sm hover:bg-light-green transition-colors"
            >
              Request Demo
            </a>
          </nav>
        )}
      </div>
      <div className="h-[4.5rem] sm:h-[4.75rem] lg:h-[5rem]" aria-hidden />
    </>
  );
}
