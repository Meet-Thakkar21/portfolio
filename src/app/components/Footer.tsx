"use client";

import Link from "next/link";
import portfolioData from "../data.json";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  const { name } = portfolioData;
  const { email, socials } = portfolioData.contactInfo;

  const getSocialIcon = (socialName: string) => {
    switch (socialName) {
      case "GitHub":
        return <Github size={20} />;
      case "LinkedIn":
        return <Linkedin size={20} />;
      case "Twitter":
        return <Twitter size={20} />;
      case "Instagram":
        return <Instagram size={20} />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 relative inline-block after:content-[''] after:block after:h-1 after:w-10 after:bg-gradient-to-r after:from-indigo-500 after:to-pink-400 after:rounded after:mt-2"></h3>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 relative inline-block after:content-[''] after:block after:h-1 after:w-10 after:bg-gradient-to-r after:from-indigo-500 after:to-pink-400 after:rounded after:mt-2">{name}</h3>
            <p className="text-gray-600 mb-4">
              Full-stack developer passionate about creating innovative solutions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 relative inline-block after:content-[''] after:block after:h-1 after:w-10 after:bg-gradient-to-r after:from-indigo-500 after:to-pink-400 after:rounded after:mt-2">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-indigo-500 transition hover:translate-x-1 block">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-indigo-500 transition hover:translate-x-1 block">About</Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-600 hover:text-indigo-500 transition hover:translate-x-1 block">Projects</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-indigo-500 transition hover:translate-x-1 block">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 relative inline-block after:content-[''] after:block after:h-1 after:w-10 after:bg-gradient-to-r after:from-indigo-500 after:to-pink-400 after:rounded after:mt-2">Connect</h3>
            <div className="flex gap-4 justify-center md:justify-start">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 flex justify-center items-center text-gray-700 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-pink-400 hover:text-white transition"
                  aria-label={social.name}
                >
                  {getSocialIcon(social.name)}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mb-4">
          <a
            href={`mailto:${email}`}
            className="inline-block bg-gray-100 px-6 py-2 rounded-full text-gray-900 font-medium transition relative hover:bg-gradient-to-r hover:from-indigo-500 hover:to-pink-400 hover:text-white"
          >
            {email}
          </a>
        </div>

        <div className="border-t border-gray-200 pt-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} {name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}