import { Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import { IMAGES } from "../constants";

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
    <footer id="footer" className="bg-black border-t border-white/[0.06] overflow-hidden">
      <div className="px-6 pt-16 pb-10 sm:px-10 sm:pt-20 lg:px-16 lg:pt-24 max-w-7xl mx-auto">

        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 pb-12 border-b border-white/[0.07]">

          {/* Brand column */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <p className="font-serif italic text-white/50 text-xl sm:text-2xl leading-relaxed max-w-xl">
              Creating more valuable, more relevant
              <br />
              <span className="text-bright-green/70">racquet sports broadcasts.</span>
            </p>
            <div className="flex flex-col gap-4">
              <div>
                <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-white/25 mb-1">Contact</p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-sans text-sm font-medium text-white/70 hover:text-bright-green transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
              <div>
                <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-white/25 mb-1">Location</p>
                <p className="font-sans text-sm text-white/50">{CONTACT_ADDRESS}</p>
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
                  className="text-white/30 hover:text-bright-green transition-colors"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav column */}
          <div className="flex flex-col gap-2">
            <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-white/25 mb-3">Navigate</p>
            {exploreLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="font-sans text-sm font-medium text-white/55 hover:text-white transition-colors py-1 w-fit group flex items-center gap-2"
              >
                <span className="w-3 h-px bg-bright-green/0 group-hover:bg-bright-green/60 transition-all duration-300" />
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Large logo */}
        <div className="py-10 border-b border-white/[0.07]">
          <a href="/">
            <img
              src={IMAGES.logo}
              alt="Courtlay"
              className="w-full max-w-2xl mx-auto h-20 sm:h-28 object-contain object-center opacity-20 hover:opacity-30 transition-opacity duration-500"
            />
          </a>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-white/20">
            © {new Date().getFullYear()} Courtlay. All rights reserved.
          </p>
          <nav className="flex items-center gap-4">
            {legalLinks.map(({ href, label }, i) => (
              <span key={href} className="inline-flex items-center gap-4">
                {i > 0 && <span className="text-white/15 select-none">·</span>}
                <a href={href} className="font-sans text-xs text-white/25 hover:text-white/60 transition-colors">
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
