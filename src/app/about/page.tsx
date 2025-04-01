"use client";

import { useState, useEffect } from "react";
import "../styles/about.css";

export default function Achievements() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className={`achievements-container ${isVisible ? 'visible' : ''}`}>
      <div className="section-header">
        <h1>Achievements & Skills</h1>
        <div className="header-underline"></div>
        <p className="subtitle">Milestones from my coding journey</p>
      </div>

      <div className="achievements-grid">
        {/* Hackathon Card */}
        <div 
          className={`achievement-card ${activeCard === 0 ? 'active' : ''}`}
          onMouseEnter={() => setActiveCard(0)}
          onMouseLeave={() => setActiveCard(null)}
        >
          <div className="card-badge">Featured</div>
          <div className="card-inner">
            <div className="card-front">
              <div className="card-icon trophy">
                <img src="/icons/trophy.png" alt="Trophy" />
              </div>
              <div className="card-content">
                <h3>Hackathon Runner-up</h3>
                <p className="card-description">
                  Secured 2nd place at DuHacks Hackathon 2024 with our solution "HandTalk"
                </p>
                <div className="card-footer">
                  <span className="date">March 2024</span>
                  <a href="https://github.com/Yashgabani845/GestureGenius" className="card-link">View Project <span className="arrow">→</span></a>
                </div>
              </div>
            </div>
            <div className="card-back">
              <h3>About HandTalk</h3>
              <p>An AI-powered solution for sign language detection using mobilenet with videocall using webRTC and chat.</p>
              <div className="tech-stack">
                <span>React</span>
                <span>TensorFlow</span>
                <span>Node.js</span>
              </div>
              <a href="https://github.com/Yashgabani845/GestureGenius" className="view-details-btn">View Details</a>
            </div>
          </div>
        </div>

        {/* LeetCode Card */}
        <div 
          className={`achievement-card leetcode ${activeCard === 1 ? 'active' : ''}`}
          onMouseEnter={() => setActiveCard(1)}
          onMouseLeave={() => setActiveCard(null)}
        >
          <div className="card-inner">
            <div className="card-front">
              <div className="card-icon">
              <img src="/icons/leetcode.png" alt="Trophy" />
              </div>
              <div className="card-content">
                <h3>LeetCode</h3>
                <div className="stats-grid">
                  <div className="stat-item">
                    <span className="stat-value">1520</span>
                    <span className="stat-label">Rating</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-value">135+</span>
                    <span className="stat-label">Problems</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-value">8009</span>
                    <span className="stat-label">Rank</span>
                  </div>
                </div>
                <a href="https://leetcode.com/u/MeetThakkar/" className="profile-button">View Profile</a>
              </div>
            </div>
            <div className="card-back">
              <h3>My LeetCode Journey</h3>
              <p>Consistently solving algorithmic problems to improve problem-solving skills.</p>
             
              <a href="https://leetcode.com/u/MeetThakkar/" className="view-details-btn">View Profile</a>
            </div>
          </div>
        </div>

        
        {/* GitHub Card */}
        <div 
          className={`achievement-card github ${activeCard === 3 ? 'active' : ''}`}
          onMouseEnter={() => setActiveCard(3)}
          onMouseLeave={() => setActiveCard(null)}
        >
          <div className="card-inner">
            <div className="card-front">
              <div className="card-icon">
              <img src="/icons/github.jpg" alt="Trophy" />
              </div>
              <div className="card-content">
                <h3>GitHub</h3>
                <div className="stats-grid">
                  <div className="stat-item">
                    <span className="stat-value">120+</span>
                    <span className="stat-label">Contributions</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-value">9+</span>
                    <span className="stat-label">Repositories</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-value">2</span>
                    <span className="stat-label">Open Source</span>
                  </div>
                </div>
                <a href="https://github.com/Meet-Thakkar21" className="profile-button">View Profile</a>
              </div>
            </div>
            <div className="card-back">
              <h3>Open Source Contributions</h3>
              <p>Active contributor to open source projects and personal repositories.</p>
              <div className="achievement-list">
                <div className="achievement-item">
                  <span className="achievement-dot"></span>
                  <span>2 accepted pull requests to popular libraries</span>
                </div>
              </div>
              <a href="https://github.com/Meet-Thakkar21" className="view-details-btn">View Profile</a>
            </div>
          </div>
        </div>


        {/* CodeChef Card */}
        <div 
          className={`achievement-card codechef ${activeCard === 2 ? 'active' : ''}`}
          onMouseEnter={() => setActiveCard(2)}
          onMouseLeave={() => setActiveCard(null)}
        >
          <div className="card-inner">
            <div className="card-front">
              <div className="card-icon">
              <img src="/icons/codechef.jpg" alt="Trophy" />
              </div>
              <div className="card-content">
                <h3>CodeChef</h3>
                <div className="stats-grid">
                  <div className="stat-item">
                    <span className="stat-value">150+</span>
                    <span className="stat-label">Problems Solved</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-value">622</span>
                    <span className="stat-label">Highest Rank</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-back">
              <h3>CodeChef Competitions</h3>
              <p>Participated in 10+ competitive programming contests.</p>
              <div className="achievement-list">
                <div className="achievement-item">
                  <span className="achievement-dot"></span>
                  <span>Global Rank 622 </span>
                </div>
                <div className="achievement-item">
                  <span className="achievement-dot"></span>
                  <span>Solved 150+ problems across categories</span>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div
          className={`achievement-card certificate ${activeCard === 4 ? "active" : ""}`}
          onMouseEnter={() => setActiveCard(4)}
          onMouseLeave={() => setActiveCard(null)}
        >
          <div className="card-inner">
            <div className="card-front">
              <div className="card-icon">
              <img src="/icons/gfg.png" alt="Trophy" />
              </div>
              <div className="card-content">
              <h3>GeeksForGeeks</h3>
                <div className="stats-grid">
                  <div className="stat-item">
                    <span className="stat-value">70+</span>
                    <span className="stat-label">Problems Solved</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-value">244</span>
                    <span className="stat-label">Rank</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-value">225</span>
                    <span className="stat-label">Score</span>
                  </div>
                  
                </div>
                <a href="https://www.geeksforgeeks.org/user/meetthake7e4/" className="profile-button">View Profile</a>
              </div>
              
            </div>
            <div className="card-back">
            <h3>GFG Competitions</h3>
              <p>Participated in 3 competitive programming contests.</p>
              <div className="achievement-list">
                <div className="achievement-item">
                  <span className="achievement-dot"></span>
                  <span>Rank 244 </span>
                </div>
                <div className="achievement-item">
                  <span className="achievement-dot"></span>
                  <span>Solved 70+ problems across categories</span>
                </div>
              </div>
              <a href="https://www.geeksforgeeks.org/user/meetthake7e4/" className="view-details-btn">View Profile</a>
            </div>
            
          </div>
          
        </div>
      </div>
    </main>
  );
}