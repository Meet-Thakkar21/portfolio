"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoText}>Meet Thakkar</span>
            <span className={styles.logoEmoji}>👨‍💻</span>
          </Link>
        </div>

        <div className={styles.menuButton} onClick={toggleMenu}>
          <div className={`${styles.menuBar} ${menuOpen ? styles.open : ""}`}></div>
          <div className={`${styles.menuBar} ${menuOpen ? styles.open : ""}`}></div>
          <div className={`${styles.menuBar} ${menuOpen ? styles.open : ""}`}></div>
        </div>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
          <li><Link href="/" className={styles.navLink}>Home</Link></li>
          <li><Link href="/about" className={styles.navLink}>About</Link></li>
          <li><Link href="/projects" className={styles.navLink}>Projects</Link></li>
          <li><Link href="/contact" className={styles.navLink}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}