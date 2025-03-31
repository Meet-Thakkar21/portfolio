"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './styles/home.module.css';

// Typing animation component
const TypingAnimation = ({ titles  }: { titles: string[] }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const currentTitle = titles[currentIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // If typing
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
        
        // If word is complete, start deleting after delay
        if (displayText === currentTitle) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        // If deleting
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
        
        // If deleted, move to next title
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 150); // Faster when deleting
    
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIndex, titles]);
  
  return (
    <>
      {displayText}<span className={styles.cursor}>|</span>
    </>
  );
};

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const titles = ['Full-Stack Developer', 'ML Enthusiast', 'Generative AI Developer'];
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className={styles.main}>
      <section className={`${styles.hero} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            Hello, I'm <span className={styles.name}>Meet Thakkar</span>
          </h1>
          <h2 className={styles.subtitle}>
            <TypingAnimation titles={titles} />
          </h2>
          
          <p className={styles.description}>
            Passionate developer exploring the intersection of web technologies, 
            artificial intelligence, and machine learning. Building innovative 
            solutions that make a difference.
          </p>
          
          <div className={styles.buttonContainer}>
            <button className={`${styles.button} ${styles.primary}`}>
              View Projects
            </button>
            <button className={`${styles.button} ${styles.secondary}`}>
              Contact Me
            </button>
          </div>
        </div>
        
        <div className={styles.heroImage}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/profile.jpg" 
              alt="Profile Image" 
              width={400} 
              height={400}
              className={styles.profileImage}
              priority
            />
          </div>
          <div className={styles.backgroundShape}></div>
        </div>
      </section>

      <section className={styles.journey}>
  <h2 className={styles.sectionTitle}>My Journey</h2>
  <div className={styles.timelineContainer}>
    <div className={styles.timelineItem}>
      <div className={styles.timelineIcon}>🎓</div>
      <div className={styles.timelineContent}>
        <h3>B.Tech Computer Science</h3>
        <p>Dharmsinh Desai University</p>
        <p>CGPA: 8.75</p>
        <span className={styles.timelinePeriod}>2022 - 2026</span>
      </div>
    </div>
    
    <div className={styles.timelineItem}>
      <div className={styles.timelineIcon}>🏫</div>
      <div className={styles.timelineContent}>
        <h3>12th Standard</h3>
        <p>Shikhar Public School</p>
        <p>Percentage: 90.5%</p>
        <span className={styles.timelinePeriod}>2021 - 2022</span>
      </div>
    </div>
    
    <div className={styles.timelineItem}>
      <div className={styles.timelineIcon}>📚</div>
      <div className={styles.timelineContent}>
        <h3>10th Standard</h3>
        <p>Shikhar Public School</p>
        <p>Percentage: 92.5%</p>
        <span className={styles.timelinePeriod}>2019 - 2020</span>
      </div>
    </div>
  </div>
</section>
      <section className={styles.techStack}>
      <h2 className={styles.sectionTitle}>My Tech Stack</h2>
      
      <div className={styles.techCategory}>
        <h3 className={styles.categoryTitle}>Frontend</h3>
        <div className={styles.techGrid}>
          <div className={`${styles.techItem} ${isVisible ? styles.fadeIn : ''}`}>
            <div className={styles.techIconContainer}>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" width={40} height={40} />
            </div>
            <p>React</p>
          </div>
          
          <div className={`${styles.techItem} ${isVisible ? styles.fadeIn : ''}`} style={{animationDelay: '0.1s'}}>
            <div className={styles.techIconContainer}>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt="Next.js" width={40} height={40} />
            </div>
            <p>Next.js</p>
          </div>
          
          <div className={`${styles.techItem} ${isVisible ? styles.fadeIn : ''}`} style={{animationDelay: '0.2s'}}>
            <div className={styles.techIconContainer}>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML5" width={40} height={40} />
            </div>
            <p>HTML5</p>
          </div>
          
          <div className={`${styles.techItem} ${isVisible ? styles.fadeIn : ''}`} style={{animationDelay: '0.3s'}}>
            <div className={styles.techIconContainer}>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS3" width={40} height={40} />
            </div>
            <p>CSS3</p>
          </div>
          
          <div className={`${styles.techItem} ${isVisible ? styles.fadeIn : ''}`} style={{animationDelay: '0.4s'}}>
            <div className={styles.techIconContainer}>
              <Image  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" width={40} height={40} />
            </div>
            <p>JavaScript</p>
          </div>
        </div>
      </div>
      
      <div className={styles.techCategory}>
        <h3 className={styles.categoryTitle}>Backend</h3>
        <div className={styles.techGrid}>
          <div className={`${styles.techItem} ${isVisible ? styles.fadeIn : ''}`} style={{animationDelay: '0.5s'}}>
            <div className={styles.techIconContainer}>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" width={40} height={40} />
            </div>
            <p>Node.js</p>
          </div>
          
          <div className={`${styles.techItem} ${isVisible ? styles.fadeIn : ''}`} style={{animationDelay: '0.6s'}}>
            <div className={styles.techIconContainer}>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" alt="Express" width={40} height={40} />
            </div>
            <p>Express</p>
          </div>
          
          <div className={`${styles.techItem} ${isVisible ? styles.fadeIn : ''}`} style={{animationDelay: '0.7s'}}>
            <div className={styles.techIconContainer}>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt="MongoDB" width={40} height={40} />
            </div>
            <p>MongoDB</p>
          </div>
          
          <div className={`${styles.techItem} ${isVisible ? styles.fadeIn : ''}`} style={{animationDelay: '0.8s'}}>
            <div className={styles.techIconContainer}>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" alt="SQL" width={40} height={40} />
            </div>
            <p>SQL</p>
          </div>
        </div>
      </div>
      
      <div className={styles.techCategory}>
        <h3 className={styles.categoryTitle}>Tools</h3>
        <div className={styles.techGrid}>
          <div className={`${styles.techItem} ${isVisible ? styles.fadeIn : ''}`} style={{animationDelay: '0.9s'}}>
            <div className={styles.techIconContainer}>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" width={40} height={40} />
            </div>
            <p>Git</p>
          </div>
          
          <div className={`${styles.techItem} ${isVisible ? styles.fadeIn : ''}`} style={{animationDelay: '1.0s'}}>
            <div className={styles.techIconContainer}>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker" width={40} height={40} />
            </div>
            <p>Docker</p>
          </div>
          
          <div className={`${styles.techItem} ${isVisible ? styles.fadeIn : ''}`} style={{animationDelay: '1.1s'}}>
            <div className={styles.techIconContainer}>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" width={40} height={40} />
            </div>
            <p>AWS</p>
          </div>
          
          <div className={`${styles.techItem} ${isVisible ? styles.fadeIn : ''}`} style={{animationDelay: '1.2s'}}>
            <div className={styles.techIconContainer}>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" alt="Firebase" width={40} height={40} />
            </div>
            <p>Firebase</p>
          </div>
        </div>
      </div>
      
      <div className={styles.techCategory}>
        <h3 className={styles.categoryTitle}>AI/ML</h3>
        <div className={styles.techGrid}>
          <div className={`${styles.techItem} ${isVisible ? styles.fadeIn : ''}`} style={{animationDelay: '1.3s'}}>
            <div className={styles.techIconContainer}>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" width={40} height={40} />
            </div>
            <p>TensorFlow</p>
          </div>
          
          <div className={`${styles.techItem} ${isVisible ? styles.fadeIn : ''}`} style={{animationDelay: '1.4s'}}>
            <div className={styles.techIconContainer}>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" alt="PyTorch" width={40} height={40} />
            </div>
            <p>PyTorch</p>
          </div>
          
          <div className={`${styles.techItem} ${isVisible ? styles.fadeIn : ''}`} style={{animationDelay: '1.5s'}}>
            <div className={styles.techIconContainer}>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" width={40} height={40} />
            </div>
            <p>Python</p>
          </div>
        </div>
      </div>
    </section>
      <section className={styles.contact}>
        <h2 className={styles.sectionTitle}>Get In Touch</h2>
        <p className={styles.contactText}>
          I'm always open to new opportunities and collaborations.
          Feel free to reach out if you'd like to work together!
        </p>
        <button className={`${styles.button} ${styles.primary}`}>
          Contact Me
        </button>
      </section>
    </main>
  );
}