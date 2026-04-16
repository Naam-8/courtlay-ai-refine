import { useState } from "react";
import { ChevronDown } from "lucide-react";

const SUBJECT_OPTIONS = [
  { value: "product-queries", label: "Product Queries" },
  { value: "partnership", label: "Partnership Enquiries" },
  { value: "demo", label: "Request Demo" },
  { value: "careers", label: "Careers" },
  { value: "other", label: "Other" },
];

const inputStyle = {
  width: "100%",
  padding: "14px 20px",
  borderRadius: "9999px",
  fontFamily: "sans-serif",
  fontSize: "0.9rem",
  color: "#0d0d0d",
  background: "#fff",
  border: "1px solid rgba(13,13,13,0.12)",
  outline: "none",
};

const textareaStyle = {
  width: "100%",
  padding: "14px 20px",
  borderRadius: "16px",
  fontFamily: "sans-serif",
  fontSize: "0.9rem",
  color: "#0d0d0d",
  background: "#fff",
  border: "1px solid rgba(13,13,13,0.12)",
  outline: "none",
  minHeight: "160px",
  resize: "vertical",
};

export default function MemberFormSection() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("product-queries");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);

  return (
    <section id="join" style={{ background: "#f2f2f0" }}>
      <div className="p-8 sm:p-12 lg:p-16">
        <div className="max-w-xl mx-auto">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-center mb-3" style={{ color: "#e8192c" }}>
            Get in touch
          </p>
          <h2
            className="font-sans font-bold text-center"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 900,
              textTransform: "uppercase",
              color: "#0d0d0d",
            }}
          >
            Start a conversation{" "}
            <span style={{ color: "#e8192c" }}>with Courtlay</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-center" style={{ color: "rgba(13,13,13,0.5)" }}>
            Share a few details and we&apos;ll follow up about how Courtlay can work with your broadcasts.
          </p>

          <form className="mt-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
              <input type="text" placeholder="Company" value={company} onChange={(e) => setCompany(e.target.value)} style={inputStyle} />
              <input type="email" required placeholder="Email*" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
              <div className="relative">
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  style={{ ...inputStyle, appearance: "none", cursor: "pointer", paddingRight: "48px" }}
                >
                  {SUBJECT_OPTIONS.map(({ value, label }) => (
                    <option key={value} value={value}>{label}</option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 size-5" style={{ color: "rgba(13,13,13,0.4)" }} aria-hidden="true" />
              </div>
              <input type="tel" required placeholder="Phone*" value={phone} onChange={(e) => setPhone(e.target.value)} style={inputStyle} />
            </div>

            <textarea
              required
              rows={6}
              placeholder="Your Message*"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={textareaStyle}
            />

            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                required
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 size-4 shrink-0 rounded"
                style={{ accentColor: "#e8192c" }}
              />
              <span className="font-sans text-sm leading-snug text-left" style={{ color: "rgba(13,13,13,0.6)" }}>
                By using this form you agree with the storage and handling of your data in accordance with the{" "}
                <a href="/privacy-policy" className="font-medium hover:underline underline-offset-2" style={{ color: "#e8192c" }}>
                  Privacy and Cookie Policy
                </a>.
              </span>
            </label>

            <button
              type="submit"
              className="w-full py-4 rounded-full font-sans font-semibold text-base transition-opacity hover:opacity-85"
              style={{ background: "#e8192c", color: "#fff" }}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
