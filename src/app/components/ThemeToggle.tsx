"use client";

import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="theme-toggle"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 40,
        height: 40,
        borderRadius: 12,
        border: "1px solid var(--border)",
        background: "var(--bg-tertiary)",
        color: "var(--text-primary)",
        cursor: "pointer",
        transition: "all 0.3s ease",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <span
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease",
          transform: theme === "light" ? "rotate(0deg) scale(1)" : "rotate(90deg) scale(0)",
          opacity: theme === "light" ? 1 : 0,
          position: "absolute",
        }}
      >
        <Sun size={18} strokeWidth={2} />
      </span>
      <span
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease",
          transform: theme === "dark" ? "rotate(0deg) scale(1)" : "rotate(-90deg) scale(0)",
          opacity: theme === "dark" ? 1 : 0,
          position: "absolute",
        }}
      >
        <Moon size={18} strokeWidth={2} />
      </span>
    </button>
  );
}
