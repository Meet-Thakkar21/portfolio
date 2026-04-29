"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import portfolioData from "./data.json";
import ScrollReveal from "./components/ScrollReveal";

/* ===== TYPING ANIMATION ===== */
const TypingAnimation = ({ titles }: { titles: string[] }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentTitle.substring(0, displayText.length + 1));
          if (displayText === currentTitle)
            setTimeout(() => setIsDeleting(true), 1200);
        } else {
          setDisplayText(currentTitle.substring(0, displayText.length - 1));
          if (displayText === "") {
            setIsDeleting(false);
            setCurrentIndex((currentIndex + 1) % titles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIndex, titles]);

  return (
    <>
      {displayText}
      <span
        className="animate-blink"
        style={{
          display: "inline-block",
          width: 2,
          marginLeft: 4,
          color: "var(--accent)",
        }}
      >
        |
      </span>
    </>
  );
};

/* ===== TIMELINE ITEM ===== */
const TimelineItem = ({
  item,
  index,
  isLast,
}: {
  item: { icon: string; title: string; institution: string; details: string; period: string };
  index: number;
  isLast: boolean;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        justifyContent: isLeft ? "flex-start" : "flex-end",
        width: "100%",
        position: "relative",
        paddingBottom: isLast ? 0 : 40,
      }}
    >
      {/* Center line + dot */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 2,
        }}
        className="timeline-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.4, delay: 0.2, type: "spring", stiffness: 200 }}
          style={{
            width: 20,
            height: 20,
            borderRadius: "50%",
            background: isInView
              ? "var(--gradient-accent)"
              : "var(--timeline-dot-inactive)",
            border: "3px solid var(--bg-primary)",
            boxShadow: isInView
              ? "0 0 0 4px var(--accent-bg), 0 0 20px rgba(99, 102, 241, 0.3)"
              : "none",
            transition: "box-shadow 0.3s ease",
          }}
        />
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              width: 2,
              height: 80,
              background: "var(--timeline-line)",
              transformOrigin: "top",
            }}
          />
        )}
      </div>

      {/* Content card */}
      <motion.div
        initial={{
          opacity: 0,
          x: isLeft ? -60 : 60,
        }}
        animate={
          isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -60 : 60 }
        }
        transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="timeline-card"
        style={{
          width: "42%",
          background: "var(--bg-secondary)",
          border: "1px solid var(--border)",
          borderRadius: 16,
          padding: "24px 28px",
          boxShadow: "var(--card-shadow)",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 12,
          }}
        >
          <span
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "var(--accent-bg)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.3rem",
            }}
          >
            {item.icon}
          </span>
          <div>
            <h3
              style={{
                fontSize: "1.05rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                margin: 0,
                lineHeight: 1.3,
              }}
            >
              {item.title}
            </h3>
            <p
              style={{
                fontSize: "0.85rem",
                color: "var(--text-secondary)",
                margin: 0,
              }}
            >
              {item.institution}
            </p>
          </div>
        </div>
        <p
          style={{
            fontSize: "0.9rem",
            color: "var(--text-secondary)",
            marginBottom: 8,
          }}
        >
          {item.details}
        </p>
        <span
          style={{
            display: "inline-block",
            background: "var(--accent-bg)",
            color: "var(--accent)",
            padding: "4px 14px",
            borderRadius: 999,
            fontSize: "0.78rem",
            fontWeight: 600,
          }}
        >
          {item.period}
        </span>
      </motion.div>
    </div>
  );
};

/* ===== HOME PAGE ===== */
export default function Home() {
  const router = useRouter();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const {
    name,
    titles,
    heroDescription,
    profileImage,
    journey,
    techStack,
    contactInfo,
  } = portfolioData;
  const { resumeUrl } = contactInfo;

  return (
    <main
      style={{
        paddingTop: 80,
        minHeight: "100vh",
        background: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
    >
      {/* ===== HERO SECTION ===== */}
      <section
        ref={heroRef}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "85vh",
          padding: "0 24px",
          maxWidth: 1100,
          margin: "0 auto",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle background blobs */}
        <div
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)",
            top: -100,
            right: -150,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)",
            bottom: -50,
            left: -100,
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            gap: 48,
            flexWrap: "wrap",
          }}
          className="hero-layout"
        >
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ flex: 1, minWidth: 300, maxWidth: 560, zIndex: 1 }}
          >
            <h1
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                marginBottom: 16,
                color: "var(--text-primary)",
              }}
            >
              Hello, I'm{" "}
              <span className="gradient-text">{name}</span>
            </h1>
            <h2
              style={{
                fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
                fontWeight: 500,
                color: "var(--accent)",
                marginBottom: 20,
                minHeight: "1.6em",
                display: "flex",
                alignItems: "center",
              }}
            >
              <TypingAnimation titles={titles} />
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.7,
                color: "var(--text-secondary)",
                marginBottom: 32,
                background: "var(--gradient-card)",
                padding: "20px 24px",
                borderRadius: 14,
                border: "1px solid var(--border-light)",
              }}
            >
              {heroDescription}
            </p>
            <div
              style={{
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <button
                className="btn-accent"
                onClick={() => router.push("/projects")}
              >
                View Projects
              </button>
              <button
                className="btn-outline"
                onClick={() => router.push("/contact")}
              >
                Contact Me
              </button>
              <a
                href={resumeUrl}
                download
                className="btn-outline"
                style={{ textDecoration: "none" }}
              >
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              flex: "0 0 auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1,
            }}
          >
            <div
              className="animate-slow-float"
              style={{
                width: "clamp(220px, 25vw, 320px)",
                height: "clamp(220px, 25vw, 320px)",
                borderRadius: 24,
                overflow: "hidden",
                border: "2px solid var(--border)",
                boxShadow: "var(--card-shadow-hover)",
                position: "relative",
              }}
            >
              <Image
                src={profileImage}
                alt="Profile Image"
                width={400}
                height={400}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== EDUCATION TIMELINE ===== */}
      <section
        style={{
          padding: "80px 24px",
          maxWidth: 900,
          margin: "0 auto",
        }}
      >
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                fontWeight: 800,
                color: "var(--text-primary)",
                letterSpacing: "-0.02em",
              }}
            >
              Education
            </h2>
            <div className="section-underline" />
          </div>
        </ScrollReveal>

        {/* Desktop Timeline */}
        <div className="timeline-desktop" style={{ position: "relative" }}>
          {/* Central line */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              width: 2,
              height: "100%",
              background: "var(--timeline-line)",
              top: 0,
              zIndex: 0,
            }}
          />
          {journey.map((item, idx) => (
            <TimelineItem
              key={idx}
              item={item}
              index={idx}
              isLast={idx === journey.length - 1}
            />
          ))}
        </div>

        {/* Mobile Timeline (simplified stack) */}
        <div className="timeline-mobile" style={{ display: "none" }}>
          {journey.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div
                style={{
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border)",
                  borderRadius: 16,
                  padding: "20px 24px",
                  boxShadow: "var(--card-shadow)",
                  marginBottom: 16,
                  borderLeft: "4px solid var(--accent)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 10,
                  }}
                >
                  <span
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: "var(--accent-bg)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.2rem",
                    }}
                  >
                    {item.icon}
                  </span>
                  <div>
                    <h3
                      style={{
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        margin: 0,
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.82rem",
                        color: "var(--text-secondary)",
                        margin: 0,
                      }}
                    >
                      {item.institution}
                    </p>
                  </div>
                </div>
                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "var(--text-secondary)",
                    marginBottom: 6,
                  }}
                >
                  {item.details}
                </p>
                <span
                  style={{
                    display: "inline-block",
                    background: "var(--accent-bg)",
                    color: "var(--accent)",
                    padding: "3px 12px",
                    borderRadius: 999,
                    fontSize: "0.75rem",
                    fontWeight: 600,
                  }}
                >
                  {item.period}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ===== TECH STACK ===== */}
      <section
        style={{
          padding: "60px 24px 80px",
          borderTop: "1px solid var(--border-light)",
          background: "var(--bg-tertiary)",
        }}
      >
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                fontWeight: 800,
                color: "var(--text-primary)",
                letterSpacing: "-0.02em",
              }}
            >
              My Tech Stack
            </h2>
            <div className="section-underline" />
          </div>
        </ScrollReveal>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 40,
            maxWidth: 1000,
            margin: "0 auto",
          }}
        >
          {techStack.map((category, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1} variant="scaleUp">
              <div style={{ textAlign: "center" }}>
                <h3
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: "var(--accent)",
                    marginBottom: 16,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  {category.category}
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 12,
                    justifyContent: "center",
                  }}
                >
                  {category.technologies.map((tech, techIdx) => (
                    <div
                      key={techIdx}
                      style={{
                        width: 62,
                        height: 62,
                        borderRadius: 14,
                        background: "var(--bg-secondary)",
                        border: "1px solid var(--border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        transition: "all 0.25s ease",
                        position: "relative",
                      }}
                      title={tech.name}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-4px)";
                        e.currentTarget.style.boxShadow =
                          "var(--card-shadow-hover)";
                        e.currentTarget.style.borderColor = "var(--accent)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                        e.currentTarget.style.borderColor = "var(--border)";
                      }}
                    >
                      <img
                        src={tech.iconUrl}
                        alt={tech.name}
                        width={34}
                        height={34}
                        style={{ transition: "transform 0.2s ease" }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section
        style={{
          padding: "80px 24px",
          maxWidth: 700,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <ScrollReveal>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
              fontWeight: 800,
              color: "var(--text-primary)",
              marginBottom: 12,
              letterSpacing: "-0.02em",
            }}
          >
            Get In Touch
          </h2>
          <div className="section-underline" style={{ marginBottom: 24 }} />
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
              marginBottom: 32,
            }}
          >
            I'm always open to new opportunities and collaborations.
            <br />
            Feel free to reach out if you'd like to work together!
          </p>
          <button
            className="btn-accent"
            onClick={() => router.push("/contact")}
          >
            Contact Me
          </button>
        </ScrollReveal>
      </section>

      {/* ===== RESPONSIVE STYLES ===== */}
      <style jsx>{`
        .hero-layout {
          flex-direction: row;
        }
        .timeline-desktop {
          display: block;
        }
        .timeline-mobile {
          display: none !important;
        }
        @media (max-width: 768px) {
          .hero-layout {
            flex-direction: column-reverse !important;
            text-align: center;
            gap: 32px !important;
          }
          .timeline-desktop {
            display: none !important;
          }
          .timeline-mobile {
            display: block !important;
          }
        }
      `}</style>
    </main>
  );
}