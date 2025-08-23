"use client";

import { useState, useEffect } from "react";
import portfolioData from '../data.json';

export default function About() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { achievements } = portfolioData;

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
                className={`group relative min-h-[320px] perspective-[1500px] z-0 transition-[z-index] duration-75 ${activeCard === index ? '!z-10' : 'z-0'} opacity-0 animate-fadeInUp`}
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
                  <div className="absolute w-full h-full bg-[#21222c] rounded-2xl shadow-xl flex flex-col [backface-visibility:hidden] overflow-hidden">
                    <div className="flex items-center mt-7 mb-[-24px] ml-7 w-12 h-12 rounded-xl bg-blue-500/10 justify-center">
                      <img src={item.iconUrl} alt={`${item.title} Icon`} className="w-12 h-12 object-contain" />
                    </div>
                    <div className="flex flex-col flex-1 p-7 pt-4">
                      <h3 className="text-xl font-bold mb-4 text-white relative">{item.title}</h3>
                      {item.description && (
                        <p className="text-gray-300 text-base mb-6 leading-relaxed">{item.description}</p>
                      )}
                      {item.stats && (
                        <div className="grid grid-cols-3 gap-3 mb-6">
                          {item.stats.map((stat, statIndex) => (
                            <div key={statIndex} className="flex flex-col items-center text-center p-3 bg-blue-500/10 rounded-lg transition hover:-translate-y-1 hover:bg-blue-500/20">
                              <span className="text-lg font-bold text-blue-400">{stat.value}</span>
                              <span className="text-xs text-gray-400 font-medium">{stat.label}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      {item.date && (
                        <div className="flex justify-between items-center mt-auto">
                          <span className="text-xs text-gray-500 font-medium">{item.date}</span>
                          <a
                            href={item.link}
                            className="text-blue-500 hover:text-blue-400 text-sm font-semibold flex items-center gap-1 transition"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Project <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                          </a>
                        </div>
                      )}
                      {item.stats && (
                        <a
                          href={item.link}
                          className="block w-full mt-5 py-3 rounded-lg text-center font-semibold text-base bg-blue-600 text-white shadow-md relative overflow-hidden transition hover:-translate-y-1 hover:bg-blue-700"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Profile
                        </a>
                      )}
                    </div>
                  </div>
                  {/* Back */}
                  <div className="absolute w-full h-full bg-blue-700 text-white rounded-2xl p-8 flex flex-col [backface-visibility:hidden] rotate-y-180 overflow-hidden">
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="mb-6 text-base">{item.backContent}</p>
                    {item.tech && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {item.tech.map((techItem, techIndex) => (
                          <span key={techIndex} className="bg-white/20 px-3 py-1 rounded-2xl text-xs font-medium">{techItem}</span>
                        ))}
                      </div>
                    )}
                    <a
                      href={item.link}
                      className="block mt-auto bg-white/20 py-2 rounded-md text-center font-semibold transition hover:bg-white/30"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <style jsx global>{`
        .rotate-y-180 { transform: rotateY(180deg); }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp { animation: fadeInUp 0.6s ease-out forwards; }
        .perspective-[1500px] { perspective: 1500px; }
        .font-inter { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
      `}</style>
    </main>
  );
}