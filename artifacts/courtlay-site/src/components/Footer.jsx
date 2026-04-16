import { Instagram, Linkedin, Mail, Twitter } from "lucide-react";

const CONTACT_EMAIL = "info@courtlay.com";
const CONTACT_ADDRESS = "Mumbai, Maharashtra";

const exploreLinks = [
  { href: "#home", label: "Overview" },
  { href: "#solutions", label: "Platform" },
  { href: "#court-gallery", label: "Coverage" },
  { href: "#join", label: "Connect" },
];

const legalLinks = [
  { href: "/legal-disclaimer", label: "Legal Disclaimer" },
  { href: "/privacy-policy", label: "Privacy Policy" },
];

const socialLinks = [
  { href: "https://x.com/Courtlay_", label: "Twitter", Icon: Twitter },
  { href: "https://www.instagram.com/courtlay/", label: "Instagram", Icon: Instagram },
  { href: "https://www.linkedin.com/company/courtlay/", label: "LinkedIn", Icon: Linkedin },
  { href: `mailto:${CONTACT_EMAIL}`, label: "Email", Icon: Mail },
];

export default function Footer() {
  return (
    <footer id="footer" style={{ background: "#0d0d0d", borderTop: "1px solid rgba(255,255,255,0.06)" }} className="overflow-hidden">
      <div className="px-6 pt-16 pb-10 sm:px-10 sm:pt-20 lg:px-16 lg:pt-24 max-w-7xl mx-auto">

        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 pb-12" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>

          {/* Brand column */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <p className="font-sans italic text-xl sm:text-2xl leading-relaxed max-w-xl" style={{ color: "rgba(255,255,255,0.45)" }}>
              Creating more valuable, more relevant
              <br />
              <span style={{ color: "rgba(232,25,44,0.65)" }}>racquet sports broadcasts.</span>
            </p>
            <div className="flex flex-col gap-4">
              <div>
                <p className="font-sans text-[10px] tracking-[0.25em] uppercase mb-1" style={{ color: "rgba(255,255,255,0.25)" }}>Contact</p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-sans text-sm font-medium transition-colors"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#e8192c"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
              <div>
                <p className="font-sans text-[10px] tracking-[0.25em] uppercase mb-1" style={{ color: "rgba(255,255,255,0.25)" }}>Location</p>
                <p className="font-sans text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>{CONTACT_ADDRESS}</p>
              </div>
            </div>
            {/* Socials */}
            <div className="flex items-center gap-5">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="transition-colors"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#e8192c"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.3)"}
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav column */}
          <div className="flex flex-col gap-2">
            <p className="font-sans text-[10px] tracking-[0.25em] uppercase mb-3" style={{ color: "rgba(255,255,255,0.25)" }}>Navigate</p>
            {exploreLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="font-sans text-sm font-medium py-1 w-fit group flex items-center gap-2 transition-colors"
                style={{ color: "rgba(255,255,255,0.5)" }}
                onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}
              >
                <span className="w-3 h-px transition-all duration-300" style={{ background: "rgba(232,25,44,0)" }} />
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Large logo */}
        <div className="py-10" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          <a href="/">
            <img
              src="/logo/COURTLAY_cropped.png"
              alt="Courtlay"
              className="w-full max-w-2xl mx-auto object-contain object-center transition-opacity duration-500"
              style={{ height: "80px", opacity: 0.55 }}
              onMouseEnter={e => e.currentTarget.style.opacity = "0.8"}
              onMouseLeave={e => e.currentTarget.style.opacity = "0.55"}
            />
          </a>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
            © {new Date().getFullYear()} Courtlay. All rights reserved.
          </p>
          <nav className="flex items-center gap-4">
            {legalLinks.map(({ href, label }, i) => (
              <span key={href} className="inline-flex items-center gap-4">
                {i > 0 && <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>}
                <a
                  href={href}
                  className="font-sans text-xs transition-colors"
                  style={{ color: "rgba(255,255,255,0.25)" }}
                  onMouseEnter={e => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.25)"}
                >
                  {label}
                </a>
              </span>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
