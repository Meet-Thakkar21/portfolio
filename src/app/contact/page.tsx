"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import portfolioData from "../data.json";
import ScrollReveal from "../components/ScrollReveal";

export default function Contact() {
  const { email, phone, location, resumeUrl, socials } = portfolioData.contactInfo;
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      if (res.ok) { setSuccess("Your message has been sent!"); setForm({ name: "", email: "", message: "" }); }
      else { const data = await res.json(); setError(data.error || "Something went wrong."); }
    } catch { setError("Failed to send message."); }
    setLoading(false);
  }

  const getSocialIcon = (n: string) => {
    switch (n) { case "GitHub": return <Github size={20} />; case "LinkedIn": return <Linkedin size={20} />; case "Twitter": return <Twitter size={20} />; case "Instagram": return <Instagram size={20} />; default: return null; }
  };

  const inputStyle: React.CSSProperties = {
    background: "var(--input-bg)", border: "1px solid var(--input-border)", borderRadius: 12,
    padding: "14px 18px", color: "var(--text-primary)", fontSize: "0.95rem", outline: "none",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease", width: "100%",
  };

  const infoCards = [
    { icon: <Mail size={22} />, label: "Email", value: email, href: `mailto:${email}` },
    { icon: <Phone size={22} />, label: "Phone", value: phone, href: `tel:${phone}` },
    { icon: <MapPin size={22} />, label: "Location", value: location, href: undefined },
  ];

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg-primary)", color: "var(--text-primary)", paddingTop: 100, paddingBottom: 60 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 12 }}>
              Contact <span className="gradient-text">Me</span>
            </h1>
            <div className="section-underline" style={{ marginBottom: 16 }} />
            <p style={{ color: "var(--text-secondary)", fontSize: "1rem", maxWidth: 500, margin: "0 auto" }}>
              Reach out for collaborations, questions, or just to say hi!
            </p>
          </div>
        </ScrollReveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 32, marginBottom: 48 }}>
          {/* Info Cards */}
          <ScrollReveal variant="slideLeft">
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {infoCards.map((card, i) => (
                <div key={i} style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: 16, padding: "20px 24px", boxShadow: "var(--card-shadow)", display: "flex", alignItems: "center", gap: 16 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: "var(--accent-bg)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)", flexShrink: 0 }}>
                    {card.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-tertiary)", marginBottom: 2, textTransform: "uppercase", letterSpacing: "0.04em" }}>{card.label}</h3>
                    {card.href ? (
                      <a href={card.href} style={{ color: "var(--accent)", fontWeight: 600, textDecoration: "none", fontSize: "0.95rem" }}>{card.value}</a>
                    ) : (
                      <p style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: "0.95rem", margin: 0 }}>{card.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal variant="slideRight">
            <form onSubmit={handleSubmit} style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: 16, padding: 28, boxShadow: "var(--card-shadow)", display: "flex", flexDirection: "column", gap: 16 }}>
              <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 4 }}>Send a Message</h2>
              <input type="text" placeholder="Your Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required style={inputStyle}
                onFocus={e => { e.currentTarget.style.borderColor = "var(--input-focus)"; e.currentTarget.style.boxShadow = "0 0 0 3px var(--accent-bg)"; }}
                onBlur={e => { e.currentTarget.style.borderColor = "var(--input-border)"; e.currentTarget.style.boxShadow = "none"; }} />
              <input type="email" placeholder="Your Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required style={inputStyle}
                onFocus={e => { e.currentTarget.style.borderColor = "var(--input-focus)"; e.currentTarget.style.boxShadow = "0 0 0 3px var(--accent-bg)"; }}
                onBlur={e => { e.currentTarget.style.borderColor = "var(--input-border)"; e.currentTarget.style.boxShadow = "none"; }} />
              <textarea placeholder="Your Message" rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required
                style={{ ...inputStyle, resize: "vertical" }}
                onFocus={e => { e.currentTarget.style.borderColor = "var(--input-focus)"; e.currentTarget.style.boxShadow = "0 0 0 3px var(--accent-bg)"; }}
                onBlur={e => { e.currentTarget.style.borderColor = "var(--input-border)"; e.currentTarget.style.boxShadow = "none"; }} />
              <button type="submit" className="btn-accent" disabled={loading} style={{ width: "100%", justifyContent: "center" }}>
                {loading ? "Sending..." : "Send Message"}
              </button>
              {success && <p style={{ color: "var(--success)", fontWeight: 500, fontSize: "0.9rem" }}>{success}</p>}
              {error && <p style={{ color: "var(--error)", fontWeight: 500, fontSize: "0.9rem" }}>{error}</p>}
            </form>
          </ScrollReveal>
        </div>

        {/* Socials */}
        <ScrollReveal>
          <div style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, textAlign: "center", marginBottom: 24 }}>Connect With Me</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
              {socials.map(social => (
                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer"
                  className="glass-card" style={{ padding: 20, textAlign: "center", textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 42, height: 42, borderRadius: 12, background: "var(--accent-bg)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)" }}>
                    {getSocialIcon(social.name)}
                  </div>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--text-primary)" }}>{social.name}</h3>
                  <span style={{ fontSize: "0.82rem", color: "var(--accent)", fontWeight: 500, display: "flex", alignItems: "center", gap: 4 }}>
                    {social.handle} <ArrowRight size={14} />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Resume */}
        <ScrollReveal>
          <div className="glass-card" style={{ padding: "48px 32px", textAlign: "center" }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 8 }}>Looking for my resume?</h2>
            <p style={{ color: "var(--text-secondary)", marginBottom: 24, fontSize: "0.95rem" }}>
              Download my complete resume to learn more about my skills, experience, and education.
            </p>
            <a href={resumeUrl} download className="btn-accent" style={{ textDecoration: "none" }}>Download Resume</a>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}