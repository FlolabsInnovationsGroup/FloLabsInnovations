"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current path

  // Debug log for the current route
  console.log("Current Pathname:", pathname);


  return (
    <header className="fixed w-full z-50 text-white bg-black py-6">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
          <Link href="/" className="hover:text-blue-400 transition">
            Flomad Labs <span className="text-blue-500">R&D</span>
          </Link>
        </h1>

        {/* Desktop Navigation (Visible on larger screens) */}
        <nav className="hidden md:flex justify-center flex-1 space-x-8 text-sm font-medium tracking-wide">
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

        {/* Mobile Menu Toggle (Visible on smaller screens) */}
        <button
          className="block md:hidden text-xl"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-black bg-opacity-90 py-4 px-4 space-y-4">
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
