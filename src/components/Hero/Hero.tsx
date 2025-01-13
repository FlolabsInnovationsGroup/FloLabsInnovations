import { Poppins } from "next/font/google";

// Load Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // Regular and Bold weights
  variable: "--font-poppins",
});

export default function Hero() {
  return (
    <section
      className={`bg-header-bg bg-cover bg-center text-white h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black/60 via-black/30 to-black/60 ${poppins.variable}`}
    >
      {/* Title */}
      <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 drop-shadow-xl">
        Flomad Labs R&D
      </h1>

      {/* Subtitle */}
      <p className="text-xl md:text-3xl text-center max-w-3xl leading-relaxed drop-shadow-lg">
        An AI and Robotics Research & Development Collective
      </p>
    </section>
  );
}

