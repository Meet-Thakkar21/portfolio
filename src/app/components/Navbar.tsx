"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    // Cleanup function to remove the event listener
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
          ? "h-[70px] bg-white/95 shadow-lg backdrop-blur-md"
          : "h-[80px] bg-transparent"
      }`}
    >
      <div className="w-[90%] max-w-7xl flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center text-3xl font-bold text-gray-800 no-underline transition-transform duration-300 hover:-translate-y-0.5">
          <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
            Meet Thakkar
          </span>
          <span className="ml-2 text-2xl origin-[70%_70%] animate-wave">
            👨‍💻
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <ul
          className={`
            hidden md:flex md:items-center md:gap-8
            transition-all duration-300 ease-in-out
          `}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="group text-gray-800 font-medium no-underline transition-colors duration-300 hover:text-blue-500">
                {link.label}
                {/* Underline effect */}
                <span className="block h-0.5 max-w-0 bg-gradient-to-r from-blue-500 to-pink-500 transition-all duration-300 group-hover:max-w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button (Hamburger) */}
        <div
          className="md:hidden flex flex-col justify-between w-[30px] h-[21px] cursor-pointer z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-full h-0.5 bg-gray-800 rounded-sm transition-all duration-300 ${menuOpen ? "transform translate-y-2.5 rotate-45" : ""}`}></span>
          <span className={`block w-full h-0.5 bg-gray-800 rounded-sm transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-full h-0.5 bg-gray-800 rounded-sm transition-all duration-300 ${menuOpen ? "transform -translate-y-2.5 -rotate-45" : ""}`}></span>
        </div>

        {/* Mobile Menu Links */}
        <div
          className={`
            md:hidden fixed top-0 h-full w-[70%] bg-white shadow-xl
            flex flex-col items-center justify-center gap-8
            transition-all duration-300 ease-in-out
            ${menuOpen ? "right-0" : "-right-full"}
          `}
        >
          <ul className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-2xl text-gray-800 font-medium"
                  onClick={() => setMenuOpen(false)} // Close menu on click
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}