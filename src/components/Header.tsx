"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full z-50 text-white bg-black py-6">
      <div className="container mx-auto flex items-center px-6">
        {/* Logo (Left-Aligned) */}
        <div className="flex items-center space-x-3">
          <Link
            href="/"
            className="flex items-center space-x-3 hover:opacity-80 transition">
            <img
              src="/images/FloLabs_logo.svg"
              alt="FloLabs Innovations Group"
              className="h-10 w-auto"
            />
            <h1 className="text-3xl font-bold tracking-wide">
              FloLabs Innovations
              <span className="text-blue-500"> Group </span>
            </h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-end pr-12 space-x-8 text-xl font-medium tracking-wide">
          <Link href="/#focus" className="hover:text-blue-400 transition">
            Focus
          </Link>
          <Link href="/#about" className="hover:text-blue-400 transition">
            About
          </Link>
          <Link
            href="/#technologies"
            className="hover:text-blue-400 transition">
            Technologies
          </Link>
          <Link
            href="https://flolabs.international"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition">
            Internships
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        {isMounted && (
          <button
            className="block md:hidden text-2xl ml-auto p-2 hover:text-blue-400 transition"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
            {isMenuOpen ? "✖" : "☰"}
          </button>
        )}
      </div>

      {/* Mobile Navigation Menu */}
      {isMounted && (
        <div
          className={`md:hidden fixed inset-0 bg-black bg-opacity-95 z-40 transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}>
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <Link
              href="/#focus"
              className="text-2xl font-medium hover:text-blue-400 transition"
              onClick={() => setIsMenuOpen(false)}>
              Focus
            </Link>
            <Link
              href="/#about"
              className="text-2xl font-medium hover:text-blue-400 transition"
              onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link
              href="/#technologies"
              className="text-2xl font-medium hover:text-blue-400 transition"
              onClick={() => setIsMenuOpen(false)}>
              Technologies
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
