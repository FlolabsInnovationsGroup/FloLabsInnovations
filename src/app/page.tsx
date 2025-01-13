import { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "../components/Hero/Hero";

const FocusSection = dynamic(() => import("../components/FocusSection/FocusSection"));
const AboutSection = dynamic(() => import("../components/AboutSection/AboutSection"));
const Technologies = dynamic(() => import("../components/Technologies/Technologies"));

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
