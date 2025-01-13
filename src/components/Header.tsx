"use client";

import { useState } from "react";
import Link from "next/link"; // Import Next.js Link component for navigation

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 text-white">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        {/* Logo */}
        <Link href="/" legacyBehavior>
          <a className="text-2xl md:text-3xl font-bold tracking-wide cursor-pointer">
            Flomad Labs <span className="text-blue-500">R&D</span>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-center flex-1 space-x-8 text-sm font-medium tracking-wide">
          <Link href="/#focus" legacyBehavior>
            <a className="hover:text-blue-400 transition">Focus</a>
          </Link>
          <Link href="/#about" legacyBehavior>
            <a className="hover:text-blue-400 transition">About</a>
          </Link>
          <Link href="/#technologies" legacyBehavior>
            <a className="hover:text-blue-400 transition">Technologies</a>
          </Link>
          <Link href="/#links" legacyBehavior>
            <a className="hover:text-blue-400 transition">Links</a>
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
          <Link href="/#focus" legacyBehavior>
            <a className="block hover:text-blue-400 transition">Focus</a>
          </Link>
          <Link href="/#about" legacyBehavior>
            <a className="block hover:text-blue-400 transition">About</a>
          </Link>
          <Link href="/#technologies" legacyBehavior>
            <a className="block hover:text-blue-400 transition">Technologies</a>
          </Link>
          <Link href="/#links" legacyBehavior>
            <a className="block hover:text-blue-400 transition">Links</a>
          </Link>
        </nav>
      )}
    </header>
  );
}
