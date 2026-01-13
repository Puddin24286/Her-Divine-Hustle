"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "About", href: "#about" },
    { label: "Blueprints", href: "#blueprints" },
    { label: "Community", href: "#community" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="relative border-t border-white/10 bg-obsidian/80 backdrop-blur-sm">
      <div className="section-container">
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <Link
            href="#"
            className="hover:opacity-80 transition-opacity duration-300"
          >
            <Image
              src="/jessicaslogo.png"
              alt="Her Divine Hustle Co."
              width={1024}
              height={1024}
              className="h-48 md:h-24 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-base text-off-white/80 hover:text-gold transition-colors duration-300 font-light"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 w-6 h-6 justify-center items-center"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-off-white transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-off-white transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-off-white transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu Links */}
        {isOpen && (
          <div className="md:hidden border-t border-white/10 py-6 space-y-4">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-base text-off-white/80 hover:text-gold transition-colors duration-300 font-light"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
