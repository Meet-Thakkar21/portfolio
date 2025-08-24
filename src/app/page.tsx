"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import portfolioData from './data.json';

const TypingAnimation = ({ titles }: { titles: string[] }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
        if (displayText === currentTitle) setTimeout(() => setIsDeleting(true), 1200);
      } else {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIndex, titles]);

  return (
    <>
      {displayText}
      <span className="inline-block w-[2px] ml-1 animate-blink text-blue-500">|</span>
    </>
  );
};

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const titles = ["Full-Stack Developer", "ML Enthusiast", "Generative AI Developer"];
  const router = useRouter();
  const { resumeUrl } = portfolioData.contactInfo;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="pt-24 min-h-screen bg-[#18181c] text-gray-100 font-sans transition-colors duration-300">
      {/* HERO SECTION */}
      <section
        className={`flex flex-col-reverse md:flex-row justify-between items-center min-h-[80vh] px-4 md:px-12 max-w-6xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex-1 max-w-xl z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight tracking-tight text-white">
            Hello, I'm <span className="text-blue-500">Meet Thakkar</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-blue-400 mb-6 font-medium flex items-center min-h-[1.5em]">
            <TypingAnimation titles={titles} />
          </h2>
          <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed bg-[#21222c] p-5 rounded-xl border border-white/5">
            Passionate developer exploring the intersection of{" "}
            <span className="text-blue-400">web technologies</span>,{" "}
            <span className="text-blue-400">artificial intelligence</span>, and{" "}
            <span className="text-blue-400">machine learning</span>. Building innovative solutions that make a difference.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button
              className="px-6 py-3 rounded-full text-white font-semibold bg-blue-600 hover:bg-blue-700 transition"
              onClick={() => router.push("/projects")}
            >
              View Projects
            </button>
            <button
              className="px-6 py-3 rounded-full font-semibold border-2 border-blue-500 text-blue-400 bg-transparent hover:bg-blue-900/30 transition"
              onClick={() => router.push("/contact")}
            >
              Contact Me
            </button>
            <a
              href={resumeUrl}
              download
              className="px-6 py-3 rounded-full font-semibold border-2 border-blue-500 text-blue-400 bg-transparent hover:bg-blue-900/30 transition"
              style={{ textAlign: 'center', display: 'inline-block' }}
            >
              Download Resume
            </a>
          </div>
        </div>
        {/* Floating Profile Image */}
        <div className="flex-1 flex justify-center items-center relative mt-8 md:mt-0 z-10">
          <div className="w-[260px] md:w-[340px] h-[260px] md:h-[340px] rounded-3xl overflow-hidden relative shadow-lg border-2 border-[#232334] bg-[#18181c] animate-slow-float">
            <Image
              src="/profile.jpg"
              alt="Profile Image"
              width={400}
              height={400}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ...rest of the sections as before... */}
      {/* Education, Tech Stack, Get In Touch sections remain unchanged */}

      <style jsx global>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s steps(1, end) infinite;
        }
        @keyframes slowFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-24px); }
        }
        .animate-slow-float {
          animation: slowFloat 5s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}