"use client";

import { useState, useEffect } from "react";
import portfolioData from '../data.json'; // Import the data

export default function Achievements() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Get achievements data from the imported file
  const { achievements } = portfolioData;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className={`max-w-6xl mx-auto py-16 px-4 font-inter ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} transition-all duration-800 ease-out`}>
      <div className="text-center mb-16 relative">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-tight">
          Achievements & Skills
        </h1>
        <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto my-4 rounded relative before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-indigo-500 before:via-purple-500 before:to-pink-500 before:blur-lg before:opacity-60" />
        <p className="text-lg text-slate-500 font-normal max-w-xl mx-auto">Milestones from my coding journey</p>
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
              <div className="absolute top-4 right-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full z-10 shadow-md">
                Featured
              </div>
            )}
            <div
              className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${activeCard === index ? 'rotate-y-180' : ''}`}
            >
              {/* Front */}
              <div className="absolute w-full h-full bg-white dark:bg-slate-800 rounded-2xl shadow-xl flex flex-col [backface-visibility:hidden] overflow-hidden">
                <div className="flex items-center mt-7 mb-[-24px] ml-7 w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 justify-center">
                  <img src={item.iconUrl} alt={`${item.title} Icon`} className="w-12 h-12 object-contain" />
                </div>
                <div className="flex flex-col flex-1 p-7 pt-4">
                  <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-50 relative">{item.title}</h3>
                  {item.description && (
                    <p className="text-slate-500 dark:text-slate-300 text-base mb-6 leading-relaxed">{item.description}</p>
                  )}
                  {item.stats && (
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {item.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="flex flex-col items-center text-center p-3 bg-indigo-500/5 rounded-lg transition hover:-translate-y-1 hover:bg-indigo-500/10">
                          <span className="text-lg font-bold bg-gradient-to-br from-indigo-500 to-purple-500 bg-clip-text text-transparent">{stat.value}</span>
                          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">{stat.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {item.date && (
                    <div className="flex justify-between items-center mt-auto">
                      <span className="text-xs text-slate-400 font-medium">{item.date}</span>
                      <a
                        href={item.link}
                        className="text-indigo-500 hover:text-indigo-700 text-sm font-semibold flex items-center gap-1 transition"
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
                      className="block w-full mt-5 py-3 rounded-lg text-center font-semibold text-base bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md relative overflow-hidden transition hover:-translate-y-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Profile
                    </a>
                  )}
                </div>
              </div>
              {/* Back */}
              <div className="absolute w-full h-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white rounded-2xl p-8 flex flex-col [backface-visibility:hidden] rotate-y-180 overflow-hidden">
                <h3 className="text-lg font-bold mb-4 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-10 after:h-1 after:bg-white/50 after:rounded"></h3>
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
      {/* Animations for Card Flipping & Fade In */}
      <style jsx global>{`
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .perspective-[1500px] {
          perspective: 1500px;
        }
        .font-inter {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
      `}</style>
    </main>
  );
}