"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); 

  return (
    <header className="fixed w-full z-50 text-white bg-black py-6">
      <div className="container mx-auto flex items-center px-6">
        {/* Logo (Left-Aligned) */}
        <h1 className="text-3xl font-bold tracking-wide">
          <Link href="/" className="hover:text-blue-400 transition">
            Flomad Labs <span className="text-blue-500">R&D</span>
          </Link>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-end pr-12 space-x-8 text-xl font-medium tracking-wide">
          <Link href="/#focus" className="hover:text-blue-400 transition">
            Focus
          </Link>
          <Link href="/#about" className="hover:text-blue-400 transition">
            About
          </Link>
          <Link href="/#technologies" className="hover:text-blue-400 transition">
            Technologies
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="block md:hidden text-2xl ml-auto"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-black bg-opacity-90 py-4 px-6 space-y-4 text-xl">
          <Link href="/#focus" className="block hover:text-blue-400 transition">
            Focus
          </Link>
          <Link href="/#about" className="block hover:text-blue-400 transition">
            About
          </Link>
          <Link href="/#technologies" className="block hover:text-blue-400 transition">
            Technologies
          </Link>
        </nav>
      )}
    </header>
  );
}
