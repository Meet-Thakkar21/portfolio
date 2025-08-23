"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from "next/navigation";

// Typing animation component
const TypingAnimation = ({ titles }: { titles: string[] }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
        if (displayText === currentTitle) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIndex, titles]);

  return (
    <>
      {displayText}
      <span className="inline-block w-[3px] ml-1 animate-blink">|</span>
    </>
  );
};

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const titles = ['Full-Stack Developer', 'ML Enthusiast', 'Generative AI Developer'];
  const router = useRouter();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="pt-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className={`flex flex-col-reverse md:flex-row justify-between items-center min-h-[90vh] px-5 md:px-[5%] max-w-[1200px] mx-auto transition-all duration-800 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        <div className="flex-1 max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Hello, I'm <span className="bg-gradient-to-r from-indigo-600 to-pink-400 bg-clip-text text-transparent">Meet Thakkar</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-6 font-semibold flex items-center min-h-[1.5em]">
            <TypingAnimation titles={titles} />
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
            Passionate developer exploring the intersection of web technologies, artificial intelligence, and machine learning. Building innovative solutions that make a difference.
          </p>
          <div className="flex gap-4">
            <button
              className="px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-indigo-600 to-pink-400 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
              onClick={() => router.push("/projects")}
            >
              View Projects
            </button>
            <button
              className="px-6 py-3 rounded-full font-semibold border-2 border-indigo-600 text-gray-800 bg-transparent hover:bg-indigo-50 transition hover:-translate-y-1"
              onClick={() => router.push("/contact")}
            >
              Contact Me
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center relative mt-8 md:mt-0">
          <div className="w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-3xl overflow-hidden relative z-10 shadow-xl animate-float">
            <Image
              src="/profile.jpg"
              alt="Profile Image"
              width={400}
              height={400}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="absolute w-[340px] md:w-[450px] h-[340px] md:h-[450px] rounded-3xl bg-gradient-to-r from-indigo-400/20 to-pink-300/20 -z-10 top-2 left-2 animate-pulse-shape" />
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 px-5 md:px-[5%] max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative after:content-[''] after:absolute after:w-20 after:h-1 after:bg-gradient-to-r after:from-indigo-600 after:to-pink-400 after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:rounded"></h2>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative after:content-[''] after:absolute after:w-20 after:h-1 after:bg-gradient-to-r after:from-indigo-600 after:to-pink-400 after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:rounded">My Journey</h2>
        <div className="flex flex-col gap-8 max-w-2xl mx-auto">
          {/* Timeline items */}
          <div className="flex gap-6 items-start">
            <div className="w-[50px] h-[50px] rounded-full bg-gray-100 flex justify-center items-center text-2xl shadow-lg flex-shrink-0">
              🎓
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow transition hover:-translate-y-1 hover:shadow-xl flex-grow">
              <h3 className="font-semibold text-lg mb-1">B.Tech Computer Science</h3>
              <p className="mb-1 text-gray-700">Dharmsinh Desai University</p>
              <p className="mb-1 text-gray-700">CGPA: 8.75</p>
              <span className="inline-block bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium">2022 - 2026</span>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="w-[50px] h-[50px] rounded-full bg-gray-100 flex justify-center items-center text-2xl shadow-lg flex-shrink-0">
              🏫
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow transition hover:-translate-y-1 hover:shadow-xl flex-grow">
              <h3 className="font-semibold text-lg mb-1">12th Standard</h3>
              <p className="mb-1 text-gray-700">Shikhar Public School</p>
              <p className="mb-1 text-gray-700">Percentage: 90.5%</p>
              <span className="inline-block bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium">2021 - 2022</span>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="w-[50px] h-[50px] rounded-full bg-gray-100 flex justify-center items-center text-2xl shadow-lg flex-shrink-0">
              📚
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow transition hover:-translate-y-1 hover:shadow-xl flex-grow">
              <h3 className="font-semibold text-lg mb-1">10th Standard</h3>
              <p className="mb-1 text-gray-700">Shikhar Public School</p>
              <p className="mb-1 text-gray-700">Percentage: 92.5%</p>
              <span className="inline-block bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium">2019 - 2020</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative after:content-[''] after:absolute after:w-20 after:h-1 after:bg-gradient-to-r after:from-indigo-600 after:to-pink-400 after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:rounded">My Tech Stack</h2>
        {/* Frontend */}
        <div className="mb-10">
          <h3 className="text-xl text-indigo-700 text-center font-semibold mb-6">Frontend</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
              { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
              { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
              { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
              { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" }
            ].map((tech, i) => (
              <div key={tech.name} className={`bg-white rounded-xl p-6 w-28 flex flex-col items-center shadow-lg transition-transform duration-300 opacity-0 translate-y-6 animate-fadein`} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="mb-3 flex justify-center items-center h-12">
                  <Image src={tech.icon} alt={tech.name} width={40} height={40} />
                </div>
                <p className="font-medium">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Backend */}
        <div className="mb-10">
          <h3 className="text-xl text-indigo-700 text-center font-semibold mb-6">Backend</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
              { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
              { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
              { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" }
            ].map((tech, i) => (
              <div key={tech.name} className={`bg-white rounded-xl p-6 w-28 flex flex-col items-center shadow-lg transition-transform duration-300 opacity-0 translate-y-6 animate-fadein`} style={{ animationDelay: `${(i+5) * 0.1}s` }}>
                <div className="mb-3 flex justify-center items-center h-12">
                  <Image src={tech.icon} alt={tech.name} width={40} height={40} />
                </div>
                <p className="font-medium">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Tools */}
        <div className="mb-10">
          <h3 className="text-xl text-indigo-700 text-center font-semibold mb-6">Tools</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
              { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
              { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
              { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" }
            ].map((tech, i) => (
              <div key={tech.name} className={`bg-white rounded-xl p-6 w-28 flex flex-col items-center shadow-lg transition-transform duration-300 opacity-0 translate-y-6 animate-fadein`} style={{ animationDelay: `${(i+9) * 0.1}s` }}>
                <div className="mb-3 flex justify-center items-center h-12">
                  <Image src={tech.icon} alt={tech.name} width={40} height={40} />
                </div>
                <p className="font-medium">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
        {/* AI/ML */}
        <div>
          <h3 className="text-xl text-indigo-700 text-center font-semibold mb-6">AI/ML</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
              { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
              { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" }
            ].map((tech, i) => (
              <div key={tech.name} className={`bg-white rounded-xl p-6 w-28 flex flex-col items-center shadow-lg transition-transform duration-300 opacity-0 translate-y-6 animate-fadein`} style={{ animationDelay: `${(i+13) * 0.1}s` }}>
                <div className="mb-3 flex justify-center items-center h-12">
                  <Image src={tech.icon} alt={tech.name} width={40} height={40} />
                </div>
                <p className="font-medium">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-5 md:px-[5%] text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 relative after:content-[''] after:absolute after:w-20 after:h-1 after:bg-gradient-to-r after:from-indigo-600 after:to-pink-400 after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:rounded">Get In Touch</h2>
        <p className="text-lg text-gray-700 mb-8">
          I'm always open to new opportunities and collaborations.
          Feel free to reach out if you'd like to work together!
        </p>
        <button
          className="px-8 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-indigo-600 to-pink-400 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          onClick={() => router.push("/contact")}
        >
          Contact Me
        </button>
      </section>

      {/* Animations (Tailwind custom classes) */}
      <style jsx global>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s steps(1, end) infinite;
        }
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes pulse-shape {
          0% { transform: rotate(-10deg) scale(1); }
          100% { transform: rotate(-8deg) scale(1.05); }
        }
        .animate-pulse-shape {
          animation: pulse-shape 6s ease-in-out infinite alternate;
        }
        @keyframes fadein {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadein {
          animation: fadein 0.5s forwards;
        }
      `}</style>
    </main>
  );
}