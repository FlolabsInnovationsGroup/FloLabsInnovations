"use client";

import { useRouter } from "next/navigation";
import { Home } from "lucide-react"; 

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/")} // Navigate to homepage
      className="fixed top-20 left-6 bg-blue-600/80 p-3 rounded-full hover:bg-blue-500 transition shadow-md z-50"
      aria-label="Go back to the homepage"
    >
      <Home size={24} className="text-white" />
    </button>
  );
}
