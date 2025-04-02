import styles from "../styles/contact.module.css"
import { Mail, Phone, Github, Linkedin, Twitter, Instagram, MapPin, ArrowRight } from "lucide-react"

export default function Contact() {
  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Get In Touch</h1>
        <p className={styles.subtitle}>
          Feel free to reach out through any of the following channels. I'm always open to discussing new projects,
          creative ideas, or opportunities to be part of your vision.
        </p>
      </div>

      <div className={styles.contactGrid}>
        <div className={styles.contactInfo}>
          <div className={styles.infoCard}>
            <div className={styles.iconWrapper}>
              <Mail className={styles.icon} />
            </div>
            <h3>Email</h3>
            <a href="mailto:thakkarmeet2145@gmail.com" className={styles.contactLink}>
            thakkarmeet2145@gmail.com
            </a>
            <p className={styles.responseTime}>I usually respond within 24 hours</p>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.iconWrapper}>
              <Phone className={styles.icon} />
            </div>
            <h3>Phone</h3>
            <a href="tel:+918264107107" className={styles.contactLink}>
              +91 8264107107
            </a>
            <p className={styles.responseTime}>Available weekdays 9 AM - 6 PM</p>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.iconWrapper}>
              <MapPin className={styles.icon} />
            </div>
            <h3>Location</h3>
            <p className={styles.contactLink}>Ahmedabad, Gujarat</p>
            <p className={styles.responseTime}>Open to remote & relocation</p>
          </div>
        </div>

        <div className={styles.socialSection}>
          <h2 className={styles.socialTitle}>Connect With Me</h2>
          <div className={styles.socialGrid}>
            <a
              href="https://github.com/Meet-Thakkar21/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialCard}
            >
              <div className={styles.socialIconWrapper}>
                <Github className={styles.socialIcon} />
              </div>
              <h3>GitHub</h3>
              <p>Check out my code repositories and contributions</p>
              <span className={styles.socialLink}>
                github.com/Meet-Thakkar21 <ArrowRight size={16} />
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/meet-thakkar-13459324b/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialCard}
            >
              <div className={styles.socialIconWrapper}>
                <Linkedin className={styles.socialIcon} />
              </div>
              <h3>LinkedIn</h3>
              <p>Connect with me professionally and view my experience</p>
              <span className={styles.socialLink}>
                linkedin.com/in/meetthakkar <ArrowRight size={16} />
              </span>
            </a>

            <a
              href="https://x.com/thakkarmeet2104?t=Qfd24ZEWGjscBCUUXGotPw&s=08"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialCard}
            >
              <div className={styles.socialIconWrapper}>
                <Twitter className={styles.socialIcon} />
              </div>
              <h3>Twitter</h3>
              <p>Follow me for updates on my latest projects and tech insights</p>
              <span className={styles.socialLink}>
                twitter.com/thakkarmeet2104 <ArrowRight size={16} />
              </span>
            </a>

            <a
              href="https://www.instagram.com/thakkar.meet.21/?next=%2F&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialCard}
            >
              <div className={styles.socialIconWrapper}>
                <Instagram className={styles.socialIcon} />
              </div>
              <h3>Instagram</h3>
              <p>See my creative side and behind-the-scenes moments</p>
              <span className={styles.socialLink}>
                instagram.com/thakkar.meet.21 <ArrowRight size={16} />
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.resumeSection}>
        <div className={styles.resumeContent}>
          <h2>Looking for my resume?</h2>
          <p>Download my complete resume to learn more about my skills, experience, and education.</p>
          <a href="/resume.pdf" download className={styles.resumeButton}>
            Download Resume
          </a>
        </div>
      </div>
    </main>
  )
}

