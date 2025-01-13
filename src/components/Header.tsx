"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 text-white">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
          <Link href="/" className="hover:text-blue-400 transition">
            Flomad Labs <span className="text-blue-500">R&D</span>
          </Link>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-center flex-1 space-x-8 text-sm font-medium tracking-wide">
          <Link href="#about" className="hover:text-blue-400 transition">
            About
          </Link>
          <Link href="#research" className="hover:text-blue-400 transition">
            Research
          </Link>
          <Link href="#technologies" className="hover:text-blue-400 transition">
            Technologies
          </Link>
          <Link href="#explore" className="hover:text-blue-400 transition">
            Explore
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="block md:hidden text-xl"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-black bg-opacity-90 py-4 px-4 space-y-4">
          <Link href="#about" className="block hover:text-blue-400 transition">
            About
          </Link>
          <Link href="#research" className="block hover:text-blue-400 transition">
            Research
          </Link>
          <Link href="#technologies" className="block hover:text-blue-400 transition">
            Technologies
          </Link>
          <Link href="#explore" className="block hover:text-blue-400 transition">
            Explore
          </Link>
        </nav>
      )}
    </header>
  );
}
