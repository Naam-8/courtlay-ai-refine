import { useEffect, useState } from "react";
import { navLinks } from "../constants";

const GLASS_PILL = {
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
  background: "rgba(10, 10, 10, 0.55)",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "9999px",
  display: "flex",
  alignItems: "center",
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] pointer-events-none"
      style={{ padding: "14px 16px" }}
    >
      <div
        className="flex items-center justify-between gap-3 w-full"
        style={{ maxWidth: "1400px", margin: "0 auto" }}
      >

        {/* ── Pill 1: Logo ── */}
        <a
          href="/"
          className="pointer-events-auto shrink-0 transition-opacity duration-200 hover:opacity-85"
          style={{ ...GLASS_PILL, padding: "7px 14px" }}
        >
          <img
            src="/logo/COURTLAY_cropped.png"
            alt="Courtlay"
            style={{ height: "24px", width: "auto", objectFit: "contain", display: "block" }}
          />
        </a>

        {/* ── Pill 2: Nav links — desktop only (lg+) ── */}
        <nav
          className="pointer-events-auto hidden lg:flex flex-1 justify-center"
        >
          <div style={{ ...GLASS_PILL, padding: "9px 22px", gap: "24px" }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative font-sans text-sm font-semibold transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.72)", letterSpacing: "0.02em", whiteSpace: "nowrap" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.72)")}
              >
                {link.label}
                <span
                  className="absolute -bottom-0.5 left-0 right-0 h-px scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                  style={{ background: "#e8192c" }}
                />
              </a>
            ))}
          </div>
        </nav>

        {/* ── Pill 3: Request Demo ── always visible ── */}
        <a
          href="#join"
          className="pointer-events-auto inline-flex items-center justify-center font-sans font-bold tracking-widest uppercase transition-all duration-200 hover:opacity-90 active:scale-95 shrink-0"
          style={{
            background: "#e8192c",
            color: "#fff",
            padding: "10px 18px",
            borderRadius: "9999px",
            letterSpacing: "0.1em",
            whiteSpace: "nowrap",
            boxShadow: "0 4px 20px rgba(232,25,44,0.35)",
            fontSize: "clamp(9px, 1.2vw, 12px)",
          }}
        >
          Request Demo
        </a>

      </div>
    </div>
  );
}
