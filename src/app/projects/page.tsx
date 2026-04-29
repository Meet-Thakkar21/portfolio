"use client";

import Link from "next/link";
import { Github, ArrowRight, ExternalLink } from "lucide-react";
import portfolioData from "../data.json";
import ScrollReveal from "../components/ScrollReveal";

export default function Projects() {
  const { projects } = portfolioData;
  return (
    <main style={{ minHeight: "100vh", background: "var(--bg-primary)", color: "var(--text-primary)", paddingTop: 100, paddingBottom: 60 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 12 }}>
              My <span className="gradient-text">Projects</span>
            </h1>
            <div className="section-underline" style={{ marginBottom: 16 }} />
            <p style={{ color: "var(--text-secondary)", fontSize: "1rem", maxWidth: 560, margin: "0 auto" }}>
              Explore my recent work and personal projects that showcase my skills and passion for development.
            </p>
          </div>
        </ScrollReveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24, marginBottom: 64 }}>
          {projects.map((project, idx) => (
            <ScrollReveal key={project.id} delay={idx * 0.08} variant="fadeUp">
              <div className="glass-card" style={{ overflow: "hidden", display: "flex", flexDirection: "column", height: "100%" }}>
                <div style={{ width: "100%", height: 200, overflow: "hidden" }}>
                  <img src={project.image || "/placeholder.svg"} alt={project.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                    onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.05)"; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }} />
                </div>
                <div style={{ padding: 24, display: "flex", flexDirection: "column", flex: 1 }}>
                  <h2 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: 8 }}>{project.title}</h2>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: 16, flex: 1 }}>{project.description}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                    {project.tags.map((tag, i) => (
                      <span key={i} style={{ background: "var(--tag-bg)", color: "var(--tag-text)", padding: "4px 12px", borderRadius: 999, fontSize: "0.75rem", fontWeight: 600 }}>{tag}</span>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: "auto" }}>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-accent" style={{ textDecoration: "none", fontSize: "0.82rem", padding: "8px 18px", borderRadius: 10 }}>
                      <Github size={16} /> Code
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ textDecoration: "none", fontSize: "0.82rem", padding: "6px 16px", borderRadius: 10 }}>
                        <ExternalLink size={16} /> Live
                      </a>
                    )}
                    {project.video && (
                      <a href={project.video} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ textDecoration: "none", fontSize: "0.82rem", padding: "6px 16px", borderRadius: 10, borderColor: "#EF4444", color: "#EF4444" }}>
                        <ExternalLink size={16} /> Video
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="glass-card" style={{ padding: "48px 32px", textAlign: "center" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 16 }}>Interested in working together?</h2>
            <Link href="/contact" className="btn-accent" style={{ textDecoration: "none" }}>Contact Me <ArrowRight size={18} /></Link>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}