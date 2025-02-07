"use client";

import { useRouter } from "next/navigation";
import { Home } from "lucide-react"; // Importing an icon for a better look

export default function BackButton() {
  const router = useRouter();

  return (
    <div className="mt-8"> {/* Increased margin to prevent overlap with the header */}
      <button
        onClick={() => router.push("/")} // Navigate to homepage
        className="flex items-center gap-2 bg-[#0073e6] text-white font-semibold py-2 px-5 rounded-lg shadow-md hover:bg-[#005bb5] transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
        aria-label="Go back to the homepage"
      >
        <Home size={20} />
        <span>Back to Home</span>
      </button>
    </div>
  );
}
