"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: scrolled ? 60 : 76,
        background: scrolled ? "var(--nav-bg-scrolled)" : "var(--nav-bg)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: 1200,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "1.4rem",
            fontWeight: 700,
            textDecoration: "none",
            color: "var(--text-primary)",
            gap: 8,
            letterSpacing: "-0.02em",
          }}
        >
          Meet Thakkar
          <span className="animate-wave" style={{ fontSize: "1.3rem" }}>
            👨‍💻
          </span>
        </Link>

        {/* Desktop Links + Toggle */}
        <div
          style={{
            alignItems: "center",
            gap: 8,
          }}
          className="nav-desktop"
        >
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
            className="nav-links-desktop"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      textDecoration: "none",
                      padding: "8px 16px",
                      borderRadius: 10,
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      color: isActive ? "var(--accent)" : "var(--text-secondary)",
                      background: isActive ? "var(--accent-bg)" : "transparent",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = "var(--text-primary)";
                        e.currentTarget.style.background = "var(--accent-bg)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = "var(--text-secondary)";
                        e.currentTarget.style.background = "transparent";
                      }
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ThemeToggle />
        </div>

        {/* Mobile: Toggle + Hamburger */}
        <div
          style={{ alignItems: "center", gap: 12 }}
          className="nav-mobile"
        >
          <ThemeToggle />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: 26,
              height: 18,
              cursor: "pointer",
              zIndex: 60,
            }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              style={{
                display: "block",
                width: "100%",
                height: 2,
                background: "var(--text-primary)",
                borderRadius: 2,
                transition: "all 0.3s ease",
                transform: menuOpen
                  ? "translateY(8px) rotate(45deg)"
                  : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "100%",
                height: 2,
                background: "var(--text-primary)",
                borderRadius: 2,
                transition: "all 0.3s ease",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: "100%",
                height: 2,
                background: "var(--text-primary)",
                borderRadius: 2,
                transition: "all 0.3s ease",
                transform: menuOpen
                  ? "translateY(-8px) rotate(-45deg)"
                  : "none",
              }}
            />
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              background: "var(--overlay)",
              zIndex: 49,
            }}
            onClick={() => setMenuOpen(false)}
          />
        )}

        {/* Mobile Slide-in Menu */}
        <div
          style={{
            position: "fixed",
            top: 0,
            right: menuOpen ? 0 : "-100%",
            height: "100vh",
            width: "75%",
            maxWidth: 320,
            background: "var(--bg-secondary)",
            borderLeft: "1px solid var(--border)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 24,
            transition: "right 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
            zIndex: 55,
            boxShadow: menuOpen ? "-4px 0 24px rgba(0,0,0,0.1)" : "none",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 24,
            }}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      textDecoration: "none",
                      fontSize: "1.3rem",
                      fontWeight: 600,
                      color: isActive
                        ? "var(--accent)"
                        : "var(--text-primary)",
                      transition: "color 0.2s ease",
                    }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <style jsx>{`
        .nav-desktop {
          display: none !important;
        }
        .nav-mobile {
          display: flex !important;
        }
        @media (min-width: 768px) {
          .nav-desktop {
            display: flex !important;
          }
          .nav-mobile {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}