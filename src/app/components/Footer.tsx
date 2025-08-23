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
    <footer className="bg-[#191A21] pt-14 pb-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">{name}</h3>
            <p className="text-gray-400 mb-4">
              Full-stack developer passionate about creating innovative solutions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-blue-400 transition block">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-blue-400 transition block">About</Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-blue-400 transition block">Projects</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-blue-400 transition block">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Connect</h3>
            <div className="flex gap-4 justify-center md:justify-start">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#232334] flex justify-center items-center text-gray-200 hover:bg-blue-500 hover:text-white transition"
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
            className="inline-block bg-[#232334] px-6 py-2 rounded-full text-gray-100 font-medium transition hover:bg-blue-500 hover:text-white"
          >
            {email}
          </a>
        </div>
        <div className="border-t border-white/10 pt-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} {name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}