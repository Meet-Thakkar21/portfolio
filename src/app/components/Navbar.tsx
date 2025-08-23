"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex justify-center items-center transition-all duration-300 ${
        scrolled
          ? "h-[60px] bg-[#191A21]/95 shadow-md backdrop-blur-lg border-b border-white/5"
          : "h-[80px] bg-[#18181c]/95"
      }`}
    >
      <div className="w-[90%] max-w-7xl flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center text-2xl md:text-3xl font-bold no-underline text-white"
        >
          Meet Thakkar
          <span className="ml-2 text-xl md:text-2xl origin-[70%_70%] animate-wave">👨‍💻</span>
        </Link>
        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex md:items-center md:gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group text-gray-100 font-medium no-underline px-1 py-0.5 rounded transition-colors duration-200 hover:text-blue-400 hover:bg-[#232334]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile Menu Button */}
        <div
          className="md:hidden flex flex-col justify-between w-7 h-5 cursor-pointer z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-full h-0.5 bg-gray-100 rounded-sm transition-all duration-300 ${menuOpen ? "transform translate-y-2 rotate-45" : ""}`}></span>
          <span className={`block w-full h-0.5 bg-gray-100 rounded-sm transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-full h-0.5 bg-gray-100 rounded-sm transition-all duration-300 ${menuOpen ? "transform -translate-y-2 -rotate-45" : ""}`}></span>
        </div>
        {/* Mobile Menu Links */}
        <div
          className={`
            md:hidden fixed top-0 h-full w-[70%] bg-[#18181c] shadow-xl
            flex flex-col items-center justify-center gap-8
            transition-all duration-300
            ${menuOpen ? "right-0" : "-right-full"}
          `}
        >
          <ul className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-2xl text-gray-100 font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <style jsx global>{`
        @keyframes wave {
          0% { transform: rotate(0deg);}
          15% { transform: rotate(-8deg);}
          30% { transform: rotate(14deg);}
          45% { transform: rotate(-4deg);}
          60% { transform: rotate(8deg);}
          75% { transform: rotate(-2deg);}
          100% { transform: rotate(0deg);}
        }
        .animate-wave {
          animation: wave 2.3s infinite;
          display:inline-block;
        }
      `}</style>
    </nav>
  );
}