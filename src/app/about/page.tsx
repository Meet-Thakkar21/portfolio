"use client";

import { useState, useEffect } from "react";
import portfolioData from '../data.json';

export default function About() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { achievements, experience } = portfolioData;

  useEffect(() => setIsVisible(true), []);

  return (
    <main className={`min-h-screen bg-[#18181c] text-gray-100 py-16 px-4 pt-25 font-inter ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} transition-all duration-800 ease-out`}>
      <div className="max-w-6xl mx-auto">
        {/* Intro Section */}
        <section className="mb-14 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">About Me</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Hi, I'm Meet Thakkar — a passionate full-stack developer and AI enthusiast. My journey is driven by curiosity, creativity, and a commitment to building impactful solutions.<br />
            I love to participate in hackathons, contribute to open-source, and constantly challenge myself to learn more.
          </p>
        </section>
        
        {/* Experience Section */}
        <section className="mb-14">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-white mb-2">Experience</h2>
    <div className="h-1 w-20 bg-blue-500 mx-auto my-4 rounded" />
    <p className="text-lg text-gray-400 font-normal max-w-xl mx-auto">Professional work experience and internships</p>
  </div>
  <div className={`grid ${experience.length === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'} gap-8`}>
    {experience.map((exp, idx) => (
      <div
        key={idx}
        className={`bg-[#21222c] rounded-2xl shadow-xl p-7 flex flex-col gap-3 relative ${experience.length === 1 ? 'w-full max-w-4xl mx-auto' : ''}`}
      >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl font-bold text-white">{exp.role}</span>
                  <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">Internship</span>
                </div>
                <div className="flex flex-col gap-1 mb-2">
                  <span className="text-base text-gray-400 font-semibold">{exp.company}</span>
                  <span className="text-sm text-gray-500">{exp.location}</span>
                  <span className="text-sm text-gray-500 font-mono">{exp.period}</span>
                </div>
                <p className="text-gray-300 text-base leading-relaxed mb-2">{exp.description}</p>
                <div className="flex gap-3 mt-auto">
                  <a
                    href={exp.letterUrl}
                    className="inline-block py-2 px-5 rounded-lg font-semibold text-base bg-blue-600 text-white shadow-md transition hover:-translate-y-1 hover:bg-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Completion Letter
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Achievements</h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto my-4 rounded" />
            <p className="text-lg text-gray-400 font-normal max-w-xl mx-auto">Milestones from my coding journey</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {achievements.map((item, index) => (
              <div
                key={index}
                className={`group relative min-h-[320px] perspective-[1500px] z-0 transition-all duration-500 ease-in-out ${activeCard === index ? '!z-10' : 'z-0'} opacity-100`}
                style={{ animationDelay: `${0.1 * (index + 1)}s`, animationFillMode: 'forwards' }}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {item.date && (
                  <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full z-10 shadow-md">
                    Featured
                  </div>
                )}
                <div
                  className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${activeCard === index ? 'rotate-y-180' : ''}`}
                >
                  {/* Front */}
                  <div className="absolute w-full h-full bg-[#21222c] rounded-2xl shadow-xl flex flex-col items-center justify-center px-6 py-8 text-center [backface-visibility:hidden]">
                    {item.iconUrl && (
                      <img src={item.iconUrl} alt={item.title} className="w-14 h-14 mb-4 rounded-xl object-cover" />
                    )}
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    {item.stats ? (
                      <div className="flex flex-wrap justify-center gap-3 mb-3">
                        {item.stats.map((stat, i) => (
                          <div key={i} className="bg-blue-800 text-white px-3 py-1 rounded-lg font-mono text-sm shadow">
                            {stat.value} <span className="text-gray-200 font-normal ml-1">{stat.label}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-300 text-base mb-2">{item.description}</p>
                    )}
                    <a
                      href={item.link}
                      className="mt-2 inline-block text-blue-400 underline font-medium hover:text-blue-500 transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View More
                    </a>
                  </div>
                  {/* Back */}
                  <div className="absolute w-full h-full bg-blue-900 rounded-2xl shadow-xl flex flex-col items-center justify-center px-6 py-8 text-center rotate-y-180 [backface-visibility:hidden]">
                    <p className="text-lg text-white mb-4">{item.backContent}</p>
                    {item.tech && (
                      <div className="flex flex-wrap justify-center gap-2">
                        {item.tech.map((tech, idx) => (
                          <span key={idx} className="bg-blue-700 text-xs text-white px-3 py-1 rounded-lg font-semibold shadow">{tech}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}