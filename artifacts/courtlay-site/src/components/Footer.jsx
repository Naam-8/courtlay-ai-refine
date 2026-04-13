import { Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import { IMAGES } from "../constants";
import GridBackground from "./GridBackground";

const linkClass = "font-sans text-sm font-medium text-white/90 hover:text-bright-green transition-colors";

const CONTACT_EMAIL = "info@courtlay.com";
const CONTACT_ADDRESS = "Mumbai, Maharashtra";

const exploreLinks = [
  { href: "#home", label: "Overview" },
  { href: "#solutions", label: "Platform" },
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
    <footer id="footer" className="mx-auto bg-black overflow-hidden relative">
      <GridBackground />
      <div className="relative z-10 px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-16 lg:items-start pb-12 border-b border-white/10">
          <div className="max-w-xl space-y-8">
            <p className="font-serif text-muted italic text-xl">
              Creating more valuable, more relevant racquet sports broadcasts.
            </p>
            <div className="space-y-6">
              <div>
                <h4 className="font-sans text-sm font-medium text-muted uppercase tracking-wider mb-2">Company</h4>
                <p className="font-sans text-white">Courtlay — Virtual advertising for racquet sports.</p>
              </div>
              <div>
                <h4 className="font-sans text-sm font-medium text-muted uppercase tracking-wider mb-2">Contact</h4>
                <ul className="list-none space-y-3 p-0 m-0">
                  <li>
                    <a href={`mailto:${CONTACT_EMAIL}`} className={`${linkClass} inline-block max-w-full break-words`}>
                      {CONTACT_EMAIL}
                    </a>
                  </li>
                  <li>
                    <address className="font-sans text-white leading-relaxed not-italic">
                      {CONTACT_ADDRESS}
                    </address>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <div>
              <h4 className="font-sans text-sm font-medium text-muted uppercase tracking-wider mb-4">Explore</h4>
              <nav className="flex flex-wrap gap-x-6 gap-y-2">
                {exploreLinks.map(({ href, label }) => (
                  <a key={href} href={href} className={linkClass}>{label}</a>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="font-sans text-sm font-medium text-muted uppercase tracking-wider mb-4">Connect with us</h4>
              <nav className="flex flex-wrap items-center gap-6">
                {socialLinks.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className="inline-flex text-white/90 hover:text-bright-green transition-colors"
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <a href="/" className="block">
          <img src={IMAGES.logo} alt="Courtlay" className="w-full h-32 pt-10 object-contain object-center" />
        </a>

        <div className="mt-10 pt-8 border-t border-white/10">
          <div className="flex w-full flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <p className="font-sans text-sm text-muted text-center md:text-left">
              © {new Date().getFullYear()} Courtlay. All rights reserved.
            </p>
            <nav className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 md:justify-end">
              {legalLinks.map(({ href, label }, i) => (
                <span key={href} className="inline-flex items-center gap-x-3">
                  {i > 0 && <span className="text-muted select-none" aria-hidden>|</span>}
                  <a href={href} className={linkClass}>{label}</a>
                </span>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
