"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "../styles/footer.module.css";

export default function Footer() {
  const [emailHovered, setEmailHovered] = useState(false);
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Meet Thakkar</h3>
            <p className={styles.footerText}>
              Full-stack developer passionate about creating innovative solutions.
            </p>
          </div>
          
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Links</h3>
            <ul className={styles.footerLinks}>
              <li><Link href="/" className={styles.footerLink}>Home</Link></li>
              <li><Link href="/about" className={styles.footerLink}>About</Link></li>
              <li><Link href="/projects" className={styles.footerLink}>Projects</Link></li>
              <li><Link href="/contact" className={styles.footerLink}>Contact</Link></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Connect</h3>
            <div className={styles.socialLinks}>
              <a href="https://github.com/Meet-Thakkar21/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <span className={styles.githubIcon}>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/meet-thakkar-13459324b/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <span className={styles.linkedinIcon}>LinkedIn</span>
              </a>
              <a href="https://x.com/thakkarmeet2104?t=Qfd24ZEWGjscBCUUXGotPw&s=08" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <span className={styles.twitterIcon}>Twitter</span>
              </a>
            </div>
          </div>
        </div>
        
        <div 
          className={styles.emailContainer}
          onMouseEnter={() => setEmailHovered(true)}
          onMouseLeave={() => setEmailHovered(false)}
        >
          <a href="mailto:your.email@example.com" className={styles.emailLink}>
            <span className={`${styles.emailText} ${emailHovered ? styles.hovered : ""}`}>
              thakkarmeet2145@gmail.com
            </span>
          </a>
        </div>
        
        <div className={styles.copyright}>
          <p>© {new Date().getFullYear()} Meet Thakkar. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}