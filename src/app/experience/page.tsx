"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Briefcase,
  Calendar,
  MapPin,
  Code,
  FileText,
  ArrowRight,
  ChevronRight
} from "lucide-react";
import portfolioData from "../data.json";
import ScrollReveal from "../components/ScrollReveal";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "var(--bg-primary)",
        color: "var(--text-primary)",
        paddingTop: 100,
        paddingBottom: 80,
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        
        {/* ===== HEADER ===== */}
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h1
              style={{
                fontSize: "clamp(2.2rem, 5vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                marginBottom: 12,
              }}
            >
              Professional <span className="gradient-text">Experience</span>
            </h1>
            <div className="section-underline" style={{ marginBottom: 16 }} />
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "1.05rem",
                maxWidth: 580,
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              A timeline of my professional growth, system engineering, and developer internships.
            </p>
          </div>
        </ScrollReveal>

        {/* ===== EXPERIENCES LIST (VERTICAL STACK) ===== */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 32,
            marginBottom: 56,
          }}
          className="experience-grid"
        >
          {experience.map((exp, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.15}>
              <div
                className="glass-card"
                style={{
                  padding: "36px 40px",
                  borderRadius: 24,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderLeft: "6px solid var(--accent)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Subtle Decorative Background Glow */}
                <div
                  style={{
                    position: "absolute",
                    top: -60,
                    right: -60,
                    width: 160,
                    height: 160,
                    borderRadius: "50%",
                    background: idx === 0 
                      ? "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)"
                      : "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)",
                    pointerEvents: "none",
                  }}
                />

                {/* Card Title & Meta Header */}
                <div style={{ marginBottom: 20 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: 8,
                    }}
                  >
                    <h2
                      style={{
                        fontSize: "1.45rem",
                        fontWeight: 800,
                        color: "var(--text-primary)",
                        letterSpacing: "-0.01em",
                        margin: 0,
                      }}
                    >
                      {exp.role}
                    </h2>
                    
                    <span
                      style={{
                        background: "var(--accent-bg)",
                        color: "var(--accent)",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        padding: "4px 12px",
                        borderRadius: 99,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {idx === 0 ? "Featured Intern" : "Internship"}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      color: "var(--accent)",
                      marginTop: 4,
                      marginBottom: 16,
                    }}
                  >
                    {exp.company}
                  </h3>

                  {/* Metadata Row */}
                  <div
                    style={{
                      display: "flex",
                      gap: 16,
                      flexWrap: "wrap",
                      fontSize: "0.85rem",
                      color: "var(--text-tertiary)",
                      borderBottom: "1px solid var(--border-light)",
                      paddingBottom: 16,
                    }}
                  >
                    <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <Calendar size={14} /> {exp.period}
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <MapPin size={14} /> {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                    color: "var(--text-secondary)",
                    marginBottom: 20,
                  }}
                >
                  {exp.description}
                </p>

                {/* Highlight Bullets */}
                {exp.highlights && (
                  <div style={{ marginBottom: 28, flex: 1 }}>
                    <h4
                      style={{
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        color: "var(--text-primary)",
                        letterSpacing: "0.08em",
                        marginBottom: 12,
                      }}
                    >
                      Key Contributions & Milestones
                    </h4>
                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: 10,
                      }}
                    >
                      {exp.highlights.map((highlight, index) => (
                        <li
                          key={index}
                          style={{
                            fontSize: "0.9rem",
                            lineHeight: 1.5,
                            color: "var(--text-secondary)",
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 8,
                          }}
                        >
                          <ChevronRight
                            size={16}
                            style={{
                              color: "var(--accent)",
                              marginTop: 2,
                              flexShrink: 0,
                            }}
                          />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack Badges */}
                {exp.skills && (
                  <div style={{ marginTop: "auto", borderTop: "1px solid var(--border-light)", paddingTop: 16 }}>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          style={{
                            background: "var(--tag-bg)",
                            color: "var(--tag-text)",
                            padding: "4px 10px",
                            borderRadius: 8,
                            fontSize: "0.78rem",
                            fontWeight: 600,
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Completion Letter Button (If present) */}
                {exp.letterUrl && (
                  <div style={{ marginTop: 16 }}>
                    <a
                      href={exp.letterUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline"
                      style={{
                        textDecoration: "none",
                        fontSize: "0.82rem",
                        padding: "8px 16px",
                        borderRadius: 10,
                        width: "100%",
                        justifyContent: "center",
                      }}
                    >
                      <FileText size={14} /> View Completion Letter
                    </a>
                  </div>
                )}

              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ===== CALL TO ACTION CARD ===== */}
        <ScrollReveal>
          <div
            className="glass-card"
            style={{
              padding: "48px 32px",
              textAlign: "center",
              borderRadius: 24,
            }}
          >
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 16 }}>
              Interested in seeing the codebases?
            </h2>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.98rem",
                maxWidth: 520,
                margin: "0 auto 24px",
                lineHeight: 1.6,
              }}
            >
              Check out my projects to see my system design, API code organization, and development practices in action.
            </p>
            <Link
              href="/projects"
              className="btn-accent"
              style={{ textDecoration: "none" }}
            >
              Explore Projects <ArrowRight size={18} />
            </Link>
          </div>
        </ScrollReveal>

      </div>

      {/* Responsive styles */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .experience-grid {
            grid-template_columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
