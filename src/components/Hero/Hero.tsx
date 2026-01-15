"use client";

import { Poppins } from "next/font/google";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import { useState, useEffect } from "react";

// Load Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header
      className={`relative bg-header-bg bg-cover bg-center text-white h-screen flex flex-col justify-center items-center ${poppins.variable}`}
      aria-label="FloLabs Innovations Group Hero Section">
      {/* Content Wrapper */}
      <div className="text-center">
        {/* Title */}
        <h1
          className={`text-5xl md:text-6xl font-bold tracking-tight mb-6 drop-shadow-xl ${
            isMounted ? "animate-fadeIn" : "opacity-0"
          }`}
          aria-label="Flo Labs Research and Development">
          FloLabs Innovations Group
        </h1>

        {/* Subtitle */}
        <p
          className={`text-xl md:text-3xl max-w-3xl leading-relaxed drop-shadow-lg ${
            isMounted ? "animate-fadeInDelay" : "opacity-0"
          }`}
          aria-label="An AI and Robotics Research and Development Collective">
          An AI and Robotics Research & Development Collective
        </p>
      </div>

      {/* Scroll Down Button */}
      {isMounted && (
        <Link href="#focus" aria-label="Scroll down to see more content">
          <button
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center text-white hover:text-blue-400 transition"
            aria-label="Scroll down">
            <FaChevronDown className="mt-2 text-3xl animate-bounce" />
          </button>
        </Link>
      )}
    </header>
  );
}
