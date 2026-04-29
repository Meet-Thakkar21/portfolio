"use client";

import Link from "next/link";
import portfolioData from "../data.json";
import { Github, Linkedin, Twitter, Instagram, Heart } from "lucide-react";

export default function Footer() {
  const { name } = portfolioData;
  const { email, socials } = portfolioData.contactInfo;

  const getSocialIcon = (socialName: string) => {
    switch (socialName) {
      case "GitHub":
        return <Github size={18} />;
      case "LinkedIn":
        return <Linkedin size={18} />;
      case "Twitter":
        return <Twitter size={18} />;
      case "Instagram":
        return <Instagram size={18} />;
      default:
        return null;
    }
  };

  return (
    <footer
      style={{
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--border)",
        paddingTop: 48,
        paddingBottom: 28,
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        {/* Gradient line accent */}
        <div
          style={{
            width: 60,
            height: 4,
            background: "var(--gradient-accent)",
            borderRadius: 2,
            margin: "0 auto 40px auto",
          }}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 40,
            marginBottom: 36,
          }}
        >
          {/* Brand */}
          <div>
            <h3
              style={{
                fontSize: "1.15rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: 12,
              }}
            >
              {name}
            </h3>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.9rem",
                lineHeight: 1.6,
              }}
            >
              Full-stack developer passionate about creating innovative
              solutions with web technologies and AI.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3
              style={{
                fontSize: "1.15rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: 12,
              }}
            >
              Links
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <li key={item} style={{ marginBottom: 8 }}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    style={{
                      color: "var(--text-secondary)",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--accent)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--text-secondary)")
                    }
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3
              style={{
                fontSize: "1.15rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: 12,
              }}
            >
              Connect
            </h3>
            <div style={{ display: "flex", gap: 10 }}>
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 10,
                    background: "var(--bg-tertiary)",
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--accent)";
                    e.currentTarget.style.color = "#FFFFFF";
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--bg-tertiary)";
                    e.currentTarget.style.color = "var(--text-secondary)";
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {getSocialIcon(social.name)}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Email pill */}
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <a
            href={`mailto:${email}`}
            style={{
              display: "inline-block",
              background: "var(--accent-bg)",
              color: "var(--accent)",
              padding: "8px 20px",
              borderRadius: 999,
              fontSize: "0.85rem",
              fontWeight: 500,
              textDecoration: "none",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--accent)";
              e.currentTarget.style.color = "#FFFFFF";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--accent-bg)";
              e.currentTarget.style.color = "var(--accent)";
            }}
          >
            {email}
          </a>
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: 20,
            textAlign: "center",
            color: "var(--text-tertiary)",
            fontSize: "0.82rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
          }}
        >
          <span>© {new Date().getFullYear()} {name}. Built with</span>
          <Heart
            size={14}
            style={{ color: "var(--accent)", fill: "var(--accent)" }}
          />
        </div>
      </div>
    </footer>
  );
}