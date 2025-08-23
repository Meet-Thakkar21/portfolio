"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
          <div className="flex gap-4">
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

      {/* EDUCATION SECTION */}
      {/* EDUCATION SECTION */}
<section className="py-20 px-6 max-w-5xl mx-auto">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
    Education
  </h2>
  <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
    <div className="flex-1 bg-[#21222c] p-6 rounded-xl shadow border border-blue-500/10 flex flex-col items-start md:items-center text-left md:text-center transition hover:-translate-y-2">
      <div className="w-[50px] h-[50px] rounded-full bg-[#232334] flex justify-center items-center text-2xl shadow-lg mb-4 border-2 border-blue-500/40">
        🎓
      </div>
      <h3 className="font-semibold text-lg mb-1 text-white">B.Tech Computer Science</h3>
      <p className="mb-1 text-gray-400">Dharmsinh Desai University</p>
      <p className="mb-1 text-gray-400">CGPA: 8.75</p>
      <span className="inline-block bg-blue-900/20 text-blue-400 px-3 py-1 rounded-full text-xs font-medium">
        2022 - 2026
      </span>
    </div>
    <div className="flex-1 bg-[#21222c] p-6 rounded-xl shadow border border-blue-500/10 flex flex-col items-start md:items-center text-left md:text-center transition hover:-translate-y-2">
      <div className="w-[50px] h-[50px] rounded-full bg-[#232334] flex justify-center items-center text-2xl shadow-lg mb-4 border-2 border-blue-500/40">
        🏫
      </div>
      <h3 className="font-semibold text-lg mb-1 text-white">12th Standard</h3>
      <p className="mb-1 text-gray-400">Shikhar Public School</p>
      <p className="mb-1 text-gray-400">Percentage: 90.5%</p>
      <span className="inline-block bg-blue-900/20 text-blue-400 px-3 py-1 rounded-full text-xs font-medium">
        2021 - 2022
      </span>
    </div>
    <div className="flex-1 bg-[#21222c] p-6 rounded-xl shadow border border-blue-500/10 flex flex-col items-start md:items-center text-left md:text-center transition hover:-translate-y-2">
      <div className="w-[50px] h-[50px] rounded-full bg-[#232334] flex justify-center items-center text-2xl shadow-lg mb-4 border-2 border-blue-500/40">
        📚
      </div>
      <h3 className="font-semibold text-lg mb-1 text-white">10th Standard</h3>
      <p className="mb-1 text-gray-400">Shikhar Public School</p>
      <p className="mb-1 text-gray-400">Percentage: 92.5%</p>
      <span className="inline-block bg-blue-900/20 text-blue-400 px-3 py-1 rounded-full text-xs font-medium">
        2019 - 2020
      </span>
    </div>
  </div>
</section>
      {/* TECH STACK SECTION */}
      <section className="py-12 bg-[#18181c]/80 border-t border-white/5">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
          My Tech Stack
        </h2>
        <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
          {[
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
            { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
            { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
            { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
            { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
            { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" },
            { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
            { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
            { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
            { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
            { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
            { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" }
          ].map((tech) => (
            <div
              key={tech.name}
              className="group relative w-16 h-16 flex items-center justify-center rounded-lg bg-[#191923] hover:bg-blue-900/50 transition cursor-pointer"
            >
              {/* Tooltip above the icon */}
              <span className="absolute bottom-full left-1/2 mb-3 -translate-x-1/2 px-2 py-1 bg-[#232334] text-xs text-gray-100 rounded shadow opacity-0 group-hover:opacity-100 pointer-events-none transition whitespace-nowrap z-20">
                {tech.name}
              </span>
              <img
                src={tech.icon}
                alt={tech.name}
                width={40}
                height={40}
                className="transition-transform group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>

      {/* GET IN TOUCH SECTION */}
      <section className="py-20 px-4 max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Get In Touch
        </h2>
        <div className="mx-auto mb-7 w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full" />
        <p className="text-lg text-gray-300 mb-8">
          I'm always open to new opportunities and collaborations. <br />
          Feel free to reach out if you'd like to work together!
        </p>
        <button
          className="px-8 py-3 rounded-full text-white font-semibold bg-blue-600 hover:bg-blue-700 transition"
          onClick={() => router.push("/contact")}
        >
          Contact Me
        </button>
      </section>

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