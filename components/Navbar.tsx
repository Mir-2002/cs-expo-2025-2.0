"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const navLinks = [
  { name: "Events", href: "/event" },
  { name: "Projects", href: "/projects" },
  { name: "Partners", href: "/partnership" },
  { name: "Gallery", href: "/gallery" },
  { name: "Hall of Fame", href: "/hall-of-fame" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="w-full lg:w-3/4 lg:gap-x-20 h-16 flex flex-row items-center justify-between bg-black/40 backdrop-blur-sm fixed top-0 left-1/2 -translate-x-1/2 z-50 px-4 lg:px-8 lg:rounded-lg">
        {/* Logo */}
        <Link
          href="/"
          className="relative z-50 font-stalinist-one text-2xl tracking-widest"
        >
          <Image
            src="/logos/Logo.png"
            alt="CS Expo 2025 Logo"
            width={48}
            height={48}
            className="drop-shadow-lg"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-stalinist-one text-lg text-white hover:text-secondary-blue transition-colors duration-300 lg:text-base"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Burger Icon */}
        <button
          onClick={toggleMenu}
          className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-primary-black/95 backdrop-blur-md z-40 transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={toggleMenu}
              className={`font-stalinist-one text-xl text-off-white hover:text-secondary-blue transition-all duration-300 ${
                isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
