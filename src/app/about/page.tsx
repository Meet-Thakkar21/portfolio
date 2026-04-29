"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import portfolioData from "../data.json";
import ScrollReveal from "../components/ScrollReveal";

export default function About() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const { achievements, experience } = portfolioData;

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "var(--bg-primary)",
        color: "var(--text-primary)",
        paddingTop: 100,
        paddingBottom: 60,
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        {/* Intro */}
        <ScrollReveal>
          <section style={{ textAlign: "center", marginBottom: 64 }}>
            <h1
              style={{
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                marginBottom: 16,
                color: "var(--text-primary)",
              }}
            >
              About <span className="gradient-text">Me</span>
            </h1>
            <div className="section-underline" style={{ marginBottom: 20 }} />
            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--text-secondary)",
                maxWidth: 640,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Hi, I'm Meet Thakkar — a passionate full-stack developer and AI
              enthusiast. My journey is driven by curiosity, creativity, and a
              commitment to building impactful solutions.
              <br />I love to participate in hackathons, contribute to
              open-source, and constantly challenge myself to learn more.
            </p>
          </section>
        </ScrollReveal>

        {/* Experience */}
        <section style={{ marginBottom: 64 }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <h2
                style={{
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  fontWeight: 800,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.02em",
                }}
              >
                Experience
              </h2>
              <div className="section-underline" />
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "1rem",
                  marginTop: 12,
                }}
              >
                Professional work experience and internships
              </p>
            </div>
          </ScrollReveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                experience.length === 1 ? "1fr" : "repeat(auto-fit, minmax(400px, 1fr))",
              gap: 24,
            }}
          >
            {experience.map((exp, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.15}>
                <div
                  style={{
                    background: "var(--bg-secondary)",
                    border: "1px solid var(--border)",
                    borderLeft: "4px solid var(--accent)",
                    borderRadius: 16,
                    padding: 28,
                    boxShadow: "var(--card-shadow)",
                    maxWidth: experience.length === 1 ? 800 : "100%",
                    margin: experience.length === 1 ? "0 auto" : undefined,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: 12,
                      flexWrap: "wrap",
                      gap: 8,
                    }}
                  >
                    <span
                      style={{
                        fontSize: "1.15rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                      }}
                    >
                      {exp.role}
                    </span>
                    <span
                      style={{
                        background: "var(--gradient-accent)",
                        color: "#FFFFFF",
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        padding: "4px 14px",
                        borderRadius: 999,
                      }}
                    >
                      Internship
                    </span>
                  </div>
                  <div style={{ marginBottom: 12 }}>
                    <span
                      style={{
                        display: "block",
                        fontSize: "0.95rem",
                        color: "var(--text-secondary)",
                        fontWeight: 600,
                      }}
                    >
                      {exp.company}
                    </span>
                    <span
                      style={{
                        display: "block",
                        fontSize: "0.85rem",
                        color: "var(--text-tertiary)",
                      }}
                    >
                      {exp.location}
                    </span>
                    <span
                      style={{
                        display: "block",
                        fontSize: "0.85rem",
                        color: "var(--text-tertiary)",
                        fontFamily: "monospace",
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "0.92rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.65,
                      marginBottom: 16,
                    }}
                  >
                    {exp.description}
                  </p>
                  <a
                    href={exp.letterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-accent"
                    style={{
                      textDecoration: "none",
                      fontSize: "0.85rem",
                      padding: "10px 22px",
                    }}
                  >
                    View Completion Letter
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <h2
                style={{
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  fontWeight: 800,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.02em",
                }}
              >
                Achievements
              </h2>
              <div className="section-underline" />
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "1rem",
                  marginTop: 12,
                }}
              >
                Milestones from my coding journey
              </p>
            </div>
          </ScrollReveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: 32,
            }}
          >
            {achievements.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1} variant="scaleUp">
                <div
                  className="perspective-1500"
                  style={{
                    position: "relative",
                    height: 340,
                    cursor: "pointer",
                    zIndex: activeCard === index ? 10 : 1,
                    transition: "z-index 0.8s step-end",
                  }}
                  onClick={() => setActiveCard(activeCard === index ? null : index)}
                >
                  <div
                    className={`preserve-3d ${activeCard === index ? 'rotate-y-180' : ''}`}
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                      willChange: "transform",
                    }}
                  >
                    {/* Front Side */}
                    <div
                      className="backface-hidden"
                      style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        background: "var(--bg-secondary)",
                        border: "1px solid var(--border)",
                        borderRadius: 16,
                        boxShadow: activeCard === index ? "none" : "var(--card-shadow)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "32px 24px",
                        textAlign: "center",
                        margin: 0,
                        transform: "translateZ(1px)",
                        WebkitBackfaceVisibility: "hidden",
                      }}
                    >
                      {item.date && (
                        <div
                          style={{
                            position: "absolute",
                            top: 16,
                            right: 16,
                            background: "var(--gradient-accent)",
                            color: "#FFFFFF",
                            fontSize: "0.7rem",
                            fontWeight: 700,
                            padding: "4px 12px",
                            borderRadius: 999,
                            zIndex: 10,
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                          }}
                        >
                          Featured
                        </div>
                      )}
                      {item.iconUrl && (
                        <img
                          src={item.iconUrl}
                          alt={item.title}
                          style={{
                            width: 60,
                            height: 60,
                            borderRadius: 16,
                            objectFit: "cover",
                            marginBottom: 20,
                            boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                          }}
                        />
                      )}
                      <h3
                        style={{
                          fontSize: "1.25rem",
                          fontWeight: 800,
                          color: "var(--text-primary)",
                          marginBottom: 12,
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {item.title}
                      </h3>
                      {item.stats ? (
                        <div
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            gap: 10,
                            marginBottom: 16,
                          }}
                        >
                          {item.stats.map((stat, i) => (
                            <div
                              key={i}
                              style={{
                                background: "var(--accent-bg)",
                                color: "var(--accent)",
                                padding: "6px 14px",
                                borderRadius: 12,
                                fontSize: "0.85rem",
                                fontWeight: 700,
                                fontFamily: "monospace",
                                border: "1px solid var(--accent-bg-hover)",
                              }}
                            >
                              {stat.value}{" "}
                              <span
                                style={{
                                  fontWeight: 500,
                                  color: "var(--text-secondary)",
                                  fontFamily: "'Inter', sans-serif",
                                  fontSize: "0.75rem",
                                }}
                              >
                                {stat.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p
                          style={{
                            fontSize: "0.95rem",
                            color: "var(--text-secondary)",
                            marginBottom: 16,
                            lineHeight: 1.6,
                          }}
                        >
                          {item.description}
                        </p>
                      )}
                      <span
                        style={{
                          color: "var(--accent)",
                          fontWeight: 700,
                          fontSize: "0.9rem",
                          display: "flex",
                          alignItems: "center",
                          gap: 6,
                        }}
                      >
                        Details <ArrowRight size={14} />
                      </span>
                    </div>

                    {/* Back Side */}
                    <div
                      className="backface-hidden rotate-y-180"
                      style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        background: "var(--gradient-accent)",
                        borderRadius: 20,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "32px 28px",
                        textAlign: "center",
                        color: "#FFFFFF",
                        boxShadow: "0 12px 24px rgba(99, 102, 241, 0.3)",
                        transform: "rotateY(180deg) translateZ(1px)",
                        WebkitBackfaceVisibility: "hidden",
                      }}
                    >
                      <h4 style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: 16, letterSpacing: "0.02em" }}>Details</h4>
                      <p
                        style={{
                          fontSize: "1.05rem",
                          color: "rgba(255,255,255,0.95)",
                          marginBottom: 24,
                          lineHeight: 1.7,
                          fontWeight: 500,
                        }}
                      >
                        {item.backContent}
                      </p>
                      {item.tech && (
                        <div
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            gap: 10,
                          }}
                        >
                          {item.tech.map((tech, idx) => (
                            <span
                              key={idx}
                              style={{
                                background: "rgba(255,255,255,0.15)",
                                backdropFilter: "blur(4px)",
                                color: "#FFFFFF",
                                fontSize: "0.75rem",
                                fontWeight: 700,
                                padding: "6px 14px",
                                borderRadius: 999,
                                border: "1px solid rgba(255,255,255,0.2)",
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                      <div
                        style={{
                          marginTop: 24,
                          fontSize: "0.8rem",
                          fontWeight: 600,
                          opacity: 0.8,
                        }}
                      >
                        Click to flip back
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}