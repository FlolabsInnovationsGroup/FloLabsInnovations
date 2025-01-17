import { Metadata } from "next";
import Hero from "../components/Hero/Hero";

import FocusSection from "../components/FocusSection/FocusSection";
import AboutSection from "../components/AboutSection/AboutSection";
import Technologies from "../components/Technologies/Technologies";


export const metadata: Metadata = {
  title: "Flomad Labs R&D",
  description: "Innovative research and cutting-edge technologies at Flomad Labs.",
};

export default function HomePage() {
  return (
    <main className="bg-black text-white scroll-smooth">
      {/* Hero Section */}
      <Hero />

      {/* Our Focus Section */}
      <FocusSection />

      {/* About Us Section */}
      <AboutSection />

      {/* Technology Section */}
      <Technologies />
    </main>
  );
}
